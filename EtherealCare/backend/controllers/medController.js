const Medication = require('../models/Medication');
const Log = require('../models/Log');
const User = require('../models/User');

exports.addMedication = async (req, res) => {
  try {
    const { name, dosage, instructions, warning, scheduledTimes, type, totalInventory } = req.body;
    
    const medication = new Medication({
      userId: req.user.id,
      name,
      dosage,
      instructions,
      warning,
      scheduledTimes,
      type,
      totalInventory,
      remainingInventory: totalInventory
    });

    const savedMed = await medication.save();
    res.status(201).json(savedMed);
  } catch (error) {
    res.status(500).json({ message: 'Error adding medication', error: error.message });
  }
};

exports.getMedications = async (req, res) => {
  try {
    const medications = await Medication.find({ userId: req.user.id });
    res.json(medications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching medications', error: error.message });
  }
};

exports.markMedicationTaken = async (req, res) => {
  try {
    const { medicationId, scheduledTime, date, status } = req.body;
    
    // Check if log exists
    let log = await Log.findOne({ userId: req.user.id, medicationId, scheduledTime, date });
    
    if (log) {
      log.status = status;
      log.actualTimeTaken = status === 'taken' ? new Date() : log.actualTimeTaken;
      await log.save();
    } else {
      log = new Log({
        userId: req.user.id,
        medicationId,
        scheduledTime,
        date,
        status,
        actualTimeTaken: status === 'taken' ? new Date() : null
      });
      await log.save();
    }

    // Logic to increment streak if taken
    if (status === 'taken') {
      const user = await User.findById(req.user.id);
      user.streak = (user.streak || 0) + 1; // Simplified streak logic for demo
      await user.save();
    } else if (status === 'missed') {
      const user = await User.findById(req.user.id);
      user.streak = 0; // Reset streak
      await user.save();
    }

    res.json({ message: `Medication marked as ${status}`, log });
  } catch (error) {
    res.status(500).json({ message: 'Error marking medication', error: error.message });
  }
};

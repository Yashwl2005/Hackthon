const Alert = require('../models/Alert');

exports.triggerAlert = async (req, res) => {
  try {
    const { message } = req.body;
    const alert = await Alert.create({
      userId: req.user.id,
      message: message || 'Emergency! Caregiver assistance requested.'
    });
    
    res.status(201).json({ success: true, alert, message: 'Caregiver alerted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error triggering alert', error: error.message });
  }
};

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alerts', error: error.message });
  }
};

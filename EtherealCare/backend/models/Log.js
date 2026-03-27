const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication', required: true },
  scheduledTime: { type: String, required: true }, // "08:00"
  actualTimeTaken: { type: Date },
  status: { type: String, enum: ['taken', 'missed', 'pending', 'skipped'], default: 'pending' },
  date: { type: String, required: true } // "YYYY-MM-DD" formatted string based on local time
}, { timestamps: true });

module.exports = mongoose.model('Log', LogSchema);

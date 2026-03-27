const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  instructions: { type: String }, // e.g., "Take 1 pill with a full glass of water. Best taken after breakfast."
  warning: { type: String }, // e.g., "Avoid drinking grapefruit juice"
  scheduledTimes: [{ type: String, required: true }], // ["08:00", "20:00"] (24-hour format string)
  type: { type: String }, // Pill, Capsule, Syrup
  totalInventory: { type: Number, default: 30 },
  remainingInventory: { type: Number, default: 30 }
}, { timestamps: true });

module.exports = mongoose.model('Medication', MedicationSchema);

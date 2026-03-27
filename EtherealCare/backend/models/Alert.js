const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['active', 'resolved'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Alert', AlertSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, sparse: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['elderly', 'caregiver', 'admin'], default: 'elderly' },
  caregiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  streak: { type: Number, default: 0 },
  lastActive: { type: Date, default: Date.now },
  contacts: [{
    name: { type: String },
    phone: { type: String },
    relation: { type: String }
  }]
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);

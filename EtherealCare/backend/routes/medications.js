const express = require('express');
const router = express.Router();
const { addMedication, getMedications, markMedicationTaken } = require('../controllers/medController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, addMedication);
router.get('/', protect, getMedications);
router.post('/mark-taken', protect, markMedicationTaken);

module.exports = router;

const express = require('express');
const router = express.Router();
const { triggerAlert, getAlerts } = require('../controllers/alertController');
const { protect } = require('../middleware/authMiddleware');

router.post('/trigger', protect, triggerAlert);
router.get('/', protect, getAlerts);

module.exports = router;

const express = require('express');
const ScheduleController = require('../controllers/schedule');
const router = express.Router();

router.post('/schedules', ScheduleController.routeCreateSchedule)



module.exports = router;
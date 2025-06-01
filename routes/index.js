const express = require('express');
const ScheduleController = require('../controllers/schedule');
const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const UserController = require('../controllers/user');
const router = express.Router();

router.post('/login', UserController.routeLogin)

router.use(authenticationMiddleware)

router.post('/schedules', ScheduleController.routeCreateSchedule)
router.get('/schedules', ScheduleController.routeGetSchedule)


router.use(errorHandlerMiddleware)



module.exports = router;
const moment = require('moment');
const { Schedule } = require('../models');

class ScheduleController {

    static async routeCreateSchedule(req, res) {
    
        try {
            const { doctor_id, day, time_start, time_finish, quota, status, date } = req.body;
            const dateSplit = date.split(' s/d ').map(d => moment(d.trim()))
            const [ start, end ] = dateSplit;
            let schedules = []
    
            for(let date = start.clone(); date.isSameOrBefore(end); date.add(1, 'days')) {
                if(date.format('dddd').toLowerCase() === day.toLowerCase()){
                    schedules.push({
                        doctor_id,
                        day,
                        time_start,
                        time_finish,
                        quota,
                        status,
                        date: date.format('YYYY-MM-DD')
                    })
                }
            }
    
            const result = await Schedule.bulkCreate(schedules)
    
            return res.status(201).send({
                message: 'Schedules created successfully',
                data: result
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async routeGetSchedule(req, res){
        try {
            const result = await Schedule.findAll()

            return res.status(200).send({
                message: 'Schedules retrieved successfully',
                data: result
            })

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = ScheduleController;
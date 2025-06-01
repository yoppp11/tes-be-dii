const moment = require('moment');
const { Schedule, Doctor } = require('../models');

class ScheduleController {

    static async routeCreateSchedule(req, res, next) {
    
        try {
            const { doctor_id, day, time_start, time_finish, quota, status, date } = req.body;
            if(!doctor_id) throw { name: 'BadRequest', message: 'Doctor ID is required' }
            if(!day) throw { name: 'BadRequest', message: 'Day is required' }
            if(!time_start) throw { name: 'BadRequest', message: 'Start time is required' }
            if(!time_finish) throw { name: 'BadRequest', message: 'Finish time is required' }
            if(!quota) throw { name: 'BadRequest', message: 'Quota is required' }
            if(!status) throw { name: 'BadRequest', message: 'Status is required' }
            if(!date) throw { name: 'BadRequest', message: 'Date is required' }
            
            const dateSplit = date.split(' s/d ').map(d => moment(d.trim()))
            const [ start, end ] = dateSplit;
            let schedules = [];
            console.log(req.body);
    
            for(let date = start.clone(); date.isSameOrBefore(end); date.add(1, 'days')) {
                if(date.format('dddd').toLowerCase() === day.toLowerCase()){
                    let result = await Schedule.create({
                        doctor_id,
                        day,
                        time_start,
                        time_finish,
                        quota,
                        status,
                        date: date.format('YYYY-MM-DD')
                    })
                    schedules.push(result)
                    // schedules.push({
                    //     doctor_id,
                    //     day,
                    //     time_start,
                    //     time_finish,
                    //     quota,
                    //     status,
                    //     date: date.format('YYYY-MM-DD')
                    // });
                }
            }
            // const result = await Schedule.bulkCreate(schedules);
    
            return res.status(201).send({
                message: 'Schedules created successfully',
                data: schedules
            });
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async routeGetSchedule(req, res, next){
        try {
            let result = await Schedule.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: {
                    model: Doctor,
                    attributes: ['name'],
                }
            })

            return res.status(200).send({
                message: 'Schedules retrieved successfully',
                data: result.map(el => {
                    return {
                        id: el.id,
                        doctor_id: el.doctor_id,
                        day: el.day,
                        time_start: el.time_start,
                        time_finish: el.time_finish,
                        quota: el.quota,
                        status: el.status,
                        doctor_name: el.Doctor.name,    
                        date: el.date,
                    }
                })
            })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = ScheduleController;
const{ bookings, services} = require('./booking')
const getAppointment = (id, res) =>{
    try {
      const getBooking =  services.filter((item)=> item.id === parseInt(id) );
      res.send(getBooking[0]); // 200
    }
    catch(err){
        res.status(404).json({
            "message": "failed due to internal network"
          })
    }
}
const getAppointments = (res) =>{
    try {
        res.send(services)
    }
    catch(err){
        res.status(404).json({
            "message": "failed due to internal network",
            "err": err
          })
    }
}
const postAppointment = (data, res) =>{
    try {
      if(!bookings.find((item)=> item.id === parseInt(data.id))){
        bookings.push(data);
        res.status(201).json({
          "message": "created successfully"
        })
      }else {
        res.status(200).json({
          "message": "Already existed in db"
        })
      }
    }
    catch(err){
        res.status(404).message({
            "message": "failed due to internal network",
            err
          })
    }
}

module.exports = {
    getAppointment,
    getAppointments,
    postAppointment
}
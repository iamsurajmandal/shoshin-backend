const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


const {getAppointment, getAppointments, postAppointment} = require('./controller');

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/api/services/:id',async (req, res)=>{
    try {
    const id = req.params.id;
     await getAppointment(id, res);
    }
    catch(err){
        res.status(404).json({
            "message": "failed due to internal network"
          })
    }
})
app.get('/api/services/',async (req, res)=>{
    try {
        await getAppointments(res);
        }
        catch(err){
            res.status(404).json({
              "message": "failed due to internal network"
            })
        }
})
app.post('/api/bookings', async (req, res)=>{

    try {
    const data = req.body;
    await postAppointment(data, res);
    }
    catch(err){
        res.status(404).json({
          "message": "failed due to internal network",
          err
        })
    }
})
app.listen(3000)
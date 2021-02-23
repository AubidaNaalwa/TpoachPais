const express = require('express');
const Courses = require('../models/Courses');
const SpaceCourses = require('../models/SpaceCourses');
const SpaceNews = require('../models/SpaceNews');
const Images = require('../models/Images');
const SpaceExperiments = require('../models/SpaceExperiments');
const News = require('../models/News');

const Experiments = require('../models/Experiments');
const Events = require('../models/Events');
const SpaceEvents  = require('../models/SpaceEvents');
const Contact = require('../models/ContactUs');
const router = express.Router();
AdminUserName = require('../../src/Constants').AdminUserName;
AdminPassword = require('../../src/Constants').AdminPassword;
Login =0;

router.post('/logIn', (req, res)=>{
    if(!req.body){
        res.send({error : 1})
        Login =0;
        return
    }
    if(AdminUserName === req.body.username && AdminPassword === req.body.password){
        res.send({error:0})
        Login = 1;
    }else{
        res.send({error:1})
        Login =0;
    }
})

router.post('/LogOut', (req, res)=>{
    Login =0;
    res.send({error:0})
})

const checkValidate = (body) => {
    const keys = Object.keys(body);
    //TODO
    //for (let i of keys)
        //res.body[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

    return body;
}

router.get('/', (req, res) => {
    res.send("server working");
})


router.post('/experiment', (req, res) => {
    let body = req.body;
    if (!body || !Login) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const experiment = new Experiments(body);
    experiment.save();
    res.end();
});

router.get('/experiments', (req, res) => {
    Experiments.find({},[],{sort:{date:-1}}, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ experiments: data, status: 200 });
    });
});

router.put('/experiments/tpoach/update/id=:id', (req, res)=>{
    if(!req.params.id){
        res.send({err:"not all faild exist"})
        return
    }
    Experiments.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

router.delete('/experiments/tpoach/delete', (req, res)=>{
    if(!req.body.id){
        res.send({err:"not all faild exist"})
        return
    }
    Experiments.findByIdAndDelete(req.body.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

//Start Space Experiments
router.post('/space/experiment', (req, res) => {
    let body = req.body;
    if (!body|| !Login) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const experiment = new SpaceExperiments(body);
    experiment.save();
    res.end();
});

router.get('/space/experiments', (req, res) => {
    SpaceExperiments.find({}, [],{sort:{date:-1}},function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ experiments: data, status: 200 });
    });
});


router.put('/experiments/space/update/id=:id', (req, res)=>{
    if(!req.params.id){
        res.send({err:"not all faild exist"})
        return
    }
    SpaceExperiments.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

router.delete('/experiments/space/delete', (req, res)=>{
    if(!req.body.id){
        res.send({err:"not all faild exist"})
        return
    }
    SpaceExperiments.findByIdAndDelete(req.body.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})


//End Space Experiments

router.get('/courses', (req, res) => {
    Courses.find({}, [],{sort:{date:-1}},function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ courses: data, status: 200 });
    });
});

router.post('/course', (req, res) => {
    let body = req.body;
    if (!body|| !Login) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const course = new Courses(body);
    course.save();
    res.end();
});

router.put('/course/tpoach/update/id=:id', (req, res)=>{
    if(!req.params.id){
        res.send({err:"not all faild exist"})
        return
    }
    Courses.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

router.delete('/course/tpoach/delete', (req, res)=>{
    if(!req.body.id){
        res.send({err:"not all faild exist"})
        return
    }
    Courses.findByIdAndDelete(req.body.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})


//Space Courses
router.get('/space/courses', (req, res) => {
    SpaceCourses.find({},[],{sort:{date:-1}}, function (err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ courses: data, status: 200 });
    });
});

router.post('/space/course', (req, res) => {
    let body = req.body;
    if (!body || !Login) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const course = new SpaceCourses(body);
    course.save();
    res.end();
});

router.put('/course/space/update/id=:id', (req, res)=>{
    if(!req.params.id){
        res.send({err:"not all faild exist"})
        return
    }
    SpaceCourses.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

router.delete('/course/space/delete', (req, res)=>{
    if(!req.body.id){
        res.send({err:"not all faild exist"})
        return
    }
    SpaceCourses.findByIdAndDelete(req.body.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})
//Space Courses

router.get('/events', (req, res) => {
    Events.find({},[],{sort:{date:-1}} ,function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ events: data, status: 200 });
    });
});

router.post('/event', (req, res) => {
    let body = req.body;
    if (!body || !Login) {
        res.send({ err: "data is missing" });
        return;
    }
    body = checkValidate(req.body);
    const event = new Events(body);
    event.save();
    res.end();
});

router.put('/event/tpoach/update/id=:id', (req, res)=>{
    if(!req.params.id){
        res.send({err:"not all faild exist"})
        return
    }
    Events.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

router.delete('/event/tpoach/delete', (req, res)=>{
    if(!req.body.id){
        res.send({err:"not all faild exist"})
        return
    }
    Events.findByIdAndDelete(req.body.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

//new Space Events
router.get('/space/events', (req, res) => {
    SpaceEvents.find({}, [],{sort:{date:-1}},function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ events: data, status: 200 });
    });
});

router.post('/space/event', (req, res) => {
    let body = req.body;
    if (!body|| !Login) {
        res.send({ err: "data is missing" });
        return;
    }
    body = checkValidate(req.body);
    const event = new SpaceEvents(body);
    event.save();
    res.end();
});

router.put('/event/space/update/id=:id', (req, res)=>{
    if(!req.params.id){
        res.send({err:"not all faild exist"})
        return
    }
    SpaceEvents.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

router.delete('/event/space/delete', (req, res)=>{
    if(!req.body.id){
        res.send({err:"not all faild exist"})
        return
    }
    SpaceEvents.findByIdAndDelete(req.body.id, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }})
})

//End Space Events
router.get('/space/images/:id', (req, res) => {
    Images.find({ forWebsite: 's', category: req.params.id }, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});

router.get('/tpoach/images/:id', (req, res) => {
    Images.find({ forWebsite: 't', category: req.params.id }, function(err, data) {
        if (err)
            res.send({ err, status: 400 });
        else
            res.send({ images: data, status: 200 });
    });
});

router.post('/image', (req, res) => {
    let body = req.body;
    if (!body|| !Login) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const image = new Images(body);
    image.save();
    res.end();
});

router.get('/imagesCategory/tpoach', async (req, res) => {
    const results = await Images.aggregate().match({ forWebsite: "t" }).group(
    {
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: results });
});


router.get('/imagesCategory/space', async (req, res) => {
    const results = await Images.aggregate().match({ forWebsite: "s" }).group(
    {
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: results });
});

router.post('/contactus', (req, res) => {
    let body = req.body;
    if (!body|| !Login) {
        res.send({ err: "data is missing" });
        return;
    }

    body = checkValidate(req.body);
    const contact = new Contact(body);
    contact.save();
    res.end();
});

router.get('/space/news', async(req,res)=>{
    try{
        const courses = await SpaceCourses.find({}, [],{sort:{date:-1},limit:5})
        const events = await SpaceEvents.find({}, [],{sort:{date:-1},limit:5})
        const experiments = await SpaceExperiments.find({}, [],{sort:{date:-1},limit:5})
        res.send({courses, events, experiments})
    }catch(error){
        res.send({error})
    }

})



router.get('/tpoach/news', async (req,res)=>{
    try{
        const courses = await Courses.find({}, [],{sort:{date:-1},limit:5})
        const events = await Events.find({}, [],{sort:{date:-1},limit:5})
        const experiments = await Experiments.find({}, [],{sort:{date:-1},limit:5})
        res.send({courses, events, experiments})
    }catch(error){
        res.send({error})
    }
})



module.exports = router;
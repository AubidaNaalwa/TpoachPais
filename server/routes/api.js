const express = require('express'),
{ isValidFullName, isValidEmail, isValidMessage } = require('../../src/Constants'),
Courses = require('../models/Courses'),
Images = require('../models/Images'),
Videos = require('../models/Videos'),
Experiments = require('../models/Experiments'),
Events = require('../models/Events'),
nodemailer = require("nodemailer"),
router = express.Router(),
mongoose = require('mongoose'),
AdminUser = process.env.REACT_APP_ADMIN,
AdminPass = process.env.REACT_APP_PASS;
let isLoggedIn = true;

router.post('/login', (req, res)=> {
    const body = clearBadChars(req.body);

    if (body && AdminUser === body.username && AdminPass === body.password)
        //TODO
        isLoggedIn = true;

    res.send(isLoggedIn);
});

router.get('/logout', (req, res)=> {
    isLoggedIn = false;
    res.sendStatus(200);
});

const clearBadChars = (body) => {
    const keys = Object.keys(body);
    keys.forEach((key) => {
        if (typeof body[key] === 'string')
            body[key] = body[key].replace(/<|>/g, '').trim();
    });
    return body;
}

router.get('/experiments/id/:id', (req, res) => {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Experiments.findOne({ _id: paramID },function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid ID");
});

router.post('/experiments/new', (req, res) => {
    const body = clearBadChars(req.body);

    if (body && isLoggedIn) {
        const experiment = new Experiments(body);
        experiment.save();
        res.sendStatus(200);
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/tpais/experiments', (req, res) => {
    Experiments.find({ forWebsite: 't' }, [], {sort:{created_at: -1}}, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ experiments: result });
    });
});

router.get('/space/experiments', (req, res) => {
    Experiments.find({ forWebsite: 's' }, [], {sort: {created_at: -1}}, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ experiments: result });
    });
});

router.put('/tpais/experiments/update/:id', (req, res)=>{
    const paramID = clearBadChars(req.params.id);
    const body = clearBadChars(req.body);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Experiments.findByIdAndUpdate(paramID, body, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.put('/space/experiments/update/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    const body = clearBadChars(req.body);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Experiments.findByIdAndUpdate(paramID, body, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.delete('/tpais/experiments/delete/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Experiments.findByIdAndDelete(paramID, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.delete('/space/experiments/delete/:id', (req, res)=>{
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Experiments.findByIdAndDelete(paramID, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/courses/id/:id', (req, res) => {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Courses.findOne({ _id: paramID },function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid ID");
});

router.post('/courses/new', (req, res) => {
    const body = clearBadChars(req.body);

    if (body && isLoggedIn) {
        const course = new Courses(body);
        course.save();
        res.sendStatus(200);
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/tpais/courses', (req, res) => {
    Courses.find({ forWebsite: 't' }, [], {sort: {created_at: -1}}, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ courses: result });
    });
});

router.get('/space/courses', (req, res) => {
    Courses.find({ forWebsite: 's' }, [], {sort: {created_at: -1}}, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ courses: result });
    });
});

router.put('/tpais/courses/update/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    const body = clearBadChars(req.body);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Courses.findByIdAndUpdate(paramID, body, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.put('/space/courses/update/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    const body = clearBadChars(req.body);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Courses.findByIdAndUpdate(paramID, body, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.delete('/tpais/courses/delete/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Courses.findByIdAndDelete(paramID, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        })
    }
    else
        res.status(400).send("Invalid data");
});

router.delete('/space/courses/delete/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Courses.findByIdAndDelete(paramID, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/events/id/:id', (req, res) => {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Events.findOne({ _id: paramID },function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid ID");
});

router.post('/events/new', (req, res) => {
    const body = clearBadChars(req.body);

    if (body && isLoggedIn) {
        const event = new Events(body);
        event.save();
        res.sendStatus(200);
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/tpais/events', (req, res) => {
    Events.find({ forWebsite: 't' }, [], {sort:{created_at: -1}} ,function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ events: result });
    });
});

router.get('/space/events', (req, res) => {
    Events.find({ forWebsite: 's' }, [], {sort:{created_at: -1}}, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ events: result });
    });
});

router.put('/tpais/events/update/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    const body = clearBadChars(req.body);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Events.findByIdAndUpdate(paramID, body, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.put('/space/events/update/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    const body = clearBadChars(req.body);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Events.findByIdAndUpdate(paramID, body, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.delete('/tpais/events/delete/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Events.findByIdAndDelete(paramID, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.delete('/space/events/delete/:id', (req, res)=> {
    const paramID = clearBadChars(req.params.id);
    if (mongoose.Types.ObjectId.isValid(paramID)) {
        Events.findByIdAndDelete(paramID, function(err, result) {
            if (err)
                res.status(400).send(err.message);
            else
                res.send(result);
        });
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/tpais/gallery/images/:imageName', (req, res) => {
    const imageName = clearBadChars(req.params.imageName);
    Images.find({ forWebsite: 't', category: imageName }, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ images: result });
    });
});

router.get('/space/gallery/images/:imageName', (req, res) => {
    const imageName = clearBadChars(req.params.imageName);
    Images.find({ forWebsite: 's', category: imageName }, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send({ images: result });
    });
});

router.get('/tpais/gallery', async (req, res) => {
    const result = await Images.aggregate().match({ forWebsite: "t" }).group({
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: result });
});

router.get('/space/gallery', async (req, res) => {
    const result = await Images.aggregate().match({ forWebsite: "s" }).group({
        _id: '$category',
        imgUrl: { $first: "$img" },
        count: { $sum: 1 }
    });
    res.send({ categories: result });
});

router.post('/images/new', (req, res) => {
    const body = clearBadChars(req.body);

    if (body && isLoggedIn) {
        const image = new Images(body);
        image.save();
        res.sendStatus(200);
    }
    else
        res.status(400).send("Invalid data");
});

router.get('/tpais/videos', (req, res) => {
    Videos.find({ forWebsite: 't' }, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send(result);
    });
});

router.get('/space/videos', (req, res) => {
    Videos.find({ forWebsite: 's' }, function(err, result) {
        if (err)
            res.status(400).send(err.message);
        else
            res.send(result);
    });
});

router.post('/videos/new', (req, res) => {
    const body = clearBadChars(req.body);

    if (body && isLoggedIn) {
        const image = new Videos(body);
        image.save();
        res.sendStatus(200);
    }
    else
        res.status(400).send("Invalid data");
});

router.post('/contactus', async (req, res) => {
    const body = clearBadChars(req.body);
    if (!body || !isLoggedIn || !isValidFullName(body.fullname) || !isValidEmail(body.email) || !isValidMessage(body.message)) {
        res.status(400).send("Invalid data");
        return;
    }

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.REACT_APP_EMAIL_USER,
            pass: process.env.REACT_APP_EMAIL_PASS
        }
    });

    let mailDetails = {
        from: body.email,
        to: process.env.REACT_APP_EMAIL_TO,
        subject: `رسالة بُعثت من موقع تبواح بايس الطيبة: ${body.fullname}`,
        text: body.message
    };

    try {
        await mailTransporter.sendMail(mailDetails);
        res.sendStatus(200);
    }
    catch {
        res.status(400).send("Failed to send mail");
    }
});

router.get('/news', async (req, res) => {
    try {
        const courses = await Courses.find({}, [], { sort: { created_at: -1 }, limit: 5 });
        const events = await Events.find({}, [], { sort: { created_at: -1 }, limit: 5 });
        const experiments = await Experiments.find({}, [], { sort: { created_at: -1 }, limit: 5 });
        
        let news = [...events, ...courses, ...experiments]
        const sortedNews = news.sort((a, b) => b.created_at - a.created_at).slice(0, 5);
        res.send({ sortedNews });
    }
    catch (err) {
        res.send(err.message);
    }
});

router.get('/tpais/sticky', async (req, res)=> {
    try {
        const courses = await Courses.find({ forWebsite: 't', sticky: 'true' }, [], {sort: {stickyOrder: -1}});
        const events = await Events.find({ forWebsite: 't', sticky: 'true' }, [], {sort: {stickyOrder: -1}});
        const experiments = await Experiments.find({ forWebsite: 't', sticky: 'true' }, [], {sort: {stickyOrder: -1}});
        res.send({ courses, events, experiments });
    }
    catch(err) {
        res.status(400).send(err.message);
    }
});

router.get('/space/sticky', async (req, res)=> {
    try {
        const courses = await Courses.find({ forWebsite: 's', sticky: 'true' }, [], {sort: {stickyOrder: -1}});
        const events = await Events.find({ forWebsite: 's', sticky: 'true' }, [], {sort: {stickyOrder: -1}});
        const experiments = await Experiments.find({ forWebsite: 's', sticky: 'true' }, [], {sort: {stickyOrder: -1}});
        res.send({ courses, events, experiments });
    }
    catch(err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
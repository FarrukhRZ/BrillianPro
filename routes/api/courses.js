const express = require('express');
const router = express.Router();
const passport = require('passport');
const Courses = require('../../models/Courses');
const validateCourseInput = require('../../validation/addCourse')

//@route api/courses/test
//@desc test user route
//@access Public
router.get('/test',(req,res) =>{
    res.json({msg: "Courses Works"})
});
router.post('/addCourse',passport.authenticate('jwt',{session: false}),(req,res) =>{
    if(req.user.username != 'Admin') return res.status(401).json({user: "Unauthorized User"})
    console.log(req.body);
    let { errors, isValid } = validateCourseInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Courses.findOne({id: req.body.id})
            .then(course =>{
                if(course){
                    res.status(400).json({course: "course id already exists"})
                }
                else{
                    const newCourse = new Courses({
                        name: req.body.name,
                        id: req.body.id,
                        instructor: req.body.instructor,
                        difficulty: req.body.difficulty,
                        duration: req.body.duration
                    })
                    newCourse
                        .save()
                        .then(course => res.json(course))
                        .catch(err => console.log(err));
                }
        });
});
module.exports = router;
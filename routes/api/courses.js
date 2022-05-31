const express = require('express');
const router = express.Router();

//@route api/courses/test
//@desc test user route
//@access Public
router.get('/test',(req,res) =>{
    res.json({msg: "Courses Works"})
});

module.exports = router;
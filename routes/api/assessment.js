const express = require('express');
const router = express.Router();

//@route api/assessmemt/test
//@desc test user route
//@access Public
router.get('/test',(req,res) =>{
    res.json({msg: "Assessment Works"})
});

module.exports = router;
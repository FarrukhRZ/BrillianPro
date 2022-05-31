const express = require('express');
const router = express.Router();

//@route api/users/test
//@desc test user route
//@access Public
router.get('/test',(req,res) =>{
    res.json({msg: "User Works"})
});

module.exports = router;
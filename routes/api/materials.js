const express = require('express');
const router = express.Router();

//@route api/materials/test
//@desc test user route
//@access Public
router.get('/test',(req,res) =>{
    res.json({msg: "Materials Works"})
});



module.exports = router;
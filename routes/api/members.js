const express = require('express');
const router = express.Router();
const members = require('../.././Members');


//Deal with rest API

//Get all members
router.get('/', (req,res)=>{
    res.json(members);
});

//Get single Member
router.get('/:id' , (req,res)=>{
    const found = members.some(member => member.id === req.params.id);
    if(found)
        res.json(members.filter(member => member.id === req.params.id));
    else{
        res.status(400).json({msg:`Member ${req.params.id} Not found `});
    }
});

//Create Member
router.post('/', (req,res)=>{
    res.send(req.body);
});


module.exports = router;
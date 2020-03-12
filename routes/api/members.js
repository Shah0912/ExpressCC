const express = require('express');
const router = express.Router();
const members = require('../.././Members');
const uuid = require('uuid');

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


//Delete Member
router.delete('/:id' , (req,res)=>{
    const found = members.some(member => member.id === req.params.id);
    if(found){
        res.json({msg : 'Member deleted',members : members.filter(member => member.id !== req.params.id)});
    }
    else{
        res.status(400).json({msg:`Member ${req.params.id} Not found `});
    }
});


//Create Member
router.post('/', (req,res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        status: req.body.status
    }
    if(!newMember.name || !newMember.status)
        return res.status(400).json({msg: 'include name and status'});
    members.push(newMember);
    res.json(members); 
});


//Update Member
router.put('/:id' , (req,res)=>{
    const found = members.some(member => member.id === req.params.id);
    if(found){
        console.log(found);
        const updMember = req.body;
        console.log(updMember);
        members.forEach(member => {
            if(member.id === req.params.id){
                console.log(member);
                member.name = updMember.name ? updMember.name : member.name;
                member.status = updMember.status ? updMember.status : member.status;
            
                res.json({ msg : 'Member updated', member});
            }
        });
    }
    else{
        res.status(400).json({msg:`Member ${req.params.id} Not found `});
    }
});

module.exports = router;
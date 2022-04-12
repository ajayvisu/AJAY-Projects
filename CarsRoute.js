const express = require('express');
const router = express.Router();
const Cars = require('./CarsSchema');

//post
router.post('/',async(req,res) => {
    try{
    const postCar = new Cars({
        Make : req.body.Make,
        Mod : req.body.Mod
    });
    const saveCars = await postCar.save();
    res.status(200).json(saveCars);
    //res.json("Router is Working");
    }
    catch(err){
        res.json({"err":err})
    }
});

//get all
router.get('/',async(req,res) => {
    try{
        const getAll = await Cars.find();
        res.status(200).json(getAll);
    }
    catch(err){
        res.json({"err":err})
    }
});

//get by id 
router.get('/:id',async(req,res) => {
    try{
        const getById = await Cars.findById(req.params.id);
        res.status(200).json(getById);
    }
    catch(err){
        res.json({"err":err})
    }
});

//put
router.put('/:id',async(req,res) => {
    try{
        //console.log(req.params.id);
        const updCars = await Cars.updateOne({ _id:req.params.id},{$set:{Make:req.body.Make,Mod:req.body.Mod}});
        res.status(200).json(updCars);
    }
    catch(err){
        res.json({"err":err})
    }
});

//delete
router.delete('/:id',async(req,res) => {
    try{
        const delCars = await Cars.remove({_id:req.params.id});
        res.status(200).json(delCars);
    }
    catch(err){
        res.json({"err":err})
    }
});

module.exports = router;
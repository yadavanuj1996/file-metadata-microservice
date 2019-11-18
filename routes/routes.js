
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var express= require('express');
var api=express();

api.post('/fileanalyse',upload.single('upfile'),(req,res,next)=>{
  res.json({name: req.file.originalname,type:req.file.mimetype, size:req.file.size});
});

module.exports=api;

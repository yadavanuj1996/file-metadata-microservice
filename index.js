var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var path=require('path');
var bodyParser=require('body-parser');
var cors=require('cors');
var api=require('./routes/routes');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/public',express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'views','index.html'));
});

app.use('/api',api);

app.use((req,res,next)=>{
  res.status(404);
  res.send("Page Not Found");
});

app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500);
  res.send('Internal Server Error');
});

app.listen(port,()=>{
  console.log("Server listening on port: "+port);
});
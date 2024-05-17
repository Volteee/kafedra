const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
 
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/materials',function(req,res){
  res.sendFile(path.join(__dirname+'/materials/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/disciplines',function(req,res){
  res.sendFile(path.join(__dirname+'/disciplines/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/teachers',function(req,res){
  res.sendFile(path.join(__dirname+'/teachers/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/video',function(req,res){
  res.sendFile(path.join(__dirname+'/video/index.html'));
  //__dirname : It will resolve to your project folder.
});
 
//add the router
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8082);
 
console.log('Running at Port 8082');
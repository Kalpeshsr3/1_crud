const express = require('express');
const router = express.Router();
const stuC = require('../controllers/studentController');

router.get('/',stuC.getAllData);//jab hum /student pe hit karenge toh
//it will shows index.ejs page jis par apna form & table hai

router.post('/',stuC.createDoc);//jab hum /student ke form ko fill
//kar ke submit karenge toh hamara data post method se db mai jake
//store hoga & form submit hone par hum ne kuch action nahi di hai
//toh /student page reload hoga  & jo data insert kiya hai vo table
//mai show hoga

router.get('/edit/:id',stuC.editDoc);//jab koi edit btn pe click 
//karega toh particular id se edit.ejs pe bhej denge & udhar uss id
//se uska pura data show karenge in edit.ejs page
//idher :id means id hum dynamically le rahe hai

router.post('/update/:id',stuC.updateDocById);//jab koi update form
//karega toh usko hum /student pe redirect karenge uss particular id
//jo updated hua hai usko show karenge with new value

router.post('/delete/:id',stuC.deleteDocById);//jab koi delete btn 
//pe click karega toh hum uss particular id lekar uss id ko delete
//kar page reload hoga &  ussi page means /student pe jo delete hua 
//hai vo gayab hua ye apne ko dikega

router.get('/upload',stuC.myUpload);

router.post('/uploadResult',stuC.myImage);

module.exports = router;
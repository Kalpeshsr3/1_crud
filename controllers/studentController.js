const stuModel = require('../models/studentModel');

const getAllData = (req,res)=>{
    //ye hamara index.ejs page show karega jab koi /student route
    //ko hit karega uss par apna create student form hai & jo data
    //submit kiya hai usko hum db se table mai dikhayenge index.ejs
    //pe
    const readData = async () =>{
        try{
            const result = await stuModel.find();
            //console.log(result);//const result mai jo data apna db
            //mai store hai vo show ho raha & now hum result ka data
            //ko data variable mai pass kar index.ejs file mai send
            // kar rahe hai & phir usse index.ejs file mai get kar
            //table mai show karenge forEach()func ka use kar
            res.render("index",{data:result});

        }
        catch(error){
            console.log(error);
        }
    }
    readData();
    
}
const createDoc = async (req,res)=>{//means jab hum form ko fill kar submit
    //btn pe click karenge toh page reload hoke ussi page pe redirect
    //hoga ie. apna form /student route pe hai & jab hum form submit
    //karenge toh /student route pe hi rahenge.

    //console.log('create doc post mtd form');
    //console.log(req.body);//jab bhi hum post mtd se form
    //ke data ko submit kar rahe hote hai toh usko hum req.body
    //mtd mai get kar sakte hai lekin req.body mtd mai dekhne ke 
    //liye humko express.urlencoded({extended:false}) ye middleware
    //ka use apne app.js mai karna hota hai phir hi humko form se
    //post kiya hua data req.body mai get kar sakte hai & now jab
    //humne app.js mai .urlencoded()middleware use kiya tab hamai
    //form se post kiya hua data show ho raha in terminal & now hum
    //uss form data ko destructuring karenge 
    try{
        const {name,age,fees} = req.body;
        const doc = new stuModel({
            name:name,//here hum jo values humko form submit karne
            //par req.body se mile hai unko upar destructure kar ke
            //idher collections ke fields name,age,fees mai store
            //kar rahe hai,left side ki fieldname hai & right side
            //ki form value hai
            age:age,
            fees:fees
        })
        const result = await doc.save();
        // console.log(result);
        res.redirect('/student');//data respective fields mai store
        //hone ke baad /student routes reload hoga jis se jo data
        //submit kiya hai vo hamai table mai show hoga
    }
    catch(err){
        console.log(err);
    }
    
}

const editDoc = async (req,res)=>{
    //means jab koi edit btn pe click karega toh usko hum edit.ejs
    //page show karenge
    console.log(req.params.id);//jab hum edit btn pe click karenge toh
    //uss particular data ka id humko idher milega req.params.id mai
    //phir hum findById()mtd se uss particular id ka pura document
    //nikal kar usko edit.ejs page pe send karenge
    try{
        const result = await stuModel.findById(req.params.id);
        //console.log(result);result mai uss particular id ki 
        //document hai & result ki values ko hum data variable 
        //store kar ke edit.ejs page pe send kar rahe hai &edit.ejs
        //pe usko value attribute mai show kar rahe hai
        res.render('edit',{data:result});
    }
    catch(err){
        console.log(err);
    }
    
}

const updateDocById = async (req,res)=>{
    //means jab koi edit.ejs page ke form mai data fil karne ke baad
    //update btn pe click karega toh hum /student route pe redirect
    //honge jidhar hum updated data show karenge

    // console.log(req.params.id);it gives us selected data ka id
    // console.log(req.body);it gives us particular id ka documents
    try{
        const result = await stuModel.findByIdAndUpdate(req.params.id,
            req.body)
            //findByIdAndUpdate()mai hum ne particular id di hai
            //req.params.id se & req.body se uss id ka documents diya
            //hai toh findByIdAndUpdate()mtd uss id par jo bhi data 
            //changes huye hai jo req.body mai hai usko update kar 
            //dega & phir /student route pe redirect hoga & udhar
            //table mai updated values show hogi
            res.redirect('/student');
    }
    catch(err){
        console.log(err);
    }
    
}

const deleteDocById = async (req,res)=>{
    //jab koi delete btn pe click karega toh page reload hoke 
    //ussu page pe redirect honge & udher hi result dikhega jo
    //delete kiya hai vo gayab ho jayega
    // console.log(req.params);jis delete btn pe click karenge
    //uss ka id milega req.params mai & phir findByIdAndDelete()
    ///mtd se usko delete karenge & /student pe redirect honge 
    //and udhar deleted data nahi hoga
    try{
        const result = await stuModel.findByIdAndDelete(req.params.id)
        res.redirect('/student');
    }
    catch(err){
        console.log(err);
    }
    
    
}

const myUpload = (req,res)=>{
    res.render('uploads');
}

const myImage = (req,res)=>{
    console.log(req.body);
    res.send('image received');
}


module.exports = {myImage,myUpload,getAllData,createDoc,editDoc,updateDocById,deleteDocById};
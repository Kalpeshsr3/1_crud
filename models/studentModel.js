const mongoose = require('mongoose');

//Defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},//trim means
    //koi extra space dega left & right se word ke toh vo space
    //remove hoke data insert hoga db mai
    age:{type:Number,required:true,min:18,max:60},//means minimum
    //age 18 & maximum 60 hoga toh insert hoga db mai
    fees:{
        // type:mongoose.Decimal128,//fees field mai hum decimal mai
        //value le rahe hai 
        type:Number,
        required:true//validate keyword use for our custom validation
        
        // validate:(value)=>value >= 5000.50//here student jo bhi fees 
        //value enter karega vo iss (value) mai aayegi phir condition
        //check hogi ki agar user entered value is greater than 5000.50
        //hai toh true return hoga & tab vo value insert hogi db mai
        //idher fees field pe hum ne apna khud ka validation laga hai
    }
    
})

//creating model
const studentModel = mongoose.model("Students",studentSchema);

//exporting model this model to studentController file
module.exports = studentModel;//iss studentModel mai hamara collection
//Student hai & Schema studentSchema bhi hai &  

/*
db name-> school
model name-> StudentModel
collection name-> student
schema name-> studentSchema */
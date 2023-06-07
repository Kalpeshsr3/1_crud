const mongoose = require('mongoose');

const dbconn = mongoose.connect("mongodb+srv://kalpeshschool:kalpeshschool@cluster0.dvxki.mongodb.net/school?retryWrites=true&w=majority")
.then(()=> console.log("Successfully Connected to db"))
.catch((err)=> console.log(err));

module.exports = dbconn;

// mongoose.Schema({
//     name : {
//         type : String,
//         require :true
//     },
//     age : {
//         type : Number,
//         require :true
//     },
//     fees : {
//         type : Number,
//         require :true
//     }

// })


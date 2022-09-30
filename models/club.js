const mongoose = require('mongoose');
const schema = mongoose.Schema;

let clubSchema = new schema({
    name :{
        type:String
    },
    email:{
        type :String
    }
})

module.exports = mongoose.model('student', clubSchema)

// const mongoose=require('mongoose')
// const schema=mongoose.Schema;

// const clubSchema= new schema({
//     name:{type:String},
//     email:{type:String}

// })

// module.exports=mongoose.model('students',clubSchema);












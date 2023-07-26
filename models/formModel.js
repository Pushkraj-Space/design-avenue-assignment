const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    fav_no: {
        type : Number,
        required : true
    }
})


module.exports = mongoose.model('Form', formSchema);



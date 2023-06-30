const mongoose = require("mongoose");

const blogsettingSchema = mongoose.Schema({

    blog_title:{
        type:String,
        require:true
    },

    blog_logo:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model('Blogsetting',blogsettingSchema);
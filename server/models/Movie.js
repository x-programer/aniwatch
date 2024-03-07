const mongoose = require('mongoose')

const MOvieSchema = new mongoose.Schema(
    {
        title: {type:String, required:true},
        desc: {type:String},
        img: {type:String},
        imgTitle: {type:String},
        imgSm: {type:String},
        trailer: {type:String},
        video: {type:String},
        year: {type:String},
        limit: {type: Number},
        gener: {type:String},
        isSeries: {type:Boolean, default:false},
    },
    {timestamps: true},
)

module.exports = mongoose.model("Movie" , MOvieSchema);
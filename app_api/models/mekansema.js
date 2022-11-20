var mongoose=require("mongoose");
var saatSema = new mongoose.Schema({
    gunler:{type:String, required:true},
    acilis: String,
    kapanis: String,
    kapali: {type: Boolean}
});
var yorumSema = new mongoose.Schema({
    yorumYapan:{type:String, required:true},
    puan:{type:Number, default:0, min:0, max:5},
    yorunMetni:{type:String, required:true},
    tarih:{type:Date,default:Date.now}
});
var mekanSema = new mongoose.Schema({
    ad: {type:String, reqired:true},
    adres: String,
    puan: {type:Number, default:0, min:0, max:5}, 
    imkanlar: [String],
    koordinat: {type: [Number], coordinates: [], index: "2dsphere"},
    saatler: [saatSema],
    yorumlar: [yorumSema]
});
mongoose.model("mekan", mekanSema, "mekanlar")
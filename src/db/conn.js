const e = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/TEST-DB-MONGO",{
    useNewUrlParser:true,     /*to avoid deprecation warning add these three lines*/
    useUnifiedTopology:true,
    useCreateIndex:true

}).then(() => {

    console.log(`connection successful`);

}).catch((e) => {
    console.log(`****No connection****`);

})
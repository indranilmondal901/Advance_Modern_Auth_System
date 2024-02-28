const mongoose = require('mongoose');
const url = `mongodb+srv://indranilmondal901:abcd1234@cluster0.lurfbbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url).then(()=>{
    console.log("Your DB is sucessfully connected with Node.js")
}).catch((err)=>{
    console.log("Failed in Connting to DB due to => " + err)
})
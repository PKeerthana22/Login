// const mongoose = require ("mongoose")

// mongoose.connect("mongodb://localhost:27017/Ecom1")
// .then(() => {
//     console.log("MongoDB connected successfully");
// })
// .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error);
// });

// // mongoose.connect("mongodb://localhost:27017/Ecom1")
// // .then(()=>{
// //     console.log("mongodb connected");
// // })
// // .catch(()=>{
// //     console.log("failed to connect");
// // })

// const LoginSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const collection = new mongoose.model("Collection2",LoginSchema)

// module.exports = collection

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ecom1", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("Failed to connect to MongoDB:", err));

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model("LoginSignup", loginSchema);

module.exports = Login;

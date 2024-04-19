// // const express = require("express");
// // const app = express();
// // const path = require("path");

// // // Set the path for your HTML files
// // const viewsPath = path.join(__dirname, "../templates");

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));

// // // Serve static files such as CSS, images, etc.
// // app.use(express.static(path.join(__dirname, "public")));

// // // Route to serve the login page
// // app.get("/", (req, res) => {
// //     res.sendFile(path.join(viewsPath, "login.html"));
// // });

// // // Route to serve the signup page
// // app.get("/signup", (req, res) => {
// //     res.sendFile(path.join(viewsPath, "signup.html"));
// // });

// // // Route to handle signup form submission
// // app.post("/signup", async (req, res) => {
// //     // Your signup logic here
// // });

// // // Route to handle login form submission
// // app.post("/login", async (req, res) => {
// //     // Your login logic here
// // });

// // // Start the server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });







// const express = require("express");
// const app = express();
// const path = require("path");
// const mongoose = require("mongoose");

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/Ecom1", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.error("Failed to connect to MongoDB:", err));

// // Define the schema for login data
// const loginSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// // Create a model for the login collection
// const Login = mongoose.model("LoginSignup", loginSchema);

// // Set the path for your HTML files
// const viewsPath = path.join(__dirname, "../templates");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Serve static files such as CSS, images, etc.
// app.use(express.static(path.join(__dirname, "public")));

// // Route to serve the login page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(viewsPath, "login.html"));
// });

// // Route to serve the signup page
// app.get("/signup", (req, res) => {
//     res.sendFile(path.join(viewsPath, "signup.html"));
// });

// // Route to handle signup form submission
// app.post("/signup", async (req, res) => {
//     try {
//         const { name, password } = req.body;
//         await Login.create({ name, password });
//         res.redirect("/home");
//     } catch (error) {
//         console.error("Error signing up:", error);
//         res.status(500).send("Error signing up");
//     }
// });

// // Route to handle login form submission
// app.post("/login", async (req, res) => {
//     try {
//         const { name, password } = req.body;
//         const user = await Login.findOne({ name, password });
//         if (user) {
//             res.redirect("/home");
//         } else {
//             res.send("Wrong username or password");
//         }
//     } catch (error) {
//         console.error("Error logging in:", error);
//         res.status(500).send("Error logging in");
//     }
// });

// // Route to serve the home page
// app.get("/home", (req, res) => {
//     res.sendFile(path.join(viewsPath, "home.html"));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });






const express = require("express");
const app = express();
const path = require("path");
const Login = require("./mongodb");

const viewsPath = path.join(__dirname, "../templates"); // Set path for your HTML files

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public"))); // Serve static files such as CSS, images, etc.

app.get("/", (req, res) => {
    res.sendFile(path.join(viewsPath, "login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(viewsPath, "signup.html"));
});

app.post("/signup", async (req, res) => {
    try {
        const { name, password } = req.body;
        await Login.create({ name, password });
        res.redirect("/home");
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).send("Error signing up");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await Login.findOne({ name, password });
        if (user) {
            res.redirect("/home");
        } else {
            res.send("Wrong username or password");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Error logging in");
    }
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(viewsPath, "home.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

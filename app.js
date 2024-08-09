// const express = require("express");
// const { collection, ContactDetails } = require("./mongo");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.post("/", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const check = await collection.findOne({ email: email });

//         if (check) {
//             res.json("exist");
//         } else {
//             res.json("notexist");
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });

// app.post("/signup", async (req, res) => {
//     const { name, email, password, dob, mobileNo, education, college } = req.body;

//     const data = {
//         name: name,
//         email: email,
//         password: password,
//         dob: dob,
//         mobileNo: mobileNo,
//         education: education,
//         college: college,
//     };

//     try {
//         const check = await collection.findOne({ email: email });

//         if (check) {
//             res.json("exist");
//         } else {
//             res.json("notexist");
//             await collection.insertMany([data]);
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });

// app.post("/contactus", async (req, res) => {
//     const { name, email, message } = req.body;

//     const data = {
//         name: name,
//         email: email,
//         message: message,
//     };

//     try {
//         const check = await collection.findOne({ email: email });

//         if (check) {
//             res.json("exist");
//         } else {
//             res.json("notexist");
//             await ContactDetails.insertMany([data]);
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });



// app.listen(3001, () => {
//     console.log("Server is running on port 3000");
// });

// This is server side code

const express = require("express");
const { collection, ContactDetails } = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Contact Section

app.post("/contactus", async (req, res) => {
    const { name, email, message } = req.body;

    const data = {
        name: name,
        email: email,
        message: message,
    };

    try {
          await ContactDetails.create(data);
            console.log("running");
            res.json("notexist");
            
    } catch (e) {
        console.log("error" + e);
        res.json("fail");
    }
});

// Signup and login setion 

app.post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, email, password, dob, mobileNo, education, college } = req.body;

    const data = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        mobileNo: mobileNo,
        education: education,
        college: college,
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            
            await collection.create(data); 
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// server port

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

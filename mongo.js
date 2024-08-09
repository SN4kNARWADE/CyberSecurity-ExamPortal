const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/react-login-tut", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

// User authentication schema
const newSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    mobileNo: { type: String, required: true },
    education: { type: String, required: true },
    college: { type: String, required: true },
});

// User authentication model
const collection = mongoose.model("collection", newSchema);

// Contact details schema
const contactDetailsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

// Contact details model
const ContactDetails = mongoose.model("contactDetails", contactDetailsSchema);

module.exports = { collection, ContactDetails };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  linkedinUrl: String,
  languages: Array,
  program: String,
  background: String,
  image: String,
  cohort: Number,
  projects: Array,
});

// CREATE MODEL
// The model() method defines a model (Book) and creates a collection (books) in MongoDB
// The collection name will default to the lowercased, plural form of the model name:
//                          "Book" --> "books"
const Student = mongoose.model("Student", studentSchema);
 
// EXPORT THE MODEL
module.exports = Student;



/*
    {
      "_id": 1,
      "firstName": "Christine",
      "lastName": "Clayton",
      "email": "christine.clayton@example.com",
      "phone": "567-890-1234",
      "linkedinUrl": "https://linkedin.com/in/christineclaytonexample",
      "languages": ["English", "Dutch"],
      "program": "Web Dev",
      "background": "Computer Engineering",
      "image": "https://i.imgur.com/r8bo8u7.png",
      "cohort": 1,
      "projects": []
    },





*/
import  mongoose  from "mongoose";
const Schema = mongoose.Schema
const schema = new mongoose.Schema(
    {
        username: {
            // type: String,
            // required: true,
            type: String,
            required: true,
            ref: "User",
            unique: true,
        },
        name: {
            type: String, 
            unique: true,
            // required: true
        },
    }
);

export const FacultyModel = mongoose.model("Faculty", schema);


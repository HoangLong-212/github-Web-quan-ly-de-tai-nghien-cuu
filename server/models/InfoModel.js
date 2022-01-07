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
            unique: true
        },
        // idUser:{
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
            // require: true,
        // },
        name: {
            type: String, 
            // required: true
        },
        dateOfBirth: {
            type: Date,
            // required: true
        },
        email: {
            type: String,
            // required: true,
            // unique: true,
        },
        contract: {
            type: String,
            // required: true,
            // enum: ['Hợp đồng', 'Biên chế', 'Thính giảng'],
            // default: "Hợp đồng",
        },
        phoneNumber: {
            type: String,
            
            // required: true,
        },
        level: {
            type: String,
            // required: true,
            // enum: ['Cử nhân', 'Thạc sĩ', 'Tiến sĩ', 'Giáo sư'],
            // default: "Cử nhân"
        },
        facultyId: {
            type: Schema.Types.ObjectId,
            ref: "Faculty",  
        }
        // Image: String
    }
);

export const InfoModel = mongoose.model("Info", schema);


import  mongoose  from "mongoose";

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            // ref: "User"
        },
        name: {
            type: String, 
            required: true
        },
        dateOfBirth: {
            type: Date,
            // required: true
        },
        faculty: {
            type: String,
            required: true,
            enum: ["Công nghệ Phần mềm", "Công nghệ Thông tin", "Kỹ thuật Máy tính", "An toàn thông tin"],
            default: "Công nghệ Phần mềm"
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contract: {
            type: String,
            required: true,
            enum: ["Hợp đồng", "Biên chế", "Thính giảng"],
            default: "Hợp đồng",
        },
        phoneNumber: {
            type: String,
            
            required: true,
        },
        level: {
            type: String,
            required: true,
            enum: ["Cử nhân", "Thạc sĩ", "Tiến sĩ", "Giáo sư"],
            default: "Cử nhân"
        },

        facultyId: String,
        // Image: String
    }
);

export const InfoModel = mongoose.model("Info", schema);


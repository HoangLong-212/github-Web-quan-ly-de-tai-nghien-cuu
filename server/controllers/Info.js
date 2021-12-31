
import { InfoModel } from "../models/InfoModel.js";
import { UserModel } from "../models/UserModel.js";

export const getInfo = async (req, res) => {
    try {
        //     const infoa = new InfoModel({
        //     username: "long",
        //     name: "Hoang",
        //     faculty: "Công nghệ Phần mềm",
        //     email: "19511538@gmail.com",
        //     contract: "Hợp đồng",
        //     phoneNumber: "12345678",
        //     level: "Thạc sĩ",
        //     dateOfBirth: new Date(),
        //     facultyId: "",
        // });
        //     infoa.save();

        const info = await InfoModel.find();
       
        res.status(200).json(info);
    }
    catch (err){
        res.status(500).json({error: err});
    }
};

export const createInfo = async (req, res) => {
    try{
        const newInfo = req.body;
        const Info = new InfoModel(newInfo);
        await Info.save();
        
        res.status(200).json(Info);
    }
    catch (err) {
        res.status(500).json({error: err});
        next();
    }
};

export const updateInfo = async (req, res) => {

    res.send("Update");
    try{
        const updateInfo = req.body;
        const info = await InfoModel.findOneAndUpdate(
            {_id: updateInfo._id},
            updateInfo,
            {new: true}
        );
        res.status(200).json(info);
    }
    catch (err){
        res.status(500).json({error: err});
    }
};


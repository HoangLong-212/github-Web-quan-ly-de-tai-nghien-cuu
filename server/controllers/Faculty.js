

import { FacultyModel } from "../models/FacultyModel.js";
import { UserModel } from "../models/UserModel.js";

export const getFaculty = async (req, res) => {
    try {
        //     const infoa = new FacultyModel({
        //     username: "HEHE",
        //     name: "CONG NGHE PHAN MEM",
        // });
        //     infoa.save();

        const faculty = await FacultyModel.find();
        console.log("Faculty", faculty);
        res.status(200).json(faculty);
    }
    catch (err){
        res.status(500).json({error: err});
    }
};

export const createFaculty = async (req, res) => {
    try{
        const newFaculty = req.body;
        console.log("[faculty]", newFaculty);
        const Faculty = new FacultyModel(newFaculty);
        await Faculty.save();
        res.status(200).json(Faculty);
    }
    catch (err) {
        res.status(500).json({error: err});
        // next();
    }
};

export const updateFaculty = async (req, res) => {
    try{
        const updateFaculty = req.body;
        const faculty = await FacultyModel.findOneAndUpdate(
            {_id: updateFaculty._id},
            updateFaculty,
            {new: true}
        );
        res.status(200).json(faculty);
    }
    catch (err){
        res.status(500).json({error: err});
    }
};


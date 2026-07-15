const { response } = require("express");
const Student = require("../models/studentModel")

// const getStudents = (req, res) => {
//     res.status(200).json({
//         message: "Student Listed"
//     });
// };


//Get all students
const getStudents = async (req, res) => {
    try {
        const student = await Student.find()
        res.status(200).json({
            message: "Student Listed Successfully",
            data: student
        });
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

//get all students by id

const getStudentsById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        console.log(student)
        res.status(200).json({
            message: "Student Listed Successfully",
            data: student
        })
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}


// const createStudents = async (req, res) => {
//     const { name, age } = req.body;

//     const student = Student.create(req.body)

//     res.status(201).json({
//         message: "Student Created",
//     });
// };


//create students
const createStudents = async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(201).json({
            message: "Student Successfully Created",
            data: student
        });
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}


// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//Update student details
const updateStudent = async (req, res) => {

    const { name, age } = req.body

    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: "after"
        })

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        res.status(200).json({
            message: "Student Updated Successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    getStudents,
    createStudents,
    getStudentsById,
    updateStudent,
    deleteStudent
};
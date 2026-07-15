const express = require("express");
const router = express.Router();

const { getStudents, createStudents, getStudentsById,updateStudent,deleteStudent} = require("../controllers/studentController");

router.get("/",getStudents);
router.post("/",createStudents)
router.get("/:id",getStudentsById)
router.put("/:id",updateStudent)
router.delete("/:id",deleteStudent)

module.exports = router;
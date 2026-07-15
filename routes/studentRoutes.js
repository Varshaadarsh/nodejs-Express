const express = require("express");
const router = express.Router();

const { getStudents, createStudents, getStudentsById} = require("../controllers/studentController");

router.get("/",getStudents);
router.post("/",createStudents)
router.get("/:id",getStudentsById)

module.exports = router;
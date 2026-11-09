const Course = require("../models/courses");
const Student = require("../models/students");

const addCourse = async (req, res) => {
    try {
        const { name } = req.body;
        const course = await Course.create({'name': name});

        res.status(201).json(course);

    } catch (error) {
        res.status(500).json({'error':error.message});
    }
};

const addStudentToCourse = async (req, res) => {
    try {
        const { courseIds, studentId } = req.body;

        const student = await Student.findByPk();
        const course = await Course.findAll({
            where:{
                id:courseIds
            }
        })

        await student.addCourses(course);

        const updatedStudent = await Student.findByPk(studentId, {include: Course});
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
};

module.exports = {
    addCourse,
    addStudentToCourse
};

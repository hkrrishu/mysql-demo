const Student = require('./students');
const IdentityCard = require('./identityCard');
const department = require('./department');
const courses = require('./courses');
const studentCourses = require('./studentCourses');

//one to one relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many relationship
department.hasMany(Student);
Student.belongsTo(department);

//many to many relationship
Student.belongsToMany(courses, { through: studentCourses });
courses.belongsToMany(Student, { through: studentCourses });

module.exports = {
    Student,
    IdentityCard,
    department,
    courses,
    studentCourses
}
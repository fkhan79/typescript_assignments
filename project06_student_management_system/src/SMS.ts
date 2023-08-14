//Defining the Structure
class Person{
    name?:string;    
}

class Student extends Person{
    course?:Course;
    rollNumber?:string;
    
}
class Teacher extends Person{
    course?:Course;   
}
class Course{
    courseName?:string;
    classTeacher?:Teacher;
    students?:Student[];
    timing?:string;
}


//Creating Students individually 
let student1:Student=new Student();
student1.name="Student1";
student1.rollNumber="1"
let student2:Student=new Student();
student2.name="Student2";
student2.rollNumber="2";

let student3:Student=new Student();
student3.name="Student3";
student3.rollNumber="3";
const stdArray:Student[]=[student1,student2,student3];
//Created a Teacher Object
let teacher:Teacher=new Teacher();
teacher.name="Teacher 1";

let courseGIAIC:Course=new Course()
courseGIAIC.courseName="GIAIC";
courseGIAIC.classTeacher=teacher;
courseGIAIC.students=stdArray;
courseGIAIC.timing="6-10";
teacher.course=courseGIAIC;


student1.course=teacher.course;
student2.course=teacher.course;
student3.course=teacher.course;


console.log(courseGIAIC);

console.log(teacher);
console.log(stdArray);
console.log(teacher.course);
// //Created an Array of Students 
// const stdArray:Student[]=[student1,student2,student3];
// course.students=stdArray;
// //Printing the Structure of how the course will be looking in the memory.
// console.log(course);

// //Changed to timing to see is it Pass by Value or Pass By Reference
// teacher.timing="10-11";
// console.log(course);




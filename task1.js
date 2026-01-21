const student = {
  name: "Mani Chandana",
  subject: "Science",
  marks: 78
};

function calculateGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 75) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}

function evaluateStudent(student) {
  let subjectMessage;

  switch (student.subject) {
    case "Maths":
      subjectMessage = "Mathematics selected";
      break;
    case "Science":
      subjectMessage = "Science selected";
      break;
    case "English":
      subjectMessage = "English selected";
      break;
    case "CS":
      subjectMessage = "Computer Science selected";
      break;
    default:
      subjectMessage = "Invalid subject";
  }
  const grade = calculateGrade(student.marks);

  console.log("Student Name:", student.name);
  console.log("Subject:", subjectMessage);
  console.log("Marks:", student.marks);
  console.log("Grade:", grade);
}
evaluateStudent(student);

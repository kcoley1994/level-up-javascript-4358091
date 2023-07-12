// Write your code here
function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant){
    [teacher, teachingAssistant, ...students] =classList;
  } else {
    [teacher, ...students] = classList
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: true, 
  classList:["Rashida", "John", "Roman", "Lisa", "Omar", "Luke"]
}));

console.log(getStudents({
  hasTeachingAssistant: false, 
  classList:["Rashida", "John", "Roman", "Lisa", "Omar", "Luke"]
}));
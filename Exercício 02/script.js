const students = [
  { name: "Antonio" ,
    n1: 8.5 ,
    n2: 9 } , 

  { name: "Sett" ,
    n1: 7 ,
    n2: 8 } ,

  { name: "Warwick" ,
    n1: 4 ,
    n2: 4 } , ]

    function result(n1, n2) {
      return ( (Number(n1) + Number(n2)) / 2 ).toFixed(1) }

function printStudentsResult(students) {
  return`
  A média do(a) aluno(a) ${students.name} é: ${result(students.n1, students.n2)} ` }

for (let student of students) {
  const average = result(student.n1, student.n2)

  let resultMesage = printStudentsResult(student)

  if(average < 7) {
    alert(printStudentsResult(student) + "\nVocê foi reprovado") }
  else{
    alert(printStudentsResult(student) + "\nVocê foi aprovado") } }


printStudentsResult (students[0])
printStudentsResult (students[1])
printStudentsResult (students[2])
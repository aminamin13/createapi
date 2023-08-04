
function getAllStudents()
{
    fetch('http://localhost:3000/getAllStudents')
    .then(response => response.json())
    .then(json => {
        let studentsul = document.getElementById('students');
        json.forEach(element => {
            let singleStudentsil=document.createElement("li");
            singleStudentsil.innerHTML = element.name;
            studentsul.appendChild(singleStudentsil);
        });
    })
}
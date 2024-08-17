const student = [
    {
        name: "John Doe",
        father_name: "Deo",
        semester: 3,
        isFeePaid: true,
        courses: ["Mathematics", "Physics", "Computer Science"]
    },
    {
        name: "Jane Smith",
        father_name: "Smith",
        semester: 2,
        isFeePaid: true,
        courses: ["Biology", "Chemistry", "English"]
    },
    {
        name: "Emily Johnson",
        father_name: "Johnson",
        semester: 4,
        isFeePaid: false,
        courses: ["Economics", "Statistics", "Marketing"]
    },
]
const studentInfo = document.getElementById("stdinfo");
const studentInfoText = "<h1>Students Information</h1>";
studentInfo.insertAdjacentHTML("afterbegin", studentInfoText);
studentInfo.style.display = "flex";
studentInfo.style.flexDirection = "column";
studentInfo.style.alignItems = "center";
studentInfo.style.backgroundColor = "lightgrey";
studentInfo.style.margin = "0 30rem";

for (let i = 0; i < student.length; i++) {
    const heading = document.createElement("h3");
    heading.innerHTML = `Name: ${student[i].name} <br />
    Father name: ${student[i].father_name} <br />
    semester: ${student[i].semester} <br />
    Is fee paid: ${student[i].isFeePaid} <br />
    Courses: `;

    studentInfo.appendChild(heading);

    const courses = document.createElement("ul");
    for (let j = 0; j < student[i].courses.length; j++) {
        const list = document.createElement("li");
        list.innerHTML = student[i].courses[j];
        list.style.fontWeight = "bold"
        courses.appendChild(list);
    }
    studentInfo.appendChild(courses);
}

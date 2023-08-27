const enrollForm = document.getElementById('enrollForm');
const clearButton = document.getElementById('clearButton');
const studentList = document.getElementById('studentList');
let usePic1 = true;

enrollForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(enrollForm);
  const skillsArray = [];
  enrollForm.querySelectorAll('input[name="skills"]:checked').forEach(skill => {
    skillsArray.push(skill.value);
  });

  const studentCard = document.createElement('div');
  studentCard.classList.add('student-card');

  const imageLink = usePic1 ? 'pic1.jpg' : 'pic2.jpg';
  usePic1 = !usePic1;

  const studentImage = document.createElement('img');
  studentImage.src = imageLink;
  studentImage.alt = 'Student Image';
  studentImage.classList.add('student-image');
  studentCard.appendChild(studentImage);

  const studentDetails = document.createElement('div');
  studentDetails.classList.add('student-details');

  const name = formData.get('name');
  const email = formData.get('email');
  const gender = formData.get('gender');
  const studentName = document.createElement('h3');
  studentName.textContent = name;
  const studentEmail = document.createElement('p');
  studentEmail.textContent = email;
  const studentGender = document.createElement('p');
  studentGender.textContent = `Gender: ${gender}`;
  studentDetails.appendChild(studentName);
  studentDetails.appendChild(studentEmail);
  studentDetails.appendChild(studentGender);

  const skills = skillsArray.join(', ');
  const studentSkills = document.createElement('div');
  studentSkills.classList.add('student-skills');
  const skillsText = document.createElement('p');
  skillsText.textContent = `Skills: ${skills}`;
  studentSkills.appendChild(skillsText);

  studentDetails.appendChild(studentSkills);

  studentCard.appendChild(studentDetails);
  studentList.appendChild(studentCard);

  enrollForm.reset();
});

clearButton.addEventListener('click', function() {
  enrollForm.reset();
});

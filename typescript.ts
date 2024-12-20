const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;

if (resumeForm && resumeOutput) {
  resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Personal Information
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const martial = (document.getElementById('martial') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;

    // Collect Skills
    const skillInputs = document.querySelectorAll<HTMLInputElement>('[id^="skill_"]');
    const skills = Array.from(skillInputs).map((input) => input.value).filter((skill) => skill).join(', ');

    // Collect Languages
    const languageInputs = document.querySelectorAll<HTMLInputElement>('[id^="language_"]');
    const languages = Array.from(languageInputs).map((input) => input.value).filter((lang) => lang).join(', ');

    // Generate Resume HTML
    const resumeHTML = `
      <h2>Generated Resume</h2>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Father's Name:</strong> ${fname}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Marital Status:</strong> ${martial}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>CNIC:</strong> ${cnic}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Languages:</strong> ${languages}</p>
    `;

    // Display Resume
    resumeOutput.innerHTML = resumeHTML;
  });
} else {
  console.error('Form or output div not found in the DOM!');
}

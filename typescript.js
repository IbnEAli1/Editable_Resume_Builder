var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Personal Information
        var name = document.getElementById('name').value;
        var fname = document.getElementById('fname').value;
        var dob = document.getElementById('dob').value;
        var martial = document.getElementById('martial').value;
        var gender = document.getElementById('gender').value;
        var cnic = document.getElementById('cnic').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var nationality = document.getElementById('nationality').value;
        // Collect Skills
        var skillInputs = document.querySelectorAll('[id^="skill_"]');
        var skills = Array.from(skillInputs).map(function (input) { return input.value; }).filter(function (skill) { return skill; }).join(', ');
        // Collect Languages
        var languageInputs = document.querySelectorAll('[id^="language_"]');
        var languages = Array.from(languageInputs).map(function (input) { return input.value; }).filter(function (lang) { return lang; }).join(', ');
        // Generate Resume HTML
        var resumeHTML = "\n      <h2>Generated Resume</h2>\n      <p><strong>Full Name:</strong> ".concat(name, "</p>\n      <p><strong>Father's Name:</strong> ").concat(fname, "</p>\n      <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n      <p><strong>Marital Status:</strong> ").concat(martial, "</p>\n      <p><strong>Gender:</strong> ").concat(gender, "</p>\n      <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Address:</strong> ").concat(address, "</p>\n      <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n      <p><strong>Languages:</strong> ").concat(languages, "</p>\n    ");
        // Display Resume
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or output div not found in the DOM!');
}

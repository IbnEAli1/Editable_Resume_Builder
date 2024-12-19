var form = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeWorkExperience = document.getElementById("resumeWorkExperience");
var resumeSkills = document.getElementById("resumeSkills");
form.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var fname = document.getElementById("fname").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var degree = document.getElementById("degree").value.trim();
    var skillsElements = document.querySelectorAll("#skills");
    var educationElements = document.querySelectorAll("#education");
    var experienceElements = document.querySelectorAll("#experience");
    var photoInput = document.getElementById("photo");
    var skills = Array.from(skillsElements)
        .map(function (input) { return input.value.trim(); })
        .filter(function (value) { return value; });
    var education = Array.from(educationElements)
        .map(function (input) { return input.value.trim(); })
        .filter(function (value) { return value; });
    var experiences = Array.from(experienceElements)
        .map(function (input) { return input.value.trim(); })
        .filter(function (value) { return value; });
    var photoFile = ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    var photoURL = photoFile ? URL.createObjectURL(photoFile) : '';
    resumePhoto.src = photoURL;
    resumePhoto.alt = "".concat(name, "'s Profile Photo");
    resumeName.innerHTML = "<strong>".concat(name, "</strong>");
    resumeEmail.innerHTML = "<strong>Email:</strong> ".concat(email);
    resumePhone.innerHTML = "<strong>Phone:</strong> ".concat(phone);
    resumeEducation.innerHTML = education
        .map(function (edu) { return "<p>".concat(edu, "</p>"); })
        .join("");
    resumeWorkExperience.innerHTML = experiences
        .map(function (exp) { return "<p>".concat(exp, "</p>"); })
        .join("");
    resumeSkills.innerHTML = skills
        .map(function (skill) { return "<p>".concat(skill, "</p>"); })
        .join("");
    (_b = document.querySelector(".container")) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
    resumePage.classList.remove("hidden");
});
var backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
    var _a;
    form.reset();
    resumePhoto.src = "";
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});

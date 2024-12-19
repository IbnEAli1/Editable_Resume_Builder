const form: HTMLFormElement = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage: HTMLElement = document.getElementById("resumePage") as HTMLElement;
const resumePhoto: HTMLImageElement = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName: HTMLHeadingElement = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail: HTMLParagraphElement = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone: HTMLParagraphElement = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation: HTMLDivElement = document.getElementById("resumeEducation") as HTMLDivElement;
const resumeWorkExperience: HTMLDivElement = document.getElementById("resumeWorkExperience") as HTMLDivElement;
const resumeSkills: HTMLDivElement = document.getElementById("resumeSkills") as HTMLDivElement;

form.addEventListener("submit", (event: Event): void => {
    event.preventDefault();

    const name: string = (document.getElementById("name") as HTMLInputElement).value.trim();
    const fname: string = (document.getElementById("fname") as HTMLInputElement).value.trim();
    const phone: string = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const email: string = (document.getElementById("email") as HTMLInputElement).value.trim();
    const degree: string = (document.getElementById("degree") as HTMLInputElement).value.trim();
    const skillsElements: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>("#skills");
    const educationElements: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>("#education");
    const experienceElements: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>("#experience");
    const photoInput: HTMLInputElement = document.getElementById("photo") as HTMLInputElement;

    const skills: string[] = Array.from(skillsElements)
        .map((input: HTMLInputElement) => input.value.trim())
        .filter((value: string) => value);
    const education: string[] = Array.from(educationElements)
        .map((input: HTMLInputElement) => input.value.trim())
        .filter((value: string) => value);
    const experiences: string[] = Array.from(experienceElements)
        .map((input: HTMLInputElement) => input.value.trim())
        .filter((value: string) => value);

    const photoFile: File | null = photoInput.files?.[0] || null;
    const photoURL: string = photoFile ? URL.createObjectURL(photoFile) : '';

    resumePhoto.src = photoURL;
    resumePhoto.alt = `${name}'s Profile Photo`;

    resumeName.innerHTML = `<strong>${name}</strong>`;
    resumeEmail.innerHTML = `<strong>Email:</strong> ${email}`;
    resumePhone.innerHTML = `<strong>Phone:</strong> ${phone}`;

    resumeEducation.innerHTML = education
        .map((edu: string) => `<p>${edu}</p>`)
        .join("");

    resumeWorkExperience.innerHTML = experiences
        .map((exp: string) => `<p>${exp}</p>`)
        .join("");

    resumeSkills.innerHTML = skills
        .map((skill: string) => `<p>${skill}</p>`)
        .join("");

    document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");
});

const backButton: HTMLButtonElement = document.getElementById("backButton") as HTMLButtonElement;
backButton.addEventListener("click", (): void => {
    form.reset();
    resumePhoto.src = "";
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
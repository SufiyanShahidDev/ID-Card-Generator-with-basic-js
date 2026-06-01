
// // Form Elements
// let fullName = document.getElementById("inputName");
// let cnic = document.getElementById("inputCNIC");
// let course = document.getElementById("inputCourse");
// let campus = document.getElementById("inputCampus");
// let image = document.getElementById("inputPhoto");
// let batch19 = document.getElementById("batch19");
// let batch20 = document.getElementById("batch20");
// let classDays = document.getElementById("inputDays");
// let classTime = document.getElementById("inputTime");
// let idForm = document.getElementById("idForm");

// // ID Card Elements
// let idCardContainer = document.getElementById("idCardContainer");
// let cardImage = document.getElementById("cardImage");
// let cardName = document.getElementById("cardName");
// let cardCourse = document.getElementById("cardCourse");
// let cardCNIC = document.getElementById("cardCNIC");
// let cardBatch = document.getElementById("cardBatch");
// let cardDays = document.getElementById("cardDays");
// let cardTime = document.getElementById("cardTime");
// let cardCampus = document.getElementById("cardCampus");
// let cardRoll = document.getElementById("cardRoll");

// let studentData = {};

// // form validations
// function generateIdCard() {
//     if (fullName.value.trim() == "" || cnic.value.trim() == "") {
//         return sweety("error", "Oops..", "Please fill all the fields.");
//     }

//     if (course.value == "") {
//         return sweety("error", "Oops..", "Please Select your course");
//     }

//     if (campus.value == "") {
//         return sweety("error", "Oops..", "Please Select your campus");
//     }

//     if (!image.files[0]) {
//         return sweety("error", "Oops..", "Please Upload Image");
//     }

//     let selectedBatch = "N/A";
//     if (batch19.checked) {
//         selectedBatch = batch19.value;
//     } else if (batch20.checked) {
//         selectedBatch = batch20.value;
//     }

//     let imageKaUrl = createImageUrl(image.files);
//     let rollNum = rollNumGenerator();

//     studentData.fullName = fullName.value;
//     studentData.cnic = cnic.value;
//     studentData.campus = campus.value;
//     studentData.course = course.value;
//     studentData.batch = selectedBatch;
//     studentData.days = classDays.value || "N/A";
//     studentData.time = classTime.value || "N/A";
//     studentData.profileImg = imageKaUrl;
//     studentData.rollNum = "S-" + rollNum;

//     idCardGenerator(studentData);

//     fullName.value = "";
//     cnic.value = "";
//     course.value = "";
//     campus.value = "";
//     image.value = "";
//     batch19.checked = false;
//     batch20.checked = false;
//     classDays.value = "";
//     classTime.value = "";
// }

// function idCardGenerator(data) {
//     console.log("id card banadiyaa...", data);

//     cardImage.src = data.profileImg;
//     cardName.innerText = data.fullName;
//     cardCourse.innerText = data.course;
//     cardCNIC.innerText = data.cnic;
//     cardBatch.innerText = data.batch;
//     cardDays.innerText = data.days;
//     cardTime.innerText = data.time;
//     cardCampus.innerText = data.campus;
//     cardRoll.innerText = data.rollNum;

//     idCardContainer.style.display = "block";
// }

// function createImageUrl(file) {
//     console.log(file);
//     if (file) {
//         const imageUrl = URL.createObjectURL(file[0]);
//         return imageUrl;
//     }
// }

// function rollNumGenerator() {
//     let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//     let rollNum = "";
//     for (let i = 0; i < 5; i++) {
//         let randomNum = Math.floor(Math.random() * nums.length);
//         rollNum += nums[randomNum];
//     }
//     return rollNum;
// }

// function sweety(icon, title, text) {
//     return Swal.fire({
//         icon: icon,
//         title: title,
//         text: text,
//     });
// }

// idForm.onsubmit = function (event) {
//     event.preventDefault();
//     generateIdCard();
// };
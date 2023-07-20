let nameInput = document.querySelector(`#name`);
let surnameInput = document.querySelector(`#surname`);
let birthdayInput = document.querySelector(`#birthday`);
let telInput = document.querySelector(`#tel`);
let mailInput = document.querySelector(`#mail`);
let passInput = document.querySelector(`#pass`);
let subscribeInput = document.querySelector(`#subscribe`);
let profileMenuButton = document.querySelector(`#registrationMenu`);

let registerButton = document.querySelector(`#register`);

let modal1 = new bootstrap.Modal(`#modal1`);
let modal2 = new bootstrap.Modal(`#modal2`);
let modal3 = new bootstrap.Modal(`#modal3`);
let modal4 = new bootstrap.Modal(`#modal4`);

let isRegister = false;

let name;
let surname;
let birthday;
let telephone;
let email;
let password;

registerButton.addEventListener(`click`, function () {

    let isValid = true;
    if (nameInput.value == ``) {
        nameInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else nameInput.classList.remove(`is-invalid`);
    if (surnameInput.value == ``) {
        surnameInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else surnameInput.classList.remove(`is-invalid`);
    if (birthdayInput.value == ``) {
        birthdayInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else birthdayInput.classList.remove(`is-invalid`);
    if (telInput.value == ``) {
        telInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else telInput.classList.remove(`is-invalid`);
    if (mailInput.value == ``) {
        mailInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else mailInput.classList.remove(`is-invalid`);
    if (passInput.value == ``) {
        passInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else passInput.classList.remove(`is-invalid`);

    if (isValid) {
        modal1.hide();
        modal2.show();

        isRegister = true;
        profileMenuButton.innerHTML = `log&nbsp;in`;
        profileMenuButton.setAttribute(`data-bs-target`, `#modal3`);

        name = nameInput.value;
        surname = surnameInput.value;
        birthday = birthdayInput.value;
        telephone = telInput.value;
        email = mailInput.value;
        password = passInput.value;
    }
});

let telOrMailInput = document.querySelector(`#telOrMail`);
let invalidFeedbackTelOrMail = document.querySelector(`#invalidFeedbackTelOrMail`);
let passCheckInput = document.querySelector(`#passCheck`);
let invalidFeedbackPass = document.querySelector(`#invalidFeedbackPass`);

let logInButton = document.querySelector(`#logIn`);

logInButton.addEventListener(`click`, function () {

    let isValid = true;
    if (telOrMailInput.value == ``) {
        invalidFeedbackTelOrMail.innerHTML = `Fill in the field!`;
        telOrMailInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else if (telOrMailInput.value != telephone && telOrMailInput.value != email) {
        invalidFeedbackTelOrMail.innerHTML = `User is not found!`;
        telOrMailInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else telOrMailInput.classList.remove(`is-invalid`);

    if (passCheckInput.value == ``) {
        invalidFeedbackPass.innerHTML = `Fill in the field!`;
        passCheckInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else if (passCheckInput.value != password) {
        invalidFeedbackPass.innerHTML = `Wrong password!`;
        passCheckInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else passCheckInput.classList.remove(`is-invalid`);

    if (isValid) {
        modal3.hide();

        profileMenuButton.innerHTML = `
    <img src="assets/icons/healthicons_ui-user-profile-outline.svg" alt="profile icon">
    `;
        profileMenuButton.setAttribute(`data-bs-target`, `#modal4`);
        profileMenuButton.classList.remove(`text-uppercase`);
        profileMenuButton.classList.add(`d-flex`);
        profileMenuButton.classList.add(`align-items-center`);

        let modalBodyNode4 = document.querySelector(`#modalBody4`);

        modalBodyNode4.innerHTML =
            `
        <div class="row g-3 mb-5">
            <div class="col-4">
                <img src="assets/img/Profile_avatar_placeholder_large.png"
                    class="img-fluid rounded-start" alt="avatar">
            </div>
            <div class="col-8">
                <div class="card-body d-flex flex-column justify-content-between h-100">
                    <h5 class="card-title">${name} ${surname}</h5>
                    <p class="card-text">
                        <b>Date of birthday</b> — ${birthday} <br> <br>
                        <b>Telephone</b> — ${telephone} <br> <br>
                        <b>E-mail</b> — ${email}
                    </p>
                    <button class="card-text text-start" disabled>
                        <small class="text-muted">
                            Изменить пароль
                        </small>
                    </button>
                </div>
            </div>
        </div>
        `
    }
});

let logOutButton = document.querySelector(`#logOut`);

logOutButton.addEventListener(`click`, function () {
    profileMenuButton.innerHTML = `Registration`;
    profileMenuButton.setAttribute(`data-bs-target`, `#modal1`);
    profileMenuButton.classList.add(`text-uppercase`);
    profileMenuButton.classList.remove(`d-flex`);
    profileMenuButton.classList.remove(`align-items-center`);
});
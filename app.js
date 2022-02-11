const form = document.querySelector(".form");
const phone = document.getElementById("phone");
const code = document.getElementById("code");
const phoneErrorMessage = document.getElementById("message-phone");
const codeErrorMessage = document.getElementById("message-code");
const btn = document.querySelector(".start");

//jesli liczba znakow w phone sie nie zgadza to to remove hidden
//jesli liczba znakow w code sie nie zgadza to to remove hidden
//jesli nie ma bledow, inputy są na zielono i jesli zawieraja odp liczbe znakow to przejdz dalej

form.addEventListener("submit", e => {
    e.preventDefault();

    let errors = [];
    const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneReg.test(phone.value)){
            errors.push("Numer jest niepoprawny")
    }
    const codeReg = /^\([0-9]{4})$/;
    if (!codeReg.test(code.value)){
            errors.push("Kod jest nieprawidłowy")
            
    }

    if (!errors.length) { 
        e.target.submit();
        
    } else {
      phoneErrorMessage.classList.remove('hidden');
      codeErrorMessage.classList.remove('hidden');
    }
});
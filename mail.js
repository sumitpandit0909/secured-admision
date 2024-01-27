const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAo44fi2ftVfVnWjOpH6IZdg-PrpKLLrVg",
    authDomain: "contactform-7595f.firebaseapp.com",
    databaseURL: "https://contactform-7595f-default-rtdb.firebaseio.com",
    projectId: "contactform-7595f",
    storageBucket: "contactform-7595f.appspot.com",
    messagingSenderId: "608793073071",
    appId: "1:608793073071:web:c792ca422335a6c155cb5a"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var number = getElementVal("phnum");
    var colleges = getElementVal("collegenames");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, number,colleges, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, phnum, collegenames, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        number: phnum,
        colleges: collegenames,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
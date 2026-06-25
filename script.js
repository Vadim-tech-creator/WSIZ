const registration = document.querySelector("#register");
const res = document.querySelector("#message");
const participantsArray = [];
const participantCount = document.getElementById("participant-count");
registration.addEventListener("submit", function(event){
    event.preventDefault();
    const user = document.getElementById("user");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const field_technology = document.getElementById("technology");
    const term = document.getElementById("check");

    if (user.value.trim() === "") {
        alert("Enter your name");
        user.focus();
        return;
    }
    if (email.value.trim() === "") {
        alert("Enter your email");
        email.focus();
        return;
    }
    const emailpat  = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (age.value.trim() === "") {
        alert("Enter your age");
        age.focus();
        return;
    }

    const value_age = parseInt(age.value.trim())
    if (field_technology.value.trim() === "") {
        alert("Enter your field");
        field_technology.focus();
        return;
    }
    if (!term.checked){
        alert("Please agree with the rules");
        term.focus();
        return;
    }
    alert(`${user.value.trim()} registered for the event.\n Technology :${field_technology.value.trim()}.\n Age :${age.value.trim()}`)
    const participant = {
        name: user.value.trim(),
        email: email.value.trim(),
        age: age.value.trim(),
        field: field_technology.value.trim()
    };

    participantsArray.push(participant);
    participantCount.textContent = participantsArray.length;
    Participant(participant);
    registration.reset();
})

function Participant(participant) {
    const list = document.getElementById("participant-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>Name:</strong> ${participant.name} <br> 
        <strong>Email:</strong> ${participant.email} <br> 
        <strong>Age:</strong> ${participant.age} <br> 
        <strong>Field of study:</strong> ${participant.field}
        <hr>
    `;
    list.appendChild(listItem);
}





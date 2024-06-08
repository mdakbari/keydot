document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactform").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const nameElement = document.getElementById("name");
        const emailElement = document.getElementById("email");
        const subjectElement = document.getElementById("subject");
        const messageElement = document.getElementById("message");

        // Ensure all elements are found before accessing their values
        if (nameElement && emailElement && subjectElement && messageElement) {
            const name = nameElement.value;
            const email = emailElement.value;
            const subject = subjectElement.value;
            const message = messageElement.value;

            const msg = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
            const pnumber = 9016755950;
            console.log(msg);   
            const whatsapp = `https://api.whatsapp.com/send?phone=${pnumber}&text=${encodeURIComponent(msg)}`;

            window.open(whatsapp, '_blank');
        } else {
            console.error("One or more form elements not found.");
        }
    });
});

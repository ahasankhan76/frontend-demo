alert("JS connected successfully!");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("ticketForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert(" Form submitted!");
        const event = form.event.value.trim();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const mobile = form.mobile.value.trim();
        const studentId = form.studentId.value.trim();
        const course = form.course.value.trim();
        const year = form.year.value.trim();
        const section = form.section.value.trim();

        if(!event || !name || !email || !mobile || !studentId || !course || !year || !section ){
            alert("All fields are required");
            return;

        }
        const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ( !emailpattern.test(email)){
            alert("please enter a valid email address");
            return;
        
        }
        if ( mobile.length !== 10 || isNaN(mobile)) {
            alert("please enter a valid 10-digit mobile number");
            return;


        }
        const data = {
            event,
            name,
            emaile,
            mobile,
            studentId,
            course,
            year,
            section,
        };
        localStorage.setItem("ticketData", JSON.stringify(data));
        form.reset();
    });
});

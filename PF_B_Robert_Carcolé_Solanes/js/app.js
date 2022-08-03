


function sendEmail() {
    Email.send({
    Host: "smtp.elasticemail.com",
    Username : "rcarcoles@gmail.com",
    Password : "9F06776AB4206FCEF293EFF4C85FA7B271AE",
    To : 'gsanox@gmail.com',
    From : "rcarcoles@gmail.com",
    Subject : "probando",
    Body : "probandoBody",
    Port: 2525,
    }).then(
        message => alert(message)
    );
}

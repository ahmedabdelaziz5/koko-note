var charset = "@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz";
var length = 15;

// function to generate random passwords with length X and send it to the user who forgot this password 
const generatePasswod = () => {

    let password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
};


module.exports = {

    generatePasswod

}
export const validateEmail = (email) => {
    var validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return validEmail.test(email);
}

export const validatePhoneNumber = (phone) => {
    var validPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return validPhone.test(phone);
}
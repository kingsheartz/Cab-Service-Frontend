import { validateEmail, validatePhoneNumber } from "./Validations";
import axios from 'axios'

const validateUserDetails = (data) => {

    alert(JSON.stringify(data))

    if (data.id === ""
        || data.employeeName === ""
        || data.email === ""
        || data.phone === ""
        || data.route === ""
        || data.pickUp === ""
        || data.dropOff === "") {
        alert("All fields are mandatory");
        return false;
    }

    if (typeof (data.id) !== "number") {
        alert("ID must be a number");
        return false;
    }

    if (typeof (data.employeeName) !== "string") {
        alert("ID must be a String");
        return false;
    }

    if (typeof (data.email) !== "string") {
        alert("ID must be a String");
        return false;
    }

    if (!validateEmail(data.email)) {
        alert("Invalid email");
        return false;
    }

    if (typeof (data.phone) !== "string") {
        alert("ID must be a String");
        return false;
    }

    if (!validatePhoneNumber(data.phone)) {
        alert("Invalid mobile number");
        return false;
    }

    if (typeof (data.route) !== "string") {
        alert("ID must be a String");
        return false;
    }

    if (typeof (data.pickUp) !== "string") {
        alert("ID must be a String");
        return false;
    }

    if (typeof (data.dropOff) !== "string") {
        alert("ID must be a String");
        return false;
    }
    return true;
}

export const registerCabUser = (data) => {

    if (validateUserDetails(data)) {
        axios({
            // Endpoint to send files
            url: "http://localhost:8080/createUser",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // Add any auth token here
                authorization: "",
            },

            // Attaching the form data
            data: {
                "id": data.id,
                "name": data.employeeName,
                "email": data.email,
                "phone": parseInt(data.phone),
                "route": data.route,
                "pickUp": data.pickUp,
                "dropOff": data.dropOff
            },
        })
            // Handle the response from backend here
            .then((res) => { })

            // Catch errors if any
            .catch((err) => { });
    }
}
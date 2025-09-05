
export const patterns = {
name: /^[A-Za-z ]+$/, // alphabets + spaces only
username: /^[A-Za-z0-9@._-]+$/, // alphanumeric with @ . _ -
password: /^[A-Za-z0-9@._-]+$/, // same as username (but must not equal username)
email: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, // Google email only
// phone format: +<countrycode><10 digit number>, e.g. +91XXXXXXXXXX
phone: /^\+\d{1,3}\d{10}$/,
};


export const validateSignup = (values) => {
const errors = {};
const { name, username, email, phone, password, confirmPassword } = values;


if (!name) errors.name = "Name is required";
else if (!patterns.name.test(name)) errors.name = "Only alphabets are allowed";


if (!username) errors.username = "Username is required";
else if (!patterns.username.test(username)) errors.username = "Use letters, numbers or @ . _ -";


if (!email) errors.email = "Email is required";
else if (!patterns.email.test(email)) errors.email = "Use a valid Gmail address";


if (!phone) errors.phone = "Phone is required";
else if (!patterns.phone.test(phone)) errors.phone = "Use +countrycode followed by 10 digits";


if (!password) errors.password = "Password is required";
else if (!patterns.password.test(password)) errors.password = "Use letters, numbers or @ . _ -";
else if (username && password && username === password) errors.password = "Username and password cannot be same";


if (!confirmPassword) errors.confirmPassword = "Please confirm password";
else if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";


return errors;
};


export const validateLogin = (values) => {
const errors = {};
const { username, password } = values;


if (!username) errors.username = "Username is required";
else if (!patterns.username.test(username)) errors.username = "Invalid username";


if (!password) errors.password = "Password is required";
else if (!patterns.password.test(password)) errors.password = "Invalid password";


return errors;
};
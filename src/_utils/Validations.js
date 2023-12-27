export const containsSpecialChars = (str, id = null, enteredValue = '') => {
    const idField = id ? (id.charAt(0).toUpperCase() + id.substring(1)) : 'This';

    if(str.length === 0 ) return `${idField} field should not be empty`

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str) ? `${idField} field cannot contain special characters ${enteredValue ? `like ${enteredValue}` : ``}` : false;
}

export const isAValidEmail = (str, id = null) => {
    if(!str.length) return false;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    const idField = id ? (id.charAt(0).toUpperCase() + id.substring(1)) : 'This';
    return !regex.test(str) ? `${idField} field should be a valid Email` : false;
}

export const isNotAValidPassword = (str, id = null) => {
    if(!str.length) return false;
    
    const idField = id ? (id.charAt(0).toUpperCase() + id.substring(1)) : 'This';

    const regexLowerCase = /[a-z]/;
    const regexUpperCase = /[A-Z]/;
    const regexDigit = /[0-9]/;
    const regexSpecialChar = /[!@#$%^&*(),.?"':{}|<>`~;]/;
    
    const err = [];
    if(!regexLowerCase.test(str)) err.push(`${idField} field should have at least one lower case character`);
    if(!regexUpperCase.test(str)) err.push(`${idField} field should have at least one upper case character`);
    if(!regexDigit.test(str)) err.push(`${idField} field should have at least one digit`);
    if(!regexSpecialChar.test(str)) err.push(`${idField} field should have at least one special character`);


    return err.length ? err : false;
}


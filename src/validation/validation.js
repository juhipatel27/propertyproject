export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
export const validateAge = (age) => {
    var re=/^\S[0-9]{0,3}$/;
    return re.test(age);
};
export const  validateNum = (phno) => {
    var re=/^\d{10}$/
    return re.test(phno);
};
export const Empty=(props)=>{
    return props.toString().trim().length === 0 || false;
}
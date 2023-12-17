export const validatePhone = phone=>{
    const replacedString = phone.replace(/\s/g, '');
    console.warn(replacedString);
    return /[a-zA-Z]/.test(phone) && /[^\d\-+]/.test(phone) ;
        };
/*export const validatePhone = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };*/

  export const validateotp = otp =>{
    return !/[!@#$$^$+()_+\-=[\]{};':'\\|,<>/?]/.test(phone) ;
        };


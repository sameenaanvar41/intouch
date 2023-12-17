/*export const validateEmail = (email) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      return true
    } else {
       return false; 
       }
  };

 export const validatePhoneNumber = phoneNumber => {
    // Regular expression for a basic phone number validation
    const phoneNumberRegex = /^[0-9]{10}$/;

    if (phoneNumberRegex.test(phoneNumber)) {
      return true;
    } else {
     return false;    }
  }; */


  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
     return true;
    } else {
      return false;
    }
}

export const validatePhoneNumber = (mobile) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (phoneNumberRegex.test(mobile)) {
        return true;
    } else {
        return false;
    }
  };


export const validatePhone = phone=>{
    const replacedString = phone.replace(/\s/g, '');
    console.warn(replacedString);
    return /[a-zA-Z]/.test(phone) && /[^\d\-+]/.test(phone) ;
        };

        export const validateEmail= email => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
          };
         
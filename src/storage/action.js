import {UPDATECATEGORIES,LOGIN, SIGNOUT,UPDATEPROFILE,UPDATECARTCOUNT,UPDATEWISHIDS} from "./constants";

export const login = data =>({
    type:LOGIN,
    payload:{
        userId:data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        email:data.email,
        mobileNumber:data.mobileNumber,
        profileImage:data.profileImage,
    },
});

export const signout = data =>({
    type:SIGNOUT,
    payload:{
        },
});
export const updateprofile = data =>({
    type:UPDATEPROFILE,
    payload:{
        firstName: data.firstName,
        lastName: data.lastName,
        email:data.email,
        mobileNumber:data.mobileNumber,
        profileImage:data.profileImage,
        
    }
})
  export const updateCategories = data =>({
    type:UPDATECATEGORIES,
    payload:{
        categories: data,  
    },
  }); 

  export const updateCartCount = data =>({
    type:UPDATECARTCOUNT,
    payload:{
        cartCount: data,  
    },
});
  export const updatewishids = data => ({
      type:UPDATEWISHIDS,
      payload:{
        wishids:data,
       },
    });
  

  
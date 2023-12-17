import { LOGIN,SIGNOUT, UPDATEPROFILE,UPDATECATEGORIES ,UPDATECARTCOUNT,UPDATEWISHIDS} from "./constants";

const initialstate={
    isLoggedIn:false, 
    userId:'',
    firstName: '',
    lastName: '',
    email: ' ',
    mobileNumber:'',
    profileImage:'',
    categories:[],
    cartCount:0,
    wishIds:[],
    };   
export const intouchReducer = (state= initialstate,action) => {
console.warn(action.type);
  switch (action.type) {
     case LOGIN:
     // const {userId,firstName,lastName,email,mobileNumber,profileImage} = action.payload;
        return{
         ...state,
         userId:action.payload.userId,
         firstName: action.payload.firstName,
         lasttName: action.payload.lastName,
         email: action.payload.email,
         mobileNumber:action.payload.mobileNumber,
         profileImage:action.payload.profileImage,
         isLoggedIn:true,
            };
            case SIGNOUT:
                return{
                    ...state,
                    userId:'',
                    firstName: '',
                    lasttName: '',
                    email: '',
                    mobileNumber:'',
                    profileImage:'',
                    isLoggedIn:false,
                };
                case UPDATEPROFILE:
            //const {firstName,lastName,email,mobileNumber,profileImage} = action.payload;
             return{
                ...state,
                firstName: action.payload.firstName,
                lasttName: action.payload.lastName,
                email: action.payload.email,
                mobileNumber:action.payload.mobileNumber,
                profileImage:action.payload.profileImage,
                isLoggedIn:true,
            };
            // case UPDATECATEGORIES:
            //     console.warn('action.payload.categories',action.payload.categories);
            //      return{
            //         ...state,
            //         categories: [...action.payload.categories],
            //         };
            case UPDATECATEGORIES:
                return {
                  ...state,
                  categories: [...action.payload.categories],
                };
                case UPDATECARTCOUNT:
                    return {
                        ...state,
                        cartCount: action.payload.cartCount
                    };
                    case UPDATEWISHIDS:
                        return {
                        ...state,
                        wishids:action.payload.wishids,
                };
        default:
            return state;
    }
};
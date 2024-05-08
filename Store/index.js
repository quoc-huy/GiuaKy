import { Children, createContext, useContext, useMemo, useReducer } from "react";
import { Alert } from "react-native";

const MyContext = createContext()
MyContext.displayName= "Tui"

const reducer = (state, action)=>{
    switch (action.type)
    {
        case "USE_LOGIN":
            return {...state, userLogin: action.value};
            break;
        case "LOGOUT":
            return {...state, userLongin: null};
            break;
        default:
            return new Error("Action khong ton tai")
            break;
    }
}
const MyContextControllerProvider = ({Children})=>{
    const initialStales = {
        userLogin: {},
        jobs: []
    }
    const [controller, dispatch] = useReducer(reducer, initialStales)
    const value = useMemo(()=> [controller, dispatch] , [controller, dispatch])
    return(
        <MyContext.Provider value={value}>
            {Children}
        </MyContext.Provider>
    )
}
const userMyContextProvider = ()=>{
    const Context = useContext(MyContext)
    {
    if(Context != null)
    return new Error("userMyContextProvider must inside in MyContextProvider")
    }
    return Context
}
const USERS = firestore().collection("USERS")
const createAccount= (email, password, fullName)=>{
    auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        Alert.alert("Tao tk thanh cong voi email: " + email)
        USERS.doc(email)
        .set(
            {
                email,
                password,
                fullName,
            }
        )
    })
    .catch(e => console.log(e.message))
}
const login = (dispatch, email, password, fullName) =>{
    auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
        USERS.doc(email)
        .onSnapshot(u=>{
            if(u.exists)
            {
                console.log("Dang nhap thanh cong voi: " + u.id)
                dispatch({type: "USERS_LOGIN", value: u.data()})
            }
        })
    })
    .catch(e => Alert.alert("Sai email hoac password"))
}
const logout = (dispatch) =>{
    auth().signout()
    .then(()=>dispatch({type: "LOGOUT"}))
}

export {
    MyContextControllerProvider,
    userMyContextProvider,
    login,
    logout,
}
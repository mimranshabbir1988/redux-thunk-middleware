

// https://jsonplaceholder.typicode.com/users
// actions 

import axios from "axios";


const userAction = () => async(dispatch) => {
    try {
        dispatch({type: "GET_USER_REQUEST"})
        let {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({type: "GET_USER_SUCCESS", payload: data})        
        console.log(data)
    } catch (error) {
        dispatch({type: "GET_USER_ERROR", 
        payload:error.data && error.response.data.message ? 
        error.response.data.message : error.message

    })
        
    }
}

export default userAction;






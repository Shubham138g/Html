import axios from 'axios';
// import user from '../../../server/schema/user-schema';

const URL='http://localhost:9000';

export const addUser= async (data)=>{
    try {
       return await axios.post(`${URL}/adduser`,data)
    } catch (error) {
        console.log("error while calling adduse api",error)
    }
}

const id=1;
export const getUser=async()=>{
    try {
        return await axios.get(`${URL}/alluser`)
    } catch (error) {
        console.log("error while calling getUser",error);
    }
}

export const  getUserr=async(id)=>{
try {
    return  await axios.get(`${URL}/${id}`)
} catch (error) {
    console.log("error while calling getUserr", error);
}
}


// export const editUser=()=>{
//     try {
//         return axios.post(`${URL}/${id}`,user)
//     } catch (error) {
//         console.log("error while calling edituser",error);
//     }
// }
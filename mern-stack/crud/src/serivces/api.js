import axios from 'axios';

const URL='http://localhost:9000';

export const addUser= async (data)=>{
    try {
       return await axios.post(`${URL}/adduser`,data)
    } catch (error) {
        console.log("error while calling adduse api",error)
    }
}


export const getUser=async()=>{
    try {
        return await axios.get(`${URL}/alluser`)
    } catch (error) {
        console.log("error while calling getUser",error);
    }
}
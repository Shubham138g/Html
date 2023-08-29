import axios from 'axios';

const URL='http://localhost:8000';
export const addUser= async (data)=>{
    try {
       return await axios.post(`${URL}/adduser`,data)
    } catch (error) {
        console.log("error while calling adduse api",error)
    }
}
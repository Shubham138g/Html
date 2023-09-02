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

export const editUser = async (user ,id) => {
    try{
      const response = await axios.put(`${URL}/${id}`, user);
      return response.data;
    } catch(error){
      console.log("error while calling editUser function in api.js",error);
    }
  }


export const deleteUser=async(id)=>{
    try{
        const response = await axios.delete(`${URL}/${id}`);
        return response.data;
      } catch(error){
        console.log("error while calling deleteUser function in api.js",error);
      }
}
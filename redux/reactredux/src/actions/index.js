export const incNumber=(num)=>{
    return{
        type:'INCREMENT',
        payload:{
            num:num
        }
    }
}
export const decNumber=(num)=>{
    return{
        type:'DECREMENT',
        payload:{
            num:num
        }
    }
}
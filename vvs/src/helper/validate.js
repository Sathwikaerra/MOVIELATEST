import { toast} from 'react-hot-toast'





export async function userValidate(values){
    const errors=useremailVerify({},values);
    userpasswordVerify({},values);
                

     return errors;
}

function useremailVerify(error={},values){
    if(!values.email)
    {
        error.email=toast.error('email required...!')
    }
    else if(values.email.includes(" ")){
        error.email=toast.error('enter the valid email...!')
    }
    
    return error;
}



function userpasswordVerify(error={},values){

    
    if(!values.password)
    {
        error.password=toast.error('password required...!')
    }
    else if(values.email.includes(" ")){
        error.password=toast.error('Enter the password....!')
    }
   
    
    return error;
}



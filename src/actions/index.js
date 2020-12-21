export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';

export const increment=()=>{
    return{
        type:'INCREMENT',
    }
    
}

export const decrement=()=>{
    return{
        type:'DECREMENT',
    }
    
}

// Action Createrの実装
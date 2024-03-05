export const hotelReducer = (state , action)=>{
    switch (action.type){
 case "Sorted_By_Rating":
                    return {...state , byRating : action.payload};
                    case "Sorted_By_Price":
                    return {...state , sort : action.payload};
                   
             case "Sorted_by_Search":
                        return {...state , searcheQuery : action.payload}; 
          
                        
                        default :
        return state;
    }
}
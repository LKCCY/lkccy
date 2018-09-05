const initObj = {seatSelected:[]}
export default (state=initObj,{type,item})=>{
    switch(type){
        case "addSeat" :
                return{
                    seatSelected:[...state.seatSelected,item]
                }
            break;
        case "delSeat" :
                return{
                    seatSelected:state.seatSelected.filter(i=>item.id!=i.id)
                }
            break;
        default:
             return state;
    }
}
function Todoitem (props){

    const activityArr = props.activityArr
    const setactivityArr =props.setactivityArr

    function handleDelete(Delete){

        var tempara = activityArr.filter(function(item){
            if(item.id===Delete){
                return false
            }
            else{
                return true
            }
        })

        setactivityArr(tempara)

    }

    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600 font-bold" onClick={()=>handleDelete(props.id)}>Delete 🚫</button>
        </div>
    )
}

export default Todoitem
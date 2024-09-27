import Todoform from "./TodoForm"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer(){

    const [activityArr,setactivityArr] = useState([ ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
       <Todoform activityArr = {activityArr} setactivityArr = {setactivityArr}/>
       <Todolist activityArr = {activityArr} setactivityArr = {setactivityArr}/>
        </div>
        </div>
    )       
}
export default Todocontainer
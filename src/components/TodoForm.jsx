import { useState } from "react";

function Todoform(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  const [newactivity, setnewactivity] = useState("");

  function handleChange(evt) {
    setnewactivity(evt.target.value);


  }

  function Addactivity() {
    setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newactivity }]);
    
    setnewactivity(""); 
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input
          value={newactivity}
          onChange={handleChange}
          type="text"
          className="border border-black bg-transparent p-1"
          placeholder="Next Activities"
        />
        <button onClick={Addactivity} className="border border-black p-1 bg-black text-white">
          Add
        </button>
      </div>
    </div>
  );
}

export default Todoform;
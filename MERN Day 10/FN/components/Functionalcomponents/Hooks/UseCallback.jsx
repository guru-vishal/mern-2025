import React, { useState } from 'react'
const UseCallback = () => {
    var[num,setNum]=useState(0);
  return (
    <div>
      <h1>Welcome to UseCallback Home</h1>
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
    </div>
  );
};
export default UseCallback;
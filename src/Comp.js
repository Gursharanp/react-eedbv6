import React, {useState,useEffect} from 'react';
export default function Comp(){
  const[count,setCount]=useState(0);
//
useEffect(()=>{
  console.log('render');
});
useEffect(()=>{
console.log("runs only once")
},[]);

useEffect(()=>{
  console.log("runs when array state changes")
  },[count]);

  useEffect( ()=>{
    return()=>{
      console.log("unmount");
    }
  },[] );




return(
<div>
  <button onClick={()=> setCount(count -1)}>-</button>
  {count}
  <button onClick={()=> setCount(count +1)}>+</button>

</div>

);
}
import React from "react";
import "./style.css";
import React, {useState,useEffect} from 'react';
import Comp from "./Comp.js"; 
export default function App() {
  const[flag,setFlag]=useState(true);
  return (
    <>
       <button onClick={()=> setFlag( !flag )} >Switch </button  >
       {flag && <Comp />}
    </>
  );
}

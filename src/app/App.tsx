import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import GCO from "../Pages/GCO";

export default function App() {

const [scale, setScale] = useState(1);

const baseWidth = 1280;
const baseHeight = 6000;

useEffect(()=>{

const handleResize = ()=>{

const width = window.innerWidth;

setScale(width / baseWidth);

};

handleResize();

window.addEventListener("resize",handleResize);

return ()=>window.removeEventListener("resize",handleResize);

},[]);

return (

<BrowserRouter>

<div className="bg-[#f7f3eb] w-full min-h-screen overflow-x-hidden">

<div
style={{
width:'100vw',
height:`${baseHeight * scale}px`,
position:'relative'
}}
>

<div
style={{
width:`${baseWidth}px`,
position:'absolute',
top:0,
left:0,
transform:`scale(${scale})`,
transformOrigin:'top left'
}}
>

<Routes>

<Route path="/" element={<Homepage/>}/>

<Route path="/gco" element={<GCO/>}/>

</Routes>

</div>

</div>

</div>

</BrowserRouter>

);

}

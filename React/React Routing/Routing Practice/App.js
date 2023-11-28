import React from "react";
import {BrowserRouter,Routes,Route,useParams} from "react-router-dom";

const Home = (props) => { 
  return (
    <h1 >Welcome</h1>
  );
}
const First = (props) => { 
  const { First } = useParams();
  return (
    isNaN (First)?
      <h1> this is a word : {First} </h1>:
      <h1>this is a number : {First} </h1>
  );
}    
const Second = (props) => { 
  const { Second,color,bgcolor } = useParams();
  return (
    isNaN (Second)?
      <h1 style={{color:color, backgroundColor:bgcolor}}>
        this is a word : {Second} </h1>:
      <h1>this is a number : {Second} </h1>
  );
}  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/home" element={<Home />} />
        <Route  path="/:First" element={<First />} />
        <Route  path="/:Second/:color/:bgcolor" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App

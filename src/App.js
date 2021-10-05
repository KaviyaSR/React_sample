import "./App.css";
import FormData from "./Components/FormData";
import TableData from "./Components/TableData";
import Header from "./Components/Header";
import React,{useState,useEffect} from 'react';

function App() {
  const LOCAl_STORAGE_KEY="details";
  const[details,setDetails]=useState([]);
  
  const addDetails=(detail)=>{
    console.log(detail);
  setDetails([...details,detail]);
  }

  useEffect(()=>{
     const retriveDetails=JSON.parse(localStorage.getItem(LOCAl_STORAGE_KEY,))
     if (retriveDetails) setDetails(retriveDetails) ;
  },[]);


  useEffect(()=>{
    localStorage.setItem(LOCAl_STORAGE_KEY,JSON.stringify(details))
  },[details]);
  {/*const details = [
    {
      id: "1",
      name: "Kaviya",
      lname: " Rajan",
      mail: " Kavi@gmail.com",
      password: " kaviya",
    },
    {
      id: "2",
      name: "Deva",
      lname: " Rajan",
      mail: " Deva@gmail.com",
      password: " Deva",
    },
  ];*/}
  return (
    <div className="App">
      <Header />
      <FormData addDetails={addDetails} />
      <TableData details={details} />
    </div>
  );
}

export default App;

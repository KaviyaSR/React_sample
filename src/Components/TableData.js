import React from 'react'

const TableData=(props) => {
    console.log(props);
    //const {id,name,lname,mail,password}=props.detail;
    
    return (
        <div>
        <table class="ui celled table">
        <thead>
          <tr><th>FirstName</th>
          <th>LastName</th>
          <th>Mail ID</th>
          <th>Password</th>
        </tr></thead>
        <tbody>
           { props.details.map((detail)=>{
     return(
       
  
    <tr >
      <td data-label="name">{detail.name}</td>
      <td data-label="lanme">{detail.lname}</td>
      <td data-label="mail">{detail.mail}</td>
      <td data-label="password">{detail.password}</td>
    </tr>
  
  
  
  )})}   
    </tbody>

     </table>    
    </div>)  
    
}

export default TableData

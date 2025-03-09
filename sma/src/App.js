// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DeleteForeverOutlined, EditOutlined  } from '@mui/icons-material';

function App() {
  const [data, setData] = useState([])
      useEffect(() => {
          axios.get('http://localhost:3031/Students')
          .then(res => setData(res.data))
          .catch(err => console.log(err))
      },[])
    return (
      <div className='container mt-5'>
        <table style={{border:'solid 1px'}}>
              <thead>
                  <tr>
                  <th></th>
                      <th>FirstName</th>
                      <th>LastName</th>                      
                      <th>Student ID</th>
                      <th>Email ID</th>
                      <th>Address</th>
                      <th>Subjects</th>
                      <th></th>                      
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((d, i) => {
                      return <tr key={i}>
                          <td>{d.Firstname}</td>
                          <td>{d.Lastname}</td>                          
                          <td>{d.Id}</td>
                          <td>{d.EmailId}</td>
                          <td>{d.Address}</td>                          
                          <td>{d.Subject}</td>
                          <td><DeleteForeverOutlined /></td>
                          <td><EditOutlined /></td>
                      </tr>
                  })}
              </tbody>
          </table>
      </div>
    )
}

export default App;

import React, { useEffect, useState } from 'react'
import axios from 'axios'


function JsonServer() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3031/Students')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className='container mt-5'>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => {
                    return <tr key={i}>
                        <td>{d.Id}</td>
                        <td>{d.Firstname}</td>
                        <td>{d.Lastname}</td>
                        <td>{d.Address}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default JsonServer
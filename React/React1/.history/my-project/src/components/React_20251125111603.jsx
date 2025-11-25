import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {


    useEffect(() => {
        try {
             axios.get("http://localhost:3000/users")
            
        } catch (error) {
            console.log(error)
        }
    }, [])  

    // useEffect(() => {
    //     fetchUsers()
    // }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        iteam.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Read
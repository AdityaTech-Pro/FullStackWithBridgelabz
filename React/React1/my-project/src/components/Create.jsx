import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('http://localhost:5173/users&#39;, {id, name, email})
            if(data){
                alert('user created successfully')
            }
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Id</label>
        <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Create
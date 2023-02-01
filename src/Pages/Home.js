import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='App-header'>
    
    <Link className='text-light btn btn-primary' to="/task1">
    Task 1
    </Link>
    
    <br/>
   
    <Link className='text-light btn btn-primary' to="/task2">
    Task 2
    </Link>
   

    </div>
  )

}

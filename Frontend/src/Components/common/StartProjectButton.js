import React from 'react'
import { Link } from 'react-router-dom'

const StartProjectButton = () => {
  return (
    <Link to="/startProject">
        <button  className="text-white w-[180px] mt-10 text-sm font-semibold py-3 px-4 bg-blue-700 rounded-md flex items-center ">Start Project</button>
    </Link>
    
  )
}

export default StartProjectButton
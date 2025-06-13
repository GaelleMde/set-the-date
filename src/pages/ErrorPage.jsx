import React from 'react'
import { useNavigate } from 'react-router-dom'


function ErrorPage() {

  const navigate = useNavigate()
  
  return (
    <div>
       <h1>Oops! Something went wrong</h1>
      <p>We're sorry, an unexpected error occurred. Please try again later.</p>
            <button 
        onClick={() => navigate('/')} 
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1.5rem',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go to Homepage
      </button>
    </div>
  )
}

export default ErrorPage
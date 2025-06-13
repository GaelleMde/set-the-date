import React, { useContext } from 'react'
import {Authcontext} from '../context/auth.context'


function HomePage() {

  const {role} = useContext(Authcontext)
   

  return (
    <div>
      <h1>Homepage <br/> Ici tu vas voir du contenu de tennis 🎾</h1>

    { role === "admin" && <button>Only for Admin</button>}
    </div>
  )
}

export default HomePage


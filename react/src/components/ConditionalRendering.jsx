import React from 'react'
import { useState } from 'react';

const ConditionalRendering = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} using ternery operator */}

      <div>
        {/* {isLoggedIn && <button>Logout</button>} Using logical operator:  In this if the user is not logged in then the logout button will show  */}
      </div>
    </div>
  )
}

export default ConditionalRendering

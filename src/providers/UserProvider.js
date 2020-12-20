import React from "react"
import { useState } from "react"

export const UserContext = React.createContext()


const startData = {
  email: "thomyork@radiohead.com",
  firstName: "Thom",
  lastName: "York",
  avatar: "https://react.semantic-ui.com/images/avatar/large/matthew.png"
}

const UserProvider = (props) => {

  const [userData, setUserData] = useState(startData)

  const userConfig = {
    setUserData,
    userData,
  }

  return (
    <UserContext.Provider value={userConfig}> 
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
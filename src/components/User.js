import { Card, Image } from "semantic-ui-react"
import { UserContext } from "../providers/UserProvider"
import { useContext } from "react"

const User = () => {
  const value = useContext(UserContext)
  console.log("value from userprofiel: ",value)

  return(
   <Card>
     <Image src={value.userData.avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        {value.userData.firstName} {value.userData.lastName}
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        {value.userData.email}
      </Card.Header>
    </Card.Content>
   </Card>
    
  )

}

export default User
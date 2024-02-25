// Cause vs Effect
import { useEffect, useState } from 'react'

interface UserInformationProps {
  name: string
  github: string
}

function fetchUserByUsername() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isLookingForUser, setIsLookingForUser] = useState(false)
  const [userInformation, setUserInformation] = useState<UserInformationProps>()

  useEffect(() => {
    function loadUser() {
      setIsLookingForUser(true)

      const fetchUserResponse = fetchUserByUsername()

      setUserInformation(fetchUserResponse.data.user)

      setIsLookingForUser(false)
    }

    loadUser()
  })

  if (isLookingForUser) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userInformation?.github}.png`} alt="" />
      <a href={userInformation?.github}>{userInformation?.name}</a>
    </div>
  )
}

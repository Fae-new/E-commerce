import React, { useState, useEffect } from 'react'
import { User } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'


type usercontext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>

}

export const UserContext = React.createContext<usercontext>({} as usercontext)

export const Userprovider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user)
      } else {
        setUser(null)
      }
    })

  }, [])


  return (
    <UserContext.Provider value={{ user: user, setUser }}>

      {children}

    </UserContext.Provider>
  )
}


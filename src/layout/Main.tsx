import React, { FC, ReactElement } from 'react'
import '../styles/main.scss'



const Main: FC<{ children: ReactElement }> = ({ children }) => {

  return (
    <main>
      {children}
    </main>
  )
}

export default Main
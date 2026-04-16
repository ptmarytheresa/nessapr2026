import React from 'react'
import { apicontext } from './contextdata'

export default function Samplechild() {
        const contextdata= React.useContext(apicontext)
    
  return (
    <div>Samplechild
        {contextdata.username}
    </div>
  )
}

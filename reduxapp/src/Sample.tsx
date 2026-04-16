import React from 'react'
import { apicontext } from './contextdata'

export default function Sample() {
    const contextdata= React.useContext(apicontext)
  return (
    <div>Sample

        {contextdata.username}
    </div>
  )
}

import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      
      <div className="mfs-auto">
        <span className="mr-1">Created by</span>
        <a href="" target="_blank" rel="noopener noreferrer">Team TeraHash</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)

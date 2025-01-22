import React, { useState, useMemo} from "react"

const UseCallbackChildExample = ({onEvent}) => {  
  return (
    <div>
      자식입니다.
      {onEvent()}
    </div>
    
  )
  
}

export default React.memo(UseCallbackChildExample);
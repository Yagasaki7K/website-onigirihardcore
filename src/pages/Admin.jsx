import React, { useEffect } from 'react'



const admin = () => {
    useEffect(() => {
        function redirect() {
            location.href = 'https://onigirihardcore.sanity.studio/'
        }
    
        redirect()
    }, [])
  return (
    <>

    </>
  )
}

export default admin
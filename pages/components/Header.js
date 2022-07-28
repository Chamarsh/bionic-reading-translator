import React, { useEffect, useState } from 'react'
import getTranslation from '../api/fetch'
import createMarkup from '../utils/headerTitle'
const Header = () => {
    const [header, setHeader] = useState('')

   useEffect(() => {
    const fetchData = async () => {
        const data = await getTranslation("Bionic Translator")
        setHeader(data)
        
    }

    fetchData()
   },[])


  return (
    <div className='flex flex-end w-full h-32 mb-1/2 rounded-3x shadow-xl'>
        <div className='flex flex-wrap ml-10 mt-10 mb-8' >
            <header className="font-heading text-5xl" dangerouslySetInnerHTML={createMarkup()}></header>
        </div>
        <div className='absolute right-0 mr-10 mt-10 mb-8'>
            <ul>
                <li>About</li>
                <li>Articles</li>
                <
            </ul>
        </div>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import getTranslation from '../api/fetch'
import createMarkup from '../utils/headerTitle'
const Header = () => {
  return (
    <div className='flex flex-end w-full h-32 mb-1/2 rounded-3x shadow-xl'>
        <div className='flex flex-wrap ml-10 mt-10 mb-8' >
            <header className="font-heading text-5xl" dangerouslySetInnerHTML={createMarkup()}></header>
        </div>
        <div className='absolute right-20 mr-0 mt-14 mb-8'>
            <div className=''>
                <ul className='mr-10'>
                    <li className='inline mr-7'>About</li>
                    <li className='inline mr-7'>Articles</li>
                    <li className='inline'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
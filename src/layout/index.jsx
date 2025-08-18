import React from 'react'
// import logo from ''

const AuthLayouts = ({ children }) => {
  return (
    <>
      <div className='mt-0'>
        <div className='flex justify-start align-top p-3 border-b-[1px] border-slate-900 shadow-md shadow-slate-600'  >
          {/* <img src={logo} alt="logo" width="40" height="20" /> */}
          <h1 className='ext-2xl font-cursive text-center'>Anwesha</h1>
        </div>
      </div>
      {children}
    </>


  )
}

export default AuthLayouts

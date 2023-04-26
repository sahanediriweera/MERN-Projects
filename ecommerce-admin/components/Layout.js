import Nav from '@/components/Nav';
import { signIn, useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {

  const{data:session} = useSession();

  if(!session){
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button className='bg-white p-2 rounded-lg px-4 text-black' onClick={()=>signIn('google')}>
            Login with Google
          </button>
        </div>
      </div>
    )
  }

  return(
    <div>
      <div className='bg-blue-900 flex'>
        <Nav/>
        <div className='bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2 text-black'>
          {children}
        </div>
      </div>
    </div>
  )
}

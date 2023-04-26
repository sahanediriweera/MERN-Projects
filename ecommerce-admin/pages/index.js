
import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const{data:session} = useSession();

  if(!session){
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button className='bg-white p-2 rounded-lg px-4 text-black'>
            Login with Google
          </button>
        </div>
      </div>
    )
  }
}

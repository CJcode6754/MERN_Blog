import { assets } from '../assets/assets';
import { LuArrowRight } from "react-icons/lu";
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const {navigate, token} = useAppContext()
  return (
    <div className='flex items-center justify-between py-1 mx-4 sm:mx-20 xl:mx-32'>
        <div className='flex items-center gap-1'>
          <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-16 cursor-pointer sm:w-20' />
          <h2 className='text-xl font-medium text-blue-500'>Blog</h2>
        </div>
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 px-4 py-2 text-white bg-blue-500 border-0 rounded-lg cursor-pointer hover:bg-blue-700 hover:scale-105'>{token ? 'Dashboard' : 'Login'}
            <LuArrowRight />
        </button>
    </div>
  )
}

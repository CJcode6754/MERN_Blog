import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom';
import { LuArrowRight } from "react-icons/lu";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between py-1 mx-4 sm:mx-20 xl:mx-32'>
        <div className='flex items-center gap-1'>
          <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-16 cursor-pointer sm:w-20' />
          <h2 className='text-xl font-medium text-amber-500'>Blog</h2>
        </div>
        <button onClick={()=>navigate('/login')} className='flex items-center gap-2 px-4 py-2 text-white border-0 rounded-lg cursor-pointer bg-amber-600 hover:bg-amber-700'>Login
            <LuArrowRight />
        </button>
    </div>
  )
}

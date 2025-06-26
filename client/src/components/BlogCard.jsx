import { useNavigate } from 'react-router-dom'
export default function BlogCard({blog}) {
    const {title, description, category, image, id} = blog

    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blog/${id}`)} className='w-full overflow-hidden duration-300 rounded-lg shadow cursor-pointer hover:scale-102 hover:shadow-blue-400'>
        <img src={image} alt="" className='object-cover w-full h-40' />
        <span className='inline-block px-3 py-1 mt-4 ml-5 text-xs text-blue-700 rounded-full bg-blue-500/20'>{category}</span>
        <div className='p-5'>
            <h4 className='mb-2 font-medium text-gray-900'>{title}</h4>
            <p className='mb-3 text-xs text-gray-600'>{description.slice(0, 80)}</p>
        </div>
    </div>
  )
}

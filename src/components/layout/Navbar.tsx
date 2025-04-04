import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className='flex items-center justify-between px-6 py-4 bg-grey-100 shadow'>
            <div className='text-gray-700 hover:text-blue-500'>
                <Link to="/">Home</Link>
            </div>
            <div>
                <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>Login</button>
            </div>
        </header>
    )
}
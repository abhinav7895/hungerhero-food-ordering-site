import { Link } from 'react-router-dom'
import { LinkType } from '../../types'
import { useSelector } from 'react-redux'
const Navlink = ({ onClose, pathname, Icon, path, text }: LinkType) => {
    const { items } = useSelector((store) => store.cart);
    return (
        <li >
            <Link onClick={() => { onClose() }} className={`flex-center  gap-1 text-base font-semibold delay-100 transition-all ${pathname === path ? "text-[#d74112] hover:text-orange-800 w-full" : "text-gray-700 hover:text-gray-500"}`} to={path}> <Icon className="text-xl">
                <span></span></Icon>{text}
            </Link>
        </li>
    )
}

export default Navlink
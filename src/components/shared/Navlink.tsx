import { Link } from 'react-router-dom'
import { LinkType } from '../../types'
const Navlink = ({ pathname, Icon, path, text }: LinkType) => {
    return (
        <li><Link className={`flex-center  gap-2 text-base font-semibold delay-100 transition-all ${pathname === path ? "text-[#d74112] hover:text-orange-800" : "text-gray-700 hover:text-gray-500"}`} to={path}> <Icon className="text-xl" />{text}</Link></li>
    )
}

export default Navlink
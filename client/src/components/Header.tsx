
// interface HeaderProps {
//   handleThemeToggle: Function,
//   isChecked: Boolean
// }
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const navlinks = [
        {
            name: 'Home',
            url: '/',
            icon: <IoHomeOutline />
        },
        {
            name: 'About',
            url: '/about',
            icon: <IoBookOutline />
        },
        {
            name: 'Services',
            url: '/services',
            icon: <FaMusic />
        },
        {
            name: 'Contact',
            url: '/contact',
            icon: <RiContactsLine />
        },
        
    ]
  return (
    <header className='font-comfortaa flex justify-between items-center w-full p-8 fixed z-10 bg-transparent text-white'>
      <div className="ml-2">
        <h2 className="lg:text-2xl text-md md:text-xl font-bold">Montayyne Music</h2>
      </div>
      <div className="max-lg:hidden flex cursor-pointer">
        {navlinks.map(link => (
            <p onClick={()=>navigate(`${link.url}`)} key={link.url} className="mr-10 uppercase">{link.name}</p>
        ))}
      </div>
      <div className="lg:hidden">
      <Menu colorScheme="red">
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<RxHamburgerMenu color="white"/>}
          variant='ghost'
          colorScheme="red.200"
        />
        <MenuList color={'#010101'}>
          {navlinks.map(link => (
              <MenuItem key={link.url}>
                <p onClick={() => navigate(`${link.url}`)} className="flex items-center">
                  {link.icon}&nbsp;&nbsp;{link.name}
                </p>
              </MenuItem>
          ))}
        </MenuList>
      </Menu>
      </div>
    </header>
  )
}

export default Header

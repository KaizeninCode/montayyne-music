
// interface HeaderProps {
//   handleThemeToggle: Function,
//   isChecked: Boolean
// }
import { IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";

const Header = () => {
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
    <header className='font-comfortaa flex justify-between items-center w-full py-4 px-4 fixed z-10 bg-transparent text-white'>
      <div className="ml-2">
        <h2 className="lg:text-2xl text-md md:text-xl font-bold">Montayyne Music</h2>
      </div>
      <div className="max-lg:hidden">
        {navlinks.map(link => (
            <a href={link.url} key={link.url} className="mr-10">{link.name}</a>
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
                <Link href={link.url} className="flex items-center">
                  {link.icon}&nbsp;&nbsp;{link.name}
                </Link>
              </MenuItem>
          ))}
        </MenuList>
      </Menu>
      </div>
      
    </header>
  )
}

export default Header

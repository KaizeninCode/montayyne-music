
// interface HeaderProps {
//   handleThemeToggle: Function,
//   isChecked: Boolean
// }

const Header = () => {
    const navlinks = [
        {
            name: 'Home',
            url: '#home',
        },
        {
            name: 'About',
            url: '#about',
        },
        {
            name: 'Services',
            url: '#services',
        },
        {
            name: 'Contact',
            url: '#contact',
        },
        
    ]
  return (
    <header className='font-comfortaa flex justify-between items-center w-full py-4 mx-8 fixed z-10 bg-transparent text-white'>
      <div>
        <h2 className="text-2xl font-bold">Montayyne Music</h2>
      </div>
      <div>
        {navlinks.map(link => (
            <a href={link.url} key={link.url} className="mr-10">{link.name}</a>
        ))}
      </div>
      
    </header>
  )
}

export default Header

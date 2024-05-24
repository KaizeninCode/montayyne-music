import Toggle from "./Toggle";

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
            name: 'Portfolio',
            url: '#portfolio',
        },
        {
            name: 'Contact',
            url: '#contact',
        },
        
    ]
  return (
    <header className='font-comfortaa flex justify-between items-center w-full p-4 fixed'>
      <div>
        <h2 className="text-2xl font-bold">Montayyne Music</h2>
      </div>
      <div>
        {navlinks.map(link => (
            <a href={link.url} key={link.url} className="mr-10 hover:bg-black hover:text-red-200 p-2 transition ease-in-out delay-100 rounded-md">{link.name}</a>
        ))}
      </div>
      <div className="flex items-center">
        <Toggle/>
      </div>
    </header>
  )
}

export default Header

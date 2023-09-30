import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg"

const Navbar = ({ isDarkMode, toggleMode }) => {

    const [toggle, setToggle] = useState(false);


    const navLinks = [
        {
            id: 1,
            title: "about",
        },
        {
            id: 2,
            title: "skills",
        },
        {
            id: 3,
            title: "projects",
        },
        {
            id: 4,
            title: "contact"
        }
    ]

    return (
        <div className=''>
            <nav className='p-7'>
                <div className="sm:flex hidden justify-between items-center drop-shadow-lg">
                    <div className="text-2xl font-bold dark:text-white">
                        {`<s/c>`}
                    </div>
                    <ul className='flex gap-20 items-center'>
                        {navLinks.map((navLink) => (
                            <a key={navLink.id} className='uppercase tracking-widest font-medium hover:text-[#328ba6] dark:text-white dark:hover:text-[#328ba6] transition-all duration-200' href={`#${navLink.title} `}>
                                {navLink.title}
                            </a>
                        ))}
                        <div>
                            <label id="switch">
                                <input type="checkbox" onClick={toggleMode} />
                                <span id="slider"></span>
                            </label>
                        </div>
                    </ul>
                </div>

                <div className="sm:hidden flex justify-evenly">
                    <span className='dark:bg-white rounded-xl p-1' onClick={() => setToggle((prev) => !prev)}>
                        {toggle ? <CgClose size={50} /> : <GiHamburgerMenu size={50} />}
                    </span>
                    <div className={`${toggle ? 'flex' : 'hidden'} bg-black dark:bg-white dark:text-gray-900 text-white p-5 absolute top-24 z-10 rounded-xl`}>
                        <ul className='flex gap-5 flex-col'>
                            {
                                navLinks.map((nav) => (
                                    <li key={nav.id} className="p-3">
                                        <a href={`#${nav.title}`} className="capitalize">
                                            {nav.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="text-2xl font-bold dark:text-white">
                        {`<s/c>`}
                    </div>
                    <div className="">
                        <label id="switch">
                            <input type="checkbox" onClick={toggleMode} />
                            <span id="slider"></span>
                        </label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

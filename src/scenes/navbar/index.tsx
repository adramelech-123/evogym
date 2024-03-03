// import { useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"



type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex flex-row items-center justify-between"
    

  return (
    <nav>
        {/* Desktop */}
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6 gap-8`}>
                {/* Left Main */}
                <img alt="logo" src={Logo}/>

                {/* Right Main */}
                <div className={`${flexBetween} w-full`}>
                    {/* Inner-Left */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>

                    {/* Inner-Right */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a Member</button>
                    </div>
                </div>
            </div>
            
        </div>
    </nav>
  )
}
export default Navbar

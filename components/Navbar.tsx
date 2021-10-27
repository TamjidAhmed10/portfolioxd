import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { useScreen } from 'usehooks-ts'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const screen: Screen | undefined | Number = useScreen();
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </button>
                  </div>
                  
          <Transition
            show={isOpen}
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div
              className={
                "lg:flex flex-grow items-center " +
                (isOpen ? " flex" : " hidden")
              }
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Share</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Tweet</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Pin</span>
                  </a>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

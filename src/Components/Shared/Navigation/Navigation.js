import { Fragment, React } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navigation = () => {
  return (
    <div>
      {/* bg-[#ececec] */}
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between sm:h-24 md:h-44">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block h-6 w-6 text-[#b70038]"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block h-6 w-6 text-[#b70038]"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="mx-auto">
                  <h1 className="text-3xl md:text-5xl md:pb-5 py-3 text-center font-light text-[#b70038] tracking-wide">
                    Shubolikhe
                  </h1>
                  <div className="hidden sm:block sm:ml-6 md:ml-0">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          style={({ isActive }) => {
                            return {
                              display: "block",
                              color: isActive ? "#b70038" : "",
                            };
                          }}
                          className={classNames(
                            item.current
                              ? " text-[#222] uppercase"
                              : "  hover:text-[#b70038] uppercase",
                            "px-3 py-2 rounded-md text-md font-medium uppercase"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        color: isActive ? "#b70038" : "",
                      };
                    }}
                    className={classNames(
                      item.current
                        ? "text-[#222]"
                        : "hover:text-[#b70038] uppercase",
                      "block px-3 py-2 rounded-md text-base font-medium uppercase"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navigation;

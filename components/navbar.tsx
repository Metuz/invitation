import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#F2F5EA] border-1 border-b-[#2C363F] text-[#2C363F]">
      <div className="max-w-screen-xl flex flex-wrap item-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-3" href="/">
          Logo
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm rounded-lg cursor-pointer border-1 border-b-[#2C363F]"
          >
            Cotizar
          </button>
        </div>
        <div
          id="navbar-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link className="block py-2 px-3 md:p-0" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-2 px-3 md:p-0" href="/">
                Producto
              </Link>
            </li>
            <li>
              <Link className="block py-2 px-3 md:p-0" href="/">
                Galeria
              </Link>
            </li>
            <li>
              <Link className="block py-2 px-3 md:p-0" href="/">
                Planes
              </Link>
            </li>
            <li>
              <Link className="block py-2 px-3 md:p-0" href="/">
                Testimonios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default function NavBar() {
  return (
    <div class="fixed z-50 w-full md:px-16" >
    <nav class="flex w-full items-center justify-between flex-wrap bg-gray-50 p-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-normal text-xl tracking-tight"><span class="font-bold">EML</span>Tübingen</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white" id="navbar-btn">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full md:hidden flex-grow lg:flex lg:items-center lg:w-auto " id="navbar">
        <div class="text-sm lg:flex-grow lg:text-right">
          <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-teal-100 hover:text-purple-500 mr-4 text-md">
            Team
          </a>
          <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-teal-100 hover:text-purple-500 mr-4 text-md">
            Publications
          </a>
          <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-teal-100 hover:text-purple-500 mr-4 text-md">
            Teaching
          </a>
          <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-purple-100 hover:text-purple-500 mr-4 text-md">
            Contact
          </a>
        </div>
      </div>
    </nav></div>
  )
}
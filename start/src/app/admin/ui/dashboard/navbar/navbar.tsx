import Link from "next/link";
// import { useRouter } from "@clerk/nextjs";

const Navbar = () => {

    // const router = useRouter();
    // const { pathname } = router;
    // const active = 'bg-green text-white transition hover:text-gray-500/75'
    // const inactive = 'text-white transition hover:text-gray-500/75'

        return (
            <div>
                <header className="bg-black sticky top-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-purple-700" href="#">
              <span className="sr-only">Home</span>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            </a>
          </div>
    
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                {/* <Link href={`/admin/dashboard`}>
                    <li className={location.pathname === `/dashboard` ? active : inactive}>Dashboard</li>
                </Link> */}
                <Link href={`/admin/dashboard`}>
                    <li className="text-purple-400 transition hover:text-gray-500/75">Dashboard</li>
                </Link>
                <Link href={`/admin/dashboard/products`}>
                    <li className="text-purple-400 transition hover:text-gray-500/75">Products</li>
                </Link> 
                <Link href={`/admin/dashboard/products`}>
                    <li className="text-purple-400 transition hover:text-gray-500/75">Categories</li>
                </Link> 
                <Link href={`/admin/dashboard/products`}>
                    <li className="text-purple-400 transition hover:text-gray-500/75">Orders</li>
                </Link> 
           
              </ul>
            </nav>
    
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
            
              </div>
    
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
            </div>
        );
    
};  

export default Navbar
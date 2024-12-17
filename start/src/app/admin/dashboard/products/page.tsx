import { Button } from "@nextui-org/button";
import Link from "next/link";

const ProductsPage = () => {
    return <>
             <header>
        <div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">All Products</h1>

        <p className="mt-1.5 text-sm text-white">
          Lets Create a New Product
        </p>
      </div>

      <div className="flex items-center gap-4">
       <div>
       <div>
            <Link href="/admin/dashboard">
                <Button color="secondary" variant="shadow" className="mt-6" size="lg" >Add Products</Button>   
            </Link>
        </div>
       </div>
      </div>
    </div>
  </div>

        
        </div>
</header>
<hr className="my-2 h-px border-0 bg-purple-600"/>

<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    Products will displayed here
</div>

        
</>
}   

export default ProductsPage
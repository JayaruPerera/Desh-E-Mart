import Product from "@/components/Product";




function NewProduct() {
    return ( 
        <>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Lets Create a New Product</h1>

        <p className="mt-1.5 text-sm text-white">
          Add necessary details to create a product
        </p>
      </div>

      <div className="flex items-center gap-4">
       <div>
       
       </div>
      </div>
    </div>
  </div> 

  <hr className="my-2 h-px border-0 bg-purple-600"/>
        <div className="my-10">
            <Product />
        </div>
        </>



    );
}

export default NewProduct;
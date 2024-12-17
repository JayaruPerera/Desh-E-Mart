import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Product() {
    return (
        <>
        <div className="lg:mx-auto max-w-screen-lg sm:mx-10 md:mx-16">
            <div className="my-4">
            <div>
                <label
                    htmlFor="example1"
                    className="mb-1 block text-lg font-medium text-purple-300"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="example1"
                    className="bg-white text-gray-800 border p-3 block w-full rounded-md border-purple-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-black disabled:text-black"
                    placeholder="Product Title"
                />
                </div>
            </div>

            <div className="my-4">
            <div>
                <label
                    htmlFor="example1"
                    className="py-2 mb-1 block text-lg font-medium text-purple-300"
                >
                    Select Category
                </label>
                <select
                    className="bg-white text-gray-800 border p-3 block w-full rounded-md border-purple-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-black disabled:text-black"
                >
                    <option value="">Mobile Phone</option>
                    <option value="">Laptop</option>
                    <option value="">CCTV</option>
                    <option value="">Accessories</option>
                </select>
                </div>
            </div>

            <div className="my-4">
                <div className=" max-auto">
                    <label
                            htmlFor="example1"
                            className="py-2 mb-1 block text-lg font-medium text-purple-300"
                        >
                            Product Images
                        </label>

                {/* File upload area */}
                    <label
                        htmlFor="example5"
                        className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-purple-300 p-6 transition-all hover:border-primary-300"
                    >
                        <div className="space-y-1 text-center">
                        {/* Upload Icon */}
                            <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6 text-gray-500"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                                </svg>
                            </div>

                            {/* Upload Instructions */}
                            <div className="text-gray-600">
                                <a
                                href="#"
                                className="font-medium text-primary-500 hover:text-primary-700"
                                >
                                Click to upload
                                </a>{" "}
                                or drag and drop
                            </div>

                            {/* File format instructions */}
                            <p className="text-sm text-gray-500">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                            </div>

                            {/* Hidden file input */}
                            <input id="example5" type="file" className="sr-only" />
                            </label>
                        </div>
                    </div>

            <div className="mx-auto my-4">
            <div>
                <label
                    htmlFor="example1"
                    className=" py-2 mb-1 block text-lg font-medium text-purple-300"
                >
                    Description
                </label>
                <textarea
                    id="example1"
                    rows={5}
                    className="bg-white text-gray-800 border p-3 block w-full rounded-md border-purple-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-black disabled:text-black"
                    placeholder="Add a description of the product"
                />
                </div>
            </div>
            <div className="mx-auto my-4">
            <div>
                <label
                    htmlFor="example1"
                    className="py-2 mb-1 block text-lg font-medium text-purple-300"
                >
                    Price
                </label>
                <input
                    type="number"
                    id="example1"
                    className="bg-white text-gray-800 border p-3 block w-full rounded-md border-purple-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-black disabled:text-black"
                    placeholder="Product Price"
                />
                </div>
            </div>

            <div className="mx-auto my-4">
            <Link href="/admin/dashboard">
                <Button color="secondary" variant="shadow" className="mt-6" size="lg">Save Product
                    <input id="fileInput" type="file" className="hidden" accept="image/*" multiple />
                </Button>
                </Link>
            
        </div>
        </div>
        </>
    );
}
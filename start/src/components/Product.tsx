'use client';
import { Button } from "@nextui-org/button";
import Link from "next/link";
import {handleFormSubmit} from '../action/action'       //Handles form submission logic.
import React, { FormEvent, useEffect, useState } from "react";       // FormEvent: Type for form events (TypeScript).
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/navigation";       //For navigation (redirecting after submission).
import { Product as ProductType } from '@/types/product';

interface ProductProps {
    mode: 'create' | 'edit';
    initialData?: ProductType;
  }

  export default function Product({ mode, initialData }: ProductProps) {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false)    //Indicates if an image upload is in progress.
    const [fileName, setFileName] = useState(initialData?.image || '');        //Stores the name of the uploaded file.

    const [productData, setProductData] = useState({           //Holds the product details entered by the user.
        title: initialData?.title || '',
        category: initialData?.category || 'Mobile Phone',
        // Add null check and type handling for price
        price: initialData?.price ? String(initialData.price) : '',
        image: initialData?.image || '',
        description: initialData?.description || ''
      });

      //Handling Input Changes
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {   //Handles input changes.
        const { name, value } = e.target;  //Extracts the name and value of the input field.
        setProductData((prev)=>({...prev, [name]:value}))  //Updates the productData state with the new value.
      };


      //Handling File Upload
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {   //Handles image file upload.
        if (!e.target.files || e.target.files.length === 0) {   //Checks if a image file has been selected.
          alert('No file selected.');        
          return;
        }
      
        const file = e.target.files[0];   //Extracts the selected image file.
        setIsUploading(true);               //Sets isUploading to true to indicate that an upload is in progress.
      
        try {                                   //Attempts to upload the image file.  
          const formData = new FormData();      
          formData.append('my-file', file);     //Appends the image file to the FormData object.
      
          const result = await handleFormSubmit(productData, formData);
            if (result?.status === 'success') {
                setFileName(result.fileName || '');
                setProductData({ ...productData, image: result?.path || '' });
            } else {
                alert('Error uploading image: ' + (result?.message || 'Unknown error'));
            }
        } catch (error: unknown) {
            console.error('Error uploading image:', error);
            alert('Error uploading image. Please try again.');
        } finally {
            setIsUploading(false);
        }
      };
      
      
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Submitting product:", productData); 

//     const formData = new FormData();
//     formData.append('name', productData.title);
//     formData.append('category', productData.category);
//     formData.append('price', productData.price);
//     formData.append('description', productData.description);
  
//     if (productData.image) {
//       formData.append('image', productData.image);
//     } else {
//       alert('Please upload an image');
//       return;
//     }

//     console.log("1", formData)

//     for (let pair of formData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }

    
//   };

// const handleSubmit = async () => {
//     // e.preventDefault();

    

//     console.log("Submitting product:", productData); 

//     const formData = new FormData();
//     formData.append('title', productData.title);
//     formData.append('category', productData.category);
//     formData.append('price', productData.price);
//     formData.append('description', productData.description);
  
//     if (productData.image) {
//       formData.append('image', productData.image);
//     } else {
//       alert('Please upload an image');
//       return;
//     }

//     console.log("1", formData)

//     // Convert the FormData entries to an array and iterate
//       const formDataEntries = Array.from(formData.entries());
//         for (let pair of formDataEntries) {
//             console.log(pair[0] + ': ' + pair[1]);
//         }
//         try {
//             const response = await fetch('/api/product', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 alert('Product saved successfully!');
//                 router.push('/admin/dashboard'); // Navigate to dashboard after successful submission

//                 setProductData({
//                     title: '',
//                     category: '',
//                     price: '',
//                     image: '',
//                     description: '',
//                 });

//             } else {
//                 alert('Error saving product: ' + (result.message || 'Unknown error'));
//             }
//         } catch (error) {
//             console.error('Error submitting product:', error);
//             alert('Error submitting product. Please try again.');
//         }
    
//   };

//Handling Form Submission
const handleSubmit = async (e:FormEvent ) => {    
    e.preventDefault();   //Prevents the default form submission behavior.

    // console.log("Submitting product:", productData); 

    // Ensure productData is properly structured
    if (!productData.title || !productData.category || !productData.price || !productData.description) {      //Checks if all fields are filled.
        alert('All fields are required!');
        return;
    }
 
    // if (!productData.image) {                     //Checks if an image has been uploaded.
    //     alert('Please upload an image.');
    //     return;
    // }

    const formData = new FormData();                     //Creates a new FormData object
    formData.append('title', productData.title);            //Appends the product details to the FormData object.
    formData.append('category', productData.category);     
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    // formData.append('image', productData.image);

    if (productData.image) {
        formData.append('image', productData.image);
    }

    console.log("formData", formData)

    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ': ' + pair[1]);
    // }
    // for (const [key, value] of Array.from(formData.entries())) {        //Iterates over the FormData entries.
    //     console.log(`${key}: ${value}`);           //Logs the key-value pairs.
    // } 

//    http://localhost:3000/api/product       https://desh-e-mart.vercel.app/api/product
    try {
        const url = mode === 'edit' 
          ? `https://desh-e-mart.vercel.app/api/product?id=${initialData?._id}`
          : 'https://desh-e-mart.vercel.app/api/product  ';
  
        const method = mode === 'edit' ? 'PUT' : 'POST';
  
        const res = await fetch(url, {
          method,
          body: formData,
        });
  
        const data = await res.json();
        if (res.ok) {
          alert(`Product ${mode === 'edit' ? 'updated' : 'added'} successfully!`);
          router.push('/admin/dashboard/products');
        } else {
          console.error(`Error ${mode === 'edit' ? 'updating' : 'adding'} product:`, data.error);
          alert(`Error ${mode === 'edit' ? 'updating' : 'adding'} product: ` + data.error);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
        alert(`An error occurred while ${mode === 'edit' ? 'updating' : 'adding'} the product.`);
      }
  };

// Add useEffect to update form when initialData changes
useEffect(() => {
    if (mode === 'edit' && initialData) {
        setProductData({
            title: initialData.title || '',
            category: initialData.category || 'Mobile Phone',
            // Safe conversion of price
            price: initialData.price ? String(initialData.price) : '',
            image: initialData.image || '',
            description: initialData.description || ''
        });
        setFileName(initialData.image || '');
    }
}, [initialData, mode]);


    return (
        <>
        {/* Input fields for product details. */}
        <div className="lg:mx-auto max-w-screen-lg sm:mx-10 md:mx-16">
        <form onSubmit={handleSubmit}>
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
                    name="title"
                    value={productData.title}
                    onChange={handleChange}
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
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                >
                    <option value="Mobile Phone">Mobile Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="CCTV">CCTV</option>
                    <option value="Accessories">Accessories</option>
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
                                {!isUploading && <svg
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
                                </svg>}

                                {isUploading && (
                                    <Oval
                                      height={30}
                                      width={30}
                                      color="#4fa94d"
                                      wrapperStyle={{}}
                                      wrapperClass="loader"
                                      visible={true}
                                      ariaLabel="oval-loading"
                                      secondaryColor="#4fa94d"
                                      strokeWidth={2}
                                      strokeWidthSecondary={2}
                                    />
                                  )}
                            </div>

                            {fileName && fileName.length > 0 &&(
                                <p>{fileName}</p>
                            )}
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
                            <input 
                                id="example5" 
                                type="file" 
                                name="image" 
                                className="sr-only" 
                                onChange={handleFileChange} accept="image/**"/>
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
                    name="description"
                    value={productData.description}
                    onChange={handleChange}
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
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    className="bg-white text-gray-800 border p-3 block w-full rounded-md border-purple-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-black disabled:text-black"
                    placeholder="Product Price"
                />
                </div>
            </div>

            <div className="mx-auto my-4">
                <Button color="secondary" variant="shadow" className="mt-6" size="lg" type="submit"> Save Product
                </Button>
            
        </div>
        </form>
        </div>
        </>
    );
}



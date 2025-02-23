'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Product from '@/components/Product';
import type { Product as ProductType } from '@/types/product';

export default function EditProduct() {
  const params = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!params?.id) return;
      try {
        console.log("Fetching product with ID:", params.id);     //localhost:3000/api/product 
        const response = await fetch(`http://desh-e-mart.vercel.app/api/product?id=${params?.id}`);
        const data = await response.json();

        // Add console.log to see the API response
        console.log("API Response:", data);

        if (data.success && data.data) {
          // Make sure all required fields are present
          setProduct({
            _id: data.data._id,
            title: data.data.title,
            category: data.data.category,
            price: data.data.price.toString(),
            description: data.data.description,
            image: data.data.image
          });
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params?.id]);

  // Add console.log to see what's being passed to Product component
  console.log("Product data being passed:", product);

  if (loading) return (
      <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl text-white">Loading...</div>
      </div>
  );

  if (!product) return (
      <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl text-white">Product not found</div>
      </div>
  );
  return <Product mode="edit" initialData={product} />;
}
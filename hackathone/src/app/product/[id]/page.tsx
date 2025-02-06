"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { GetProductData } from '../../../../sanity.query';

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPrice?: number;
  description: string;
  imageURLs: string[];
  sizes: string[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [pincode, setPincode] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product data from Sanity
  React.useEffect(() => {
    const fetchProduct = async () => {
      const data = await GetProductData(id as string);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="font-[sans-serif] p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          {/* Product Images */}
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                {product.imageURLs.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Product ${index + 1}`}
                    width={64}
                    height={85}
                    className={`aspect-[64/85] object-cover object-top w-full cursor-pointer border-b-2 ${
                      selectedImage === index ? 'border-black' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              <div className="flex-1">
                <Image
                  src={product.imageURLs[selectedImage]}
                  alt={product.name}
                  width={548}
                  height={712}
                  className="w-full aspect-[548/712] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mt-1 text-sm">{product.description}</p>
              <div className="flex items-center flex-wrap gap-4 mt-4">
                <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">
                  ${product.discountPrice || product.price}
                </h4>
                {product.discountPrice && (
                  <p className="text-gray-500 text-lg">
                    {product.discountPrice && (
                      <p className="text-gray-500 text-lg">
                        <s>${product.price}</s>
                      <span className="text-sm ml-1.5">Tax included</span>
                      </p>
                    )}
                    <span className="text-sm ml-1.5">Tax included</span>
                  </p>
                )}
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Size Selection */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-9 border text-sm flex items-center justify-center shrink-0 ${
                      selectedSize === size
                        ? 'border-blue-600 bg-blue-100'
                        : 'border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold"
              >
                Add to wishlist
              </button>
              <button
                type="button"
                className="px-4 py-3 w-[45%] border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
              >
                Add to cart
              </button>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Delivery Location */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Select Delivery Location</h3>
              <div className="flex items-center gap-2 mt-4 max-w-sm">
                <input
                  type="number"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="bg-gray-100 px-4 py-2.5 text-sm w-full border-0 outline-0"
                />
                <button
                  type="button"
                  className="border-0 outline-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-sm"
                >
                  Apply
                </button>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Product Information Accordion */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Product Information</h3>
              <div className="mt-2">
                {['Product details', 'Vendor details', 'Return policy'].map((section) => (
                  <div key={section} className="hover:bg-gray-100 transition-all">
                    <button
                      type="button"
                      onClick={() => setActiveAccordion(activeAccordion === section ? null : section)}
                      className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                    >
                      <span className="mr-4">{section}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-3 h-3 fill-current ml-auto shrink-0 transition-transform ${
                          activeAccordion === section ? '-rotate-180' : '-rotate-90'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        />
                      </svg>
                    </button>
                    {activeAccordion === section && (
                      <div className="pb-4 px-4">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {product.description} {/* Replace with actual content */}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Customer Reviews */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Customer Reviews</h3>
              <div className="mt-6">
                {product.reviews.map((review, index) => (
                  <div key={index} className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                      <h4 className="text-sm font-bold">{review.user}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-blue-600' : 'fill-[#CED5D8]'}`}
                            viewBox="0 0 14 13"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                        ))}
                        <p className="text-xs text-gray-500 ml-2">{review.date}</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
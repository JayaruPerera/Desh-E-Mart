import Image from "next/image";
import Header from "@/sections/Header";
import S23ultra from "@/assets/images/S23ultra.jpg";

export default function AddDeliveryDetails() {
  return (
    <div className="min-h-screen top-0 bg-[#161A1D]">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div>
        <div className="max-w-7xl mx-auto p-2 ">
          <a href="/products" className=" mt-20 text-xl mb-4 flex">
            Back
          </a>
        </div>
        <main className="container mx-auto grid grid-cols-1  p-4 md:grid-cols-3 gap-8">
          {/* Form Section */}
          <section className="md:col-span-2 bg-[#2E3134] p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add delivery details</h2>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name (e.g., Jayaru Perera)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <input
                  type="text"
                  placeholder="Phone (e.g., 07654367843)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Home (e.g., Pambahinna)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <input
                  type="text"
                  placeholder="City (e.g., Balangoda)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <input
                  type="text"
                  placeholder="Province (e.g., Sabaragamuwa)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <input
                  type="text"
                  placeholder="District (e.g., Rathnapura)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <input
                  type="text"
                  placeholder="Post code (e.g., 60074)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
              </div>
            </div>
            <hr className="my-4 border-gray-700" />
            
            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    className="accent-purple-600 "
                  />
                  Pay by card
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    className="accent-purple-600"
                  />
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* Further Payment Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                Provide further information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Card number (e.g., 123456789087)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <input
                  type="text"
                  placeholder="Cardholder name (e.g., Jayaru Perera)"
                  className="bg-[#2E3134] p-3 rounded w-full border-solid border-1"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM"
                    className="bg-[#2E3134] p-3 rounded w-20 border-solid border-1"
                  />
                  <input
                    type="text"
                    placeholder="YY"
                    className="bg-[#2E3134] p-3 rounded w-20 border-solid border-1"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="bg-[#2E3134] p-3 rounded w-20 border-solid border-1"
                  />
                </div>
              </div>
              <p className="text-green-500 mt-2">
                Your payment information is safe with us
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-red-600 px-6 py-3 rounded">
                Place order
              </button>
              <button className="bg-gray-600 px-6 py-3 rounded">Cancel</button>
            </div>
          </section>

          {/* Summary Section */}
          <aside className="bg-[#2E3134] p-6 rounded shadow flex flex-col">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={S23ultra} // Imported image
                alt="Samsung Galaxy S23 Ultra"
                className="rounded"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-lg font-bold">Samsung Galaxy S23 Ultra</h3>
                <p className="text-sm text-gray-400">
                  Original Samsung Galaxy S23 Ultra
                </p>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <p>Subtotal</p>
              <p>LKR 376900.00</p>
            </div>
            <div className="flex justify-between text-lg font-semibold my-4">
              <p>Delivery fee</p>
              <p>LKR 1200.00</p>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>LKR 368100.00</p>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Upon clicking "Place Order," I confirm I have read and
              acknowledged all terms and policies.
            </p>
          </aside>
        </main>
      </div>
    </div>
  );
}

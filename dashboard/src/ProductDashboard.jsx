import React,{useState} from 'react'
import productsData from "./sample_products.json"
const ProductDashboard = () => {

  const [selectedCategory,setSelectedCategory]=useState("All");
  const categories = ["All",
    ...new Set(productsData.map((product)=>product.category))
  ];

  const filteredProducts = 
    selectedCategory === "All"
    ? productsData
    : productsData.filter(
      (product) => product.category === selectedCategory
    );

  return (
   <>
   <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Product Dashboard
      </h1>

      {/* Filter Section */}
      <div className="flex justify-center mb-6">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {p.name || "Unnamed Product"}
            </h3>
            <p className="text-gray-600 mb-1">
              <strong>Category:</strong> {p.category || "N/A"}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Price:</strong> ₹{p.price ? p.price : "N/A"}
            </p>
            <p className="text-gray-600">
              <strong>Stock:</strong> {p.stock ?? "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default ProductDashboard

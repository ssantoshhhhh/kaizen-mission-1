import React, { useState } from "react";
import productsData from "./sample_products.json";

const ProductDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">
          Product Dashboard
        </h1>

        {/* Filter Section */}
        <div className="flex justify-center mb-10">
          <select
            className="border border-gray-300 bg-white rounded-xl px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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

        {/* Product Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Image (optional)
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )} */}

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                  {p.name || "Unnamed Product"}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium text-gray-700">Category:</span>{" "}
                  {p.category || "N/A"}
                </p>

                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium text-gray-700">Price:</span> ₹
                  {p.price ? p.price : "N/A"}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">Stock:</span>{" "}
                  {p.stock ?? "N/A"}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-sm font-medium transition">
                  View Details
                </button>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;

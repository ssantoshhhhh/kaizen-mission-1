# Product Dashboard Design Notes

## Dashboard Structure
The dashboard is structured with two main components: a centralized filter dropdown and a responsive product grid. The filter component uses a select dropdown positioned at the top center, while the product list is rendered as a CSS Grid layout with individual product cards. Each card contains product information (name, category, price, stock) and a call-to-action button, creating a clean separation of concerns between filtering and display logic.

## Filter Logic Implementation
The filter logic dynamically generates categories by extracting unique values from the product data using `new Set()` and array mapping. The `selectedCategory` state controls which products are displayed, with "All" showing the complete dataset and specific categories filtering products using the `Array.filter()` method. This approach ensures the filter options automatically update when new product categories are added to the JSON data.

## Responsive Design Strategy
Responsiveness was achieved using Tailwind CSS's responsive grid classes: `grid sm:grid-cols-2 lg:grid-cols-3`. This creates a single-column layout on mobile devices, two columns on small screens (640px+), and three columns on large screens (1024px+). The layout also uses flexible spacing with `gap-8` and responsive padding (`py-10 px-4`) to ensure optimal viewing across different screen sizes.

## Missing Data Handling
Missing data is handled gracefully using JavaScript's nullish coalescing and logical OR operators. Product names default to "Unnamed Product", while category, price, and stock fields display "N/A" when undefined. The stock field specifically uses the nullish coalescing operator (`??`) to properly handle `null` values while preserving falsy values like `0`.

## Trade-off: Simplicity vs. Scalability

## Extension Ideas
A valuable extension would be implementing a search bar that filters products by name or description in real-time, combined with pagination to handle larger datasets efficiently. Additionally, adding sorting functionality (by price, stock, or alphabetical order) and the ability to apply multiple filters simultaneously would significantly enhance the user experience and dashboard utility.
import { products } from "../seed-data/data";
import formatMoney from "../lib/formatMoney";
function Products() {
  return (
    <main className="max-w-1000 mx-auto p-6">
      {/* Pagination */}
      <Pagination />
      {/* Products list */}
      <ul className="mt-5 grid gap-16 lg:grid-cols-2">
        {products.map((product) => (
          <li
            key={product.name}
            className=" max-w-lg mx-auto relative shadow-bs border border-gray-200 flex flex-col"
          >
            <p className="absolute -top-1 -right-1 bg-sick text-white text-3xl font-semibold leading-none p-1.5 rotate-3">
              {formatMoney(product.price)}
            </p>
            <img
              className="h-100 w-full object-cover"
              src={product.photo._meta.url}
              alt={product.photo.filename}
            />
            <h2 className="-mt-8 text-center -skew-x-5 -rotate-1">
              <a
                href="#"
                className="px-3 bg-sick text-white text-4.5xl leading-tight text-shadow hover:underline"
              >
                {product.name}
              </a>
            </h2>
            <p className="py-4 px-8 leading-8 flex-1">{product.description}</p>
            <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
              <button className="p-3 hover:bg-gray-100">Edit ✏️</button>
              <button className="p-3 hover:bg-gray-100">Add to cart 🛒</button>
              <button className="p-3 hover:bg-gray-100">Delete 🙅</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <Pagination />
    </main>
  );
}

function Pagination() {
  return (
    <div className="mt-4 text-center lg:text-left">
      <div className="mt-4 inline-flex border rounded-lg divide-x">
        <a
          href="#"
          aria-disabled="true"
          className="px-7 py-4 pointer-events-none text-gray-500"
        >
          &larr; Prev
        </a>
        <p className="px-7 py-4 hidden sm:block">Page 1 of 3</p>
        <p className="px-7 py-4 hidden sm:block">11 items total</p>
        <a
          href="#"
          aria-disabled="true"
          className="px-7 py-4 pointer-events-none text-gray-500"
        >
          Next &rarr;
        </a>
      </div>
    </div>
  );
}

export default Products;

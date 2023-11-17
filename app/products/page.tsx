"use client";

import Table from "@/components/Table";

const ProductsComponent = () => {
  return (
    <div className="text-start mt-5">
      <h1 className="text-2xl text-red-500 phone:bg-black phone:p-1 phone:text-center phone:ml-0 phone:my-[auto] my-[auto] text-center">
        All Products
      </h1>
      <Table />
    </div>
  );
};

export default ProductsComponent;

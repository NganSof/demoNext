"use client";

import { dataProducts } from "../../../mockData/Products";
import { typeProduct } from "@/type/product";

const IdProduct = ({ params }: { params: { idPro: string } }) => {
  console.log("params", params);

  let tagShow: JSX.Element = <></>;
  const handleItem = () => {
    return dataProducts?.forEach((idItem: typeProduct) => {
      tagShow = <div>{idItem.namePro}</div>;
    });
  };
  handleItem();
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="border-2 border-dotted border-while p-2 bg-black w-80 text-center ">
        Id Product {params.idPro}
        <div>{tagShow}</div>
      </div>
    </div>
  );
};

export default IdProduct;

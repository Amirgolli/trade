import Link from "next/link";
import PathSvg from "../../../public/images/mainSvgs/path";

const AddProduct = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[24px]">Product</h1>
        <div className="flex gap-1 items-center">
          <Link href={"/"}>
            <span className="text-[#B0B0B0]">Dashboard</span>
          </Link>
          <PathSvg />
          <span className="text-[#B0B0B0]">Product</span>
          <PathSvg />
          <span className="text-[#B0B0B0]">Sneakers</span>
          <PathSvg />
          <span className="text-[#1A71F6]">Add Product</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5.5">
        <form
          action=""
          className=" dark:bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 mt-5"
        >
          <div className="">
            <h2 className="text-[22px] mb-2">Product Information</h2>
            <p className="text-[#B0B0B0]">
              Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam
              aenean in velit mattis.
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="SKU">SKU</label>
            <input
              type="text"
              placeholder="Input no SKU"
              className="border rounded-lg h-11 p-2 mt-2 outline-0"
              name="SKU"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="Product name">Product name</label>
            <input
              type="text"
              placeholder="Input Product name"
              className="border rounded-lg h-11 p-2 mt-2 outline-0"
              name="Product name"
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <label htmlFor="Size">Size</label>
              <input
                type="text"
                placeholder="Input Price"
                className="border rounded-lg h-11 p-2 mt-2 outline-0 w-[95%]"
                name="Size"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="color">color</label>
              <input
                type="text"
                placeholder="color"
                className="border rounded-lg h-11 p-2 mt-2 outline-0 w-[95%]"
                name="color"
              />
            </div>
          </div>
          <select
            name=""
            className="border rounded-lg h-11 p-2  w-full mt-8 outline-0"
          >
            <option className="text-[#737373]" value="">
              Select product category
            </option>
            <option value="">test</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <div className="flex flex-col mt-4">
            <label htmlFor="Product name">Price</label>
            <input
              type="text"
              placeholder="Input Price"
              className="border rounded-lg h-11 p-2 mt-2 outline-0"
              name="Product name"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="Product name">Quantity</label>
            <input
              type="text"
              placeholder="Input stock"
              className="border rounded-lg h-11 p-2 mt-2 outline-0"
              name="Product name"
            />
          </div>
          <select
            name=""
            className="border rounded-lg h-11 p-2  w-full mt-8 outline-0"
          >
            <label htmlFor="">Status Product</label>
            <option className="text-[#737373]" value="">
              Select status product
            </option>
            <option value="">test</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
        </form>
        <div className="flex flex-col items-end">
          <form
            action=""
            className="dark:bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 mt-5"
          >
            <div className="">
              <h2 className="text-[22px] mb-2">Image Product</h2>
              <p className="text-[#B0B0B0] text-[12px]">
                <span className="text-[#1A71F6] ">Note</span> : Format photos
                SVG, PNG, or JPG (Max size 4mb)
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="flex w-27 h-30 bg-[#EEF7FF] border border-[#1A71F6] rounded-2xl">
                <input
                  type="text"
                  placeholder="Photo 1"
                  className="text-[#737373]"
                />
              </div>
              <div className="flex w-27 h-30 bg-[#EEF7FF] border border-[#1A71F6] rounded-2xl">
                <input
                  type="text"
                  placeholder="Photo 1"
                  className="text-[#737373]"
                />
              </div>
              <div className="flex w-27 h-30 bg-[#EEF7FF] border border-[#1A71F6] rounded-2xl">
                <input
                  type="text"
                  placeholder="Photo 1"
                  className="text-[#737373]"
                />
              </div>
              <div className="flex w-27 h-30 bg-[#EEF7FF] border border-[#1A71F6] rounded-2xl">
                <input
                  type="text"
                  placeholder="Photo 1"
                  className="text-[#737373]"
                />
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="h-12 w-35 bg-[#1A71F6] rounded-lg cursor-pointer left-0 mt-5 "
          >
            Save Product
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

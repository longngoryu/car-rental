"use client";
import Link from "next/link";

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/4 text-black bg-white py-10">
        <h2 className="text-3xl text-center pb-10">Đăng sản phẩm</h2>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-y-3 w-4/5 pb-10">
            <div className="flex">
              <label className="w-5/12" htmlFor="typeCar">
                Loại xe
              </label>
              <input
                className="bg-[#D9D9D9] w-7/12 px-2 py-1"
                id="typeCar"
                type="text"
                placeholder="Xe hơi"
              />
            </div>
            <div className="flex">
              <label className="w-5/12" htmlFor="vehicleSegment">
                Phân khúc
              </label>
              <input
                className="bg-[#D9D9D9] w-7/12 px-2 py-1"
                id="vehicleSegment"
                type="text"
                placeholder="7 chỗ"
              />
            </div>
            <div className="flex">
              <label className="w-5/12" htmlFor="describe">
                Mô tả
              </label>
              <textarea
                className="bg-[#D9D9D9] w-7/12 px-2 py-1"
                id="describe"
                rows="3"
                placeholder="7 chỗ"
              />
            </div>
            <div className="flex">
              <label className="w-5/12" htmlFor="area">
                Khu vực
              </label>
              <input
                className="bg-[#D9D9D9] w-7/12 px-2 py-1"
                id="area"
                type="text"
                placeholder="7 chỗ"
              />
            </div>
            <div className="flex">
              <label className="w-5/12" htmlFor="phone">
                Số điện thoại liên lạc
              </label>
              <input className="bg-[#D9D9D9] w-7/12 px-2 py-1" id="phone" type="text" />
            </div>
            <div className="flex">
              <label className="w-5/12" htmlFor="sourceImage">Hình ảnh</label>
              <input className="invisible cursor-pointer w-7/12 before:block before:px-2 before:py-1 before:visible  before:content-['Upload'] before:bg-[#D9D9D9] " type="file" />
            </div>
          </div>
          <div className="self-end mr-6 flex">
            <Link className="mr-4 py-2 px-4 bg-[#D9D9D9]" href="/">
              Quay lại
            </Link>
            <button className="py-2 px-4 bg-[#D9D9D9]" type="submit">
              Đăng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

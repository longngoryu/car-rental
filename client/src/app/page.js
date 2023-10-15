"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios({
        method: "get",
        baseURL: "http://localhost:8000/api",
        url: "/products/",
        auth: {
          username: "ryu",
          password: "admin",
        },
      });

      setProducts(res.data);
    }

    fetchData();
  }, [products]);

  return (
    <>
      <header className="w-full bg-[#CCC0C0] px-2 py-3 text-black">
        <nav className="flex justify-between items-center">
          <h2 className="mx-1">
            <Link href="/">Car Rental</Link>
          </h2>
          <Link className="bg-[#D9D9D9] px-12 py-1" href="/products/new">
            Đăng
          </Link>
        </nav>
      </header>

      <main className="w-full text-black flex">
        <section className="bg-[#D9D9D9] w-1/6 py-8 px-2 flex flex-col items-center gap-6">
          <nav className="w-3/2">
            <p>Xe máy</p>
            <ul className="ml-4">
              <li>
                <Link href="#">Xe số</Link>
              </li>
              <li>
                <Link href="#">Xe tay ga</Link>
              </li>
              <li>
                <Link href="#">Xe moto</Link>
              </li>
            </ul>
          </nav>
          <nav className="w-3/2">
            <p>Xe hơi</p>
            <ul className="ml-4">
              <li>
                <Link href="#">4 chỗ</Link>
              </li>
              <li>
                <Link href="#">7 chỗ</Link>
              </li>
              <li>
                <Link href="#">Xe tải</Link>
              </li>
            </ul>
          </nav>
          <nav className="w-3/2">
            <p>Xe máy</p>
            <ul className="ml-4">
              <li>
                <Link href="#">Xe số </Link>
              </li>
              <li>
                <Link href="#">Xe tay ga</Link>
              </li>
              <li>
                <Link href="#">Xe moto</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="bg-white w-5/6 py-8">
          <header className="flex justify-between pl-10 pr-4 pb-8">
            <article>
              <p>Sắp xếp:</p>
              <div className="flex gap-3">
                <p>Giá: </p>
                <p>Thời gian đăng: </p>
              </div>
            </article>
            <div className="flex gap-2 items-center">
              <p>Tìm kiếm</p>
              <input className="bg-[#D9D9D9] w-32 px-2 py-1" type="text" />
            </div>
          </header>
          <section className="px-10 flex flex-row justify-between flex-wrap gap-6">
            {products.map((product) => {
              return (
                <Link href="#" key={product.id}>
                  <figure>
                    <Image
                      src={`http://127.0.0.1:8000${product.image}`}
                      alt="car"
                      width="260"
                      height="195"
                      priority="false"
                    />
                    <figcaption>{product.name}</figcaption>
                    <p>{product.describe}</p>
                    <p>Khu vực: {product.area}</p>
                  </figure>
                </Link>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
}

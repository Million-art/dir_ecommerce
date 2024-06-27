"use client";
import { useDispatch, useAppSelector } from "@/redux/Hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/features/CartSlice";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import SignIn from '@/app/sign-in/[[...sign-in]]/page'
export default function CartDetails() {
    const {  isSignedIn } = useUser();

  const router = useRouter();
  const dispatch = useDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const itemsPrice = items.reduce((a, c) => a + c.price * c.quantity, 0);

  const increase = (item: Product) => {
    dispatch(incrementQuantity(item._id));
  };

  const decrease = (item: Product) => {
    dispatch(decrementQuantity(item._id));
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  const handleSignIn = async () => {
    router.push("/sign-in");
  };

  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="py-4 text-2xl md:text-4xl text-purple-700 ">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div>
          Cart is empty.{" "}
          <Link href="/products" className="text-purple-700">
            Go shopping
          </Link>
        </div>
      ) : (
        <div className="gr_id md:gr_id-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <Link
                        href={`/product/${item._id}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.imgSrc}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card bg-base-300">
              <div className="card-body">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      Subtotal ({items.reduce((a, c) => a + c.quantity, 0)}) : $
                      {itemsPrice}
                    </div>
                  </li>
                  <li>
                    {isSignedIn ? (
                      <button
                        onClick={() => router.push("/shipping")}
                        className="btn bg-purple-700 text-white w-full"
                      >
                        Proceed to Checkout
                      </button>
                    ) : (
                      <button
                        onClick={handleSignIn}
                        className="btn bg-purple-700 text-white w-full"
                      >
                        Sign In to Proceed
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

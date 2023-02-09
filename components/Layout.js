import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "@headlessui/react";
import { Store } from "../utils/Store";
import { signOut, useSession } from "next-auth/react";
import { DropdownLink } from "./DropdownLink";
import Cookies from "js-cookie";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callBackUrl: "/login" });
  };

  return (
    <>
      <Head>
        <title>
          {title ? title + " - YehiibhiiStore " : " YehiibhiiStore "}
        </title>
        <meta name="description" content="Ecommerce appSite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex flex-row h-12 px-4 items-center justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">YehiibhiiStore</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Tu Carrito de Compras
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-2 py-1 text-xs font-bold text-black">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>

              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-lime-300">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Perfil
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Historial de compra
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="#0"
                        onClick={logoutClickHandler}
                      >
                        Salir
                      </DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Iniciar Sesiòn</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center shadow-inner">
          <p className="m-auto p-5">Copyright 2023 YehiibhiiStore</p>
        </footer>
      </div>
    </>
  );
}

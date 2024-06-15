"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  const handler = () => {
    router.push("/login");
  };

  return (
    <div>
      <nav className="px-6 py-4 bg-blue-50 flex justify-between items-center">
        <h6 className="font-bold text-3xl">
          <Link href={"/"}>
            Next <span className="text-cyan-500">Hero</span>
          </Link>
        </h6>
        <ul className="flex justify-between items-center space-x-4">
          {links?.map((link) => (
            <Link
              key={link.title}
              className={`${
                pathName === link.path && "text-cyan-500 font-bold"
              }`}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handler}
          className="bg-white text-cyan-500 font-bold p-2 rounded-xl"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
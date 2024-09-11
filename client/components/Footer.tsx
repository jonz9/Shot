import Link from "next/link";
import { IoIosLink } from "react-icons/io";

const name = "Account Name";

const sharing_link = "/";

export default function Footer() {
  return (
    <footer className="flex w-full relative items-center py-12 px-64">
      <div className="container mx-auto">
        <div className="flex md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm">Copyright © 2024. All rights reserved.</p>
          </div>
          <Link
            key={"share-link"}
            href={sharing_link}
            scroll
            className="transition duration-300"
          >
            <div className="relative flex justify-center items-center space-x-2 pb-1 group">
              <h2 className="text-xl font-semibold">Click to Share</h2>
              <IoIosLink size={20} />
              <div className="absolute right-0 bottom-0 w-full h-0.5 bg-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

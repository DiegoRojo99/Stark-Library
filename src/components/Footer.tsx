import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-black text-white p-4 mt-auto flex flex-col">
      <p className="text-center">
        &copy; 2025 Stark Library. All rights reserved.
      </p>
      <Link className="text-center" href={"http://marvel.com"}>
        Data provided by Marvel. &copy; 2025 MARVEL
      </Link>
    </footer>
  )
}
import Image from "next/image";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

const Nav = () => {
  return (
    <div
      className={`navbar ${orbitron.className} w-full flex justify-center items-center py-6 gap-8 bg-neutral text-neutral-content`}
    >
      <Image
        src="/fialta-logo.svg"
        alt="Fialta Logo"
        width={80}
        height={80}
      />
      <a className="font-semibold normal-case text-3xl tracking-widest">
        Fialta
      </a>      
    </div>
  );
};

export default Nav;

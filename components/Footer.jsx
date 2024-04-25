import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer justify-center items-center pt-10 md:pt-8 pb-16 md:pb-10 bg-neutral text-neutral-content text-md text-indigo-to-teal">
      <div className="flex flex-col md:flex-row items-center px-12 xl:px-0 text-center gap-20">
        <p>
          <span className={`${orbitron.className} uppercase tracking-widest`}>Fialta Currency Conversion -</span>{" "}
          {`Copyright © ${currentYear} - All rights reserved`}
        </p>
        <a
          href=""
          target="_blank"
          className="hover:text-teal-200 hover:underline underline-offset-2 cursor-pointer"
        >
          A Project by Ed Sabhin
        </a>
        <a
          href="https://github.com/EdSabhin/fialta-currency-conversion"
          target="_blank"
          className="flex items-center gap-4 hover:text-teal-200 cursor- group"
        >
          <p className="group-hover:underline underline-offset-2 cursor-pointer">
            Code Repository
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a
          href="https://www.frankfurter.app/"
          target="_blank"
          className="hover:text-teal-200 hover:underline underline-offset-2 cursor-pointer"
        >
          Powered by Frankfurter.app
        </a>
      </div>
    </footer>
  );
};

export default Footer;

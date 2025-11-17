import React from "react";
import Logo from "../../Components/Logo";

const Footer = () => {
  return (
    <footer className="footer rounded-xl footer-horizontal footer-center bg-[#0B0B0B]  text-white p-10">
      <aside>
        <Logo />
        <p className="font-bold">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4"></div>
      </nav>
    </footer>
  );
};

export default Footer;

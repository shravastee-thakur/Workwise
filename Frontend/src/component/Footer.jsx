import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 mt-18">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center flex-wrap gap-8 md:gap-16 px-6 py-10">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-[#003a4e]">
            Workwise
          </h1>
        </div>

        <div>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li>About</li>
            <li>Press</li>
            <li>Partner Relations</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li>Jobs</li>
            <li>Job Referrals</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li>Careers</li>
            <li>Report issue</li>
            <li>Support</li>
            <li>Affiliate</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-400 mx-6" />

      <div className="text-center text-sm text-gray-600 py-4">
        © Shravastee Thakur 2025
      </div>
    </div>
  );
};

export default Footer;

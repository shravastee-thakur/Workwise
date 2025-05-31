import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gray-200 py-10 mt-18">
      <div className="flex flex-wrap gap-16">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-[#003a4e]">
            Workwise
          </h1>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>About</li>
            <li>Press</li>
            <li>Partner Relations</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>Jobs</li>
            <li>Job Referrals</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>Careers</li>
            <li>Report issue</li>
            <li>Support</li>
            <li>Affiliate</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

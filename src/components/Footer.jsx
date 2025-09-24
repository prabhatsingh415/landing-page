import React from "react";
import {
  email,
  fb,
  google_mail,
  insta,
  pintrest,
  telegram,
  x,
  youtube,
} from "..";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Desktop Layout: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 hidden md:grid">
          {/* Column 1: Hobbycue */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Hobbycue</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Work with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: How Do I */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">How Do I</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Add a Listing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Claim Listing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Post a Query
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Add a Blog Post
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Other Queries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shop / Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Social Media
            </h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={fb} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={x} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={insta} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={pintrest} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={google_mail} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={youtube} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={telegram} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={email} className="w-[24px] h-[24px]" />
              </a>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Invite Friends
            </h4>
            <div className="w-full max-w-md">
              <form
                className="flex 
                             w-[312px] h-[32px]"
              >
                <input
                  title="search"
                  placeholder="Email ID"
                  type="text"
                  className="
                             bg-[#F8F9FA] 
                             text-left 
                             rounded-tl-[8px] rounded-bl-[8px] 
                             pl-4 
                             outline-none
                             border-2 border-[#EBEDF0]
                           "
                />
                <button
                  type="submit"
                  className="
                             w-[59px] h-[32px] 
                             rounded-tr-[8px] rounded-br-[8px] 
                             bg-[#8064A2] 
                             flex items-center justify-center hover:cursor-pointer
                             text-white
                           "
                >
                  invite
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Stacked Sections */}
        <div className="md:hidden grid grid-cols-1 gap-6 mb-8">
          {/* Mobile Section 1: Hobbycue */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">Hobbycue</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Work with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Section 2: How Do I */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">How Do I</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Add a Listing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Claim Listing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Post a Query
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Add a Blog Post
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Other Queries
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Section 3: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shop / Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Section 4: Social Media & Invite */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Social Media
            </h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={fb} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={x} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={insta} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={pintrest} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={google_mail} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={youtube} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={telegram} className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                <img src={email} className="w-[24px] h-[24px]" />
              </a>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Invite Friends
            </h4>
            <div className="w-full">
              <form
                className="flex 
                             w-[312px] h-[32px]"
              >
                <input
                  title="search"
                  placeholder="Email ID"
                  type="text"
                  className="
                             bg-[#F8F9FA] 
                             text-left 
                             rounded-tl-[8px] rounded-bl-[8px] 
                             pl-4 
                             outline-none
                             border-2 border-[#EBEDF0]
                           "
                />
                <button
                  type="submit"
                  className="
                             w-[59px] h-[32px] 
                             rounded-tr-[8px] rounded-br-[8px] 
                             bg-[#8064A2] 
                             flex items-center justify-center hover:cursor-pointer
                             text-white
                           "
                >
                  invite
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-[#F7F5F9] pt-4 text-center text-xs text-gray-500">
        <p>&copy; Purple Cues Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;

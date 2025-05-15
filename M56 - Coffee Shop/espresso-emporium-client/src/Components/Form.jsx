import React from "react";
import logo from "../assets/images/more/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
const Form = () => {
  return (
    <div className="border p-10">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-16" />
          <h1>Espresso Emporium</h1>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          <div className="text-2xl flex gap-4 mt-4">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl">Get In Touch</h2>
            <div className="mt-4">
              <p className="flex gap-4 items-center">
                <FaPhoneAlt />
                +88 01533 333 333
              </p>
              <p className="flex gap-4 items-center">
                <FaPhoneAlt />
                +88 01533 333 333
              </p>
              <p className="flex gap-4 items-center">
                <FaPhoneAlt />
                +88 01533 333 333
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div>
          <h2 className="text-2xl">Connect with Us</h2>

          <form action="" className="">
            <label className="label">Title</label>
            <input
              type="text"
              className="input"
              placeholder="My awesome page"
            />

            <label className="label">Slug</label>
            <input
              type="text"
              className="input"
              placeholder="my-awesome-page"
            />

            <button className="btn mt-10">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

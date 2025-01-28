import React, { useState, useRef } from "react";
import AvatarSvg from "../assets/avatar1.svg";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//update
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name && !email && !message){
      toast.error('Please enter details')
    }
    else{
      const formData = {
        from_name: name,
        from_email: email,
        message: message,
      };
      
    emailjs 
    .send('service_0a4er1p', 
        'template_m2o5brn',
         formData, {
      publicKey: 'j5qPfcKmnNIQgXMRa',
    })
    .then(
        () => {
            toast.success("Message sent successfully!");
            console.log("done")
            setName(""); // Reset form fields
            setEmail("");
            setMessage("");
          },
          (error) => {
            toast.error(`Message failed to send: ${error.text}`);
          }
    );

    }
    
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 min-h-screen items-center justify-center bg-slate-800 p-6">
      {/* Left Section */}
      <ToastContainer />

      <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center md:items-center  space-x-6">
        {/* Avatar */}
        <img src={AvatarSvg} alt="Riki Banik" className="max-w-md md:h-[400px]" />
        {/* Text Section */}
        <div className="flex flex-col text-left mt-4 scale-125">
          <h2 className="text-2xl font-poppins font-bold mb-2 text-slate-100">
            RIKI BANIK
          </h2>
          <p className="text-slate-200 font-poppins mb-1">
            Email:{" "}
            <a
              href="mailto:rikibanik@icloud.com"
              className="text-slate-200 hover:text-slate-300 no-underline"
            >
              rikibanik@icloud.com
            </a>
          </p>
          <p className="text-slate-200 font-poppins mb-1">
            Phone:{" "}
            <a
              href="tel:+919864129171"
              className="text-slate-200 hover:text-slate-300 no-underline"
            >
              +91 98641 29171
            </a>
          </p>
          <p className="text-slate-200 font-poppins">
            Address: Udalguri, Assam, India
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-6  shadow-md rounded-lg mt-12 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold mb-4 text-white font-poppins">HIRE ME {" "} <i className="fa-regular fa-lightbulb"></i></h2>
        <form
            ref={form}
          className="space-y-4 md:w-3/5 w-[100%]"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium font-poppins text-slate-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:text-white focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium font-poppins text-slate-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:text-white focus:border-blue-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-poppins font-medium text-slate-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

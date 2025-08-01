import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "28cc7c26-5420-408e-be94-73e33f4b68dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-stone-100 ' id='Contact'>
      <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact<span className='underline underline-offset-4
       decoration-1 under font-light'>With Us</span></h2>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make  a move? let's build you future together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-black font-serif pt-3'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>Your Name
            <input className="w-full border border-fuchsia-600 rounded py-3 px-4 mt-2" type='text' name="Name" placeholder='yourname' required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
            <input className="w-full border border-fuchsia-600 rounded py-3 px-4 mt-2" type='email' name="Email" placeholder='yourname' required />
          </div>
        </div >
        <div className=' my-6 text-left'>Message
          <textarea className="w-full border border-fuchsia-600 rounded py-3 px-4 mt-2 resize-null" name="Message" placeholder='Type your message here...' rows="5" required></textarea>
        </div>
        <button className=' bg-fuchsia-950 text-white py-2 px-12 mb-10 rounded'>
            
            {result ? result : "Send Message"}
        </button>
      </form >
    </div >

  )
}

export default Contact
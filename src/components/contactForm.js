import React from "react"
import { useState } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { GiAnchor } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const ContactForm = () =>{

    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contactNo: '',
        subject : '',
      });
      const [statusMessage, setStatusMessage] = useState('');
    
      const handleChange = (e) => {
       
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handlePhoneChange = (value,e) => {
       
        setFormData({ ...formData, contactNo: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
            'service_s95mwah',      //  service ID
          'template_y1hkr1y',      // template ID
          formData,
          'XOOwwPr38WX5u30uR'           // user ID
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Message sent successfully!');
          console.log("formData is", formData);
          setFormData({
            name: '',
            email: '',
            message: '',
            contactNo: '',
            subject : '',
          })
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setStatusMessage('Failed to send message. Please try again.');
          console.log(statusMessage);
        });
        


      };
    

    return (
        <div className="flex flex-col mx-auto w-10/12 gap-y-9">
             {/* top letter heading */}
                <div className="text-center mx-auto">
                    <div className="flex gap-3 text-lg justify-center items-center mb-5">
                        <GiAnchor className="text-green-700 text-4xl"/>
                        <div className="text-2xl text-blue-600">My contact</div> 
                    </div>
                    <p className="text-2xl font-medium -ml-12 md:ml-0">I WANT TO HEAR FROM YOU</p>
                </div>

                <div onSubmit={handleSubmit} className="flex flex-col lg:flex-row mx-auto justify-between min-w-full gap-28">
                    <form  className="w-full lg:w-7/12">
                        <div className="flex flex-col md:flex-row gap-5 mb-5">
                            <div className="w-full md:w-1/2 ">
                                <input
                                    type="text"
                                    required
                                    placeholder="ENTER YOUR NAME"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border px-4 py-4 w-full rounded-lg placeholder-gray-500"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <input
                                    type="email"
                                    required
                                    placeholder="ENTER YOUR EMAIL"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border px-4 py-4 w-full rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mb-5">
                            
                                <PhoneInput
                                    country={'in'} // Default country code (can change to any country)
                                    value={formData.contactNo}
                                    onChange={handlePhoneChange} // Sets the full phone number with country code in state
                                    enableSearch={true} // Adds a search field in the dropdown to find countries
                                    placeholder="ENTER YOUR PHONE NUMBER"
                                    autofocus
                                    inputStyle={{
                                        // width: '88%',          // Makes input full width
                                        // height: '100%',         // Matches height with other inputs
                                        // // padding: '16px',        // Adds padding for consistency with other inputs
                                        // borderRadius: '8px',    // Rounds the corners like other inputs
                                        // borderColor: '#D1D5DB',  // Tailwind's border-gray-300 color
                                        // // margin: 'px',
                                        // color: '#374151',
                                        // border: 'none'

                                        width: '89%',         // Makes input full width
                                        height: '100%',        // Matches height with other inputs
                                        borderRadius: '0.5rem', // Tailwind's 'rounded-lg' equivalent
                                        outline: 'none',       // Removes default outline
                                        padding: '0.5rem 1rem', // Adds padding to match Tailwind's `p-2`
                                        margin: '30px',
                                        border: 'none'
                                    }}
                                    containerStyle={{
                                        width: '100%'           // Ensures container is full width
                                    }}
                                    inputProps={{
                                    name: 'contactNo',
                                    // required: true,
                                    
                                        
                                    }}
                                                                      
                                    // className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-2 "
                                    className="border border-gray-300 focus-within:border-black focus-within:ring-1 placeholder:text-red-400 focus-within:ring-black rounded-lg"   
                                />
                                <div className="w-full md:w-full">
                                <input
                                    type="text"
                                    required
                                    placeholder="SUBJECT"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="border px-4 py-4 w-full rounded-lg"
                                />
                            </div>
                           
                            
                        </div>

                        <div>
                            <textarea
                                required
                                placeholder="TYPE YOUR MESSAGE"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className=" border px-4 py-4 w-full h-32 resize-none rounded-lg "
                            />
                        </div>
                        <button class=" mt-5 text-white  bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-lg px-12 py-5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                                Send Me Message
                        </button>
                    </form>

                    <div className="flex flex-col gap-6 w-full lg:w-5/12 -mr-7">
                        <div className="flex items-center space-x-4">
                            <IoLocationSharp className="text-blue-600 text-2xl bg-blue-200 w-12 h-12 p-1.5 rounded-md"/>
                            <p className="text-left text-sm md:text-base">
                                <span className="font-semibold">Address: <br /></span> Sarita Vihar New Delhi - 110076
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 ">
                            <FaPhoneVolume className="text-blue-600 text-2xl bg-blue-200 w-12 h-12 p-2.5 rounded-md mt-2"/>
                            <p className="text-left text-sm md:text-base  ">
                                <span className="font-semibold">Phone: <br /></span> 7290904789
                            </p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <CgMail className="text-blue-600 text-2xl  bg-blue-200 w-12 h-12 p-1.5 rounded-md mt-2"/>
                            <p className="text-left text-sm md:text-base">
                                <span className="font-semibold">Email: <br /></span> singhsonujh07@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
</div>

    )
}

export default ContactForm
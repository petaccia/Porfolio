import React, { useState, FormEvent } from 'react';
import {Link} from 'react-router-dom';
import contactImage from "../../../public/assets/images/contact.png";

interface ContactFormState {
  firstName: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would handle the submission of the form, for example sending an email
    console.log(formState);
    alert('Form submitted');
  };

  return (
    <div className="contact-page min-h-screen bg-[#000211] flex flex-col items-center ">
      <h1 className="text-3xl text-center text-[#4c49e9] bg-[#000211] font-bold">Contact Me</h1>
      <div className=" mt-10 ">
      <img src={contactImage} alt="Manga Style Professional" className="w-64 rounded-[80px]" />
      </div>
      <form onSubmit={handleSubmit}  className="flex flex-col  justify-beetween  mt-24 ">
        <div className="mt-5 flex justify-between">
          <label htmlFor="firstName" className='text-[#4c49e9]'>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            className='text-white bg-transparent border-[#4c49e9] border-2 rounded-md ml-5'
          />
        </div>
        <div className="mt-5 flex justify-between">
          <label htmlFor="email" className='text-[#4c49e9]'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className='text-white bg-transparent border-[#4c49e9] border-2 rounded-md ml-5'

          />
        </div>
        <div className="mt-5 flex flex-col ">
          <label htmlFor="message" className='text-[#4c49e9]'>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className='text-white bg-transparent border-[#4c49e9] border-2 rounded-md w-[300px] h-[100px] '
          />
        </div>
        <div className="flex justify-end">
        <button type="submit" className="w-[100px] bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-5 rounded-xl">Send</button>
        </div>
      </form>
      <div className="bg-[#000211] mx-5  flex justify-center items-center ">
        <Link
          to="/menu"
          className=" w-full bg-[#000211] text-center py-2 font-bold text-2xl text-[#4c49e9] rounded-[20px] fixed bottom-0"
        >
          Menu
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;

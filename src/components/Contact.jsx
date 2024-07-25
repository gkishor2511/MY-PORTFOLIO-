import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value
    };
    setFormData(newFormData);
    localStorage.setItem('contactFormData', JSON.stringify(newFormData));
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me a message</p>
          <p className='text-gray-400 py-4'>Email-gkishor2511@gmail.com</p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type="text"
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name="message"
          rows="10"
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'
        >
          message to me        </button>
      </form>
    </div>
  );
};

export default Contact;



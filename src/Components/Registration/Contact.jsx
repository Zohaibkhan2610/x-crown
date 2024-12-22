import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import FormImg from './Image.png'; // Ensure the path is correct
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    device: '',
    onlyEnglish: false,
    american: false,
    european: false,
    arabian: false,
    asian: false,
    otherChannels: false,
    message: '', // Add a state for the message area
  });
  const [phone, setPhone] = useState('');


  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,phoneNumber: phone,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, email, phoneNumber, device, onlyEnglish, american, european, arabian, asian, otherChannels, message
    } = formData;

    let channels = [];
    if (onlyEnglish) channels.push('Only English channels');
    if (american) channels.push('American');
    if (european) channels.push('European');
    if (arabian) channels.push('Arabian');
    if (asian) channels.push('Asian');
    if (otherChannels) channels.push('Other');

    const messageText = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nDevice: ${device}\nChannels: ${channels.join(', ')}\nMessage: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=+923166081865&text=${encodeURIComponent(messageText)}`;
    window.location.href = url;
  };

  return (
    <>
      <div className='bg-gradient-to-tl to-blue-400 from-slate-300 pt-[2%] md:text-left text-center pl-[5%]
       '>
        <h1 className='lg:text-8xl pt-6  text-2xl font-serif font-bold'>Quickly Contact us</h1>
        <p className='md:text-2xl pt-[1%] text-xl font-sans capitalize font-bold'>24/Hours available</p>
      </div>
      <div className='bg-gradient-to-tl to-blue-400 from-slate-300 inline-flex md:flex-row flex-col w-full pt-8'>
        <div className='md:w-[48%]'>
          <img src={FormImg} alt="" />
        </div>


        {/* Form data */}


        
        <div className='md:w-[48%] capitalize px-[3%] mb-8'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2 label-margin-bottom">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2 label-margin-bottom">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2 label-margin-bottom">Whatsapp (Phone Number)</label>
              <PhoneInput
              id="phoneNumber"
                name="phoneNumber"
        defaultCountry="ua"
        onChange={(value) => setPhone(value)}
        required
      />
            </div>
            <div className="mb-4">
              <label htmlFor="device" className="block text-gray-700 font-bold mb-2 label-margin-bottom">Choose the right device:</label>
              <select id="device" name="device" value={formData.device} onChange={handleChange} required className='w-full'>
                <option value="">Select a device</option>
                <option value="amazon-fire-stick">Amazon Fire Stick</option>
                <option value="smart-tv">Smart TV</option>
                <option value="android-box">Android Box</option>
                <option value="apple-device">Apple Device</option>
                <option value="pc">PC (Mac & Windows)</option>
                <option value="kodi-mag-box">KODI and MAG Box</option>
                <option value="phone">Phone</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold label-margin-bottom">Customize Channels:</label>
              <br />
              <div className="flex flex-wrap gap-4">
                <input type="checkbox" id="only-english" name="onlyEnglish" checked={formData.onlyEnglish} onChange={handleChange} />
                <label htmlFor="only-english">Only English channels</label>
                <br />
                <div className="flex gap-[30%]"><input type="checkbox" id="american" name="american" checked={formData.american} onChange={handleChange} />
                <label htmlFor="american">American</label></div>
                <br />
                <div className="flex gap-[30%]"><input type="checkbox" id="european" name="european" checked={formData.european} onChange={handleChange} />
                <label htmlFor="european">European</label></div>
                <br />
                <div className='flex gap-[30%]'><input type="checkbox" id="arabian" name="arabian" checked={formData.arabian} onChange={handleChange} />
                <label htmlFor="arabian">Arabian</label></div>
                <br />
                <div className='flex gap-[30%]'><input type="checkbox" id="asian" name="asian" checked={formData.asian} onChange={handleChange} />
                <label htmlFor="asian">Asian</label></div>
                <br />
                <div className='flex gap-[30%]'><input type="checkbox" id="other-channels" name="otherChannels" checked={formData.otherChannels} onChange={handleChange} />
                <label htmlFor="other-channels">Other</label></div>
                <br />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2 label-margin-bottom">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

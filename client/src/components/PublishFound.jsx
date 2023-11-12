import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { MinusRed, Plus, PlusYellow } from '../assets/icons/IconsSVGConst'
import { LinkIcon } from '../assets/icons/IconsSVGConst'

export const PublishFound = () => {

    // Sending form data
    const [formData, setFormData] = useState({
        type: 'Found',
        category: '',
        country:'',
        city: '',
        date:'',
        image: '',
        description:'',
    });
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
     
      // Get categories data
      const [error, setError] = useState(''); 
      const [categories, setCategoriesData ] = useState([]);
      useEffect (() => {
        axios.get('/api/login')
        .then((response)=>{
            setCategoriesData(response.data);
        })
        .catch((error)=>{
            setError('Can not get data', error);
        })
        },[]);
   
      // Post-Send form data
      const handleSubmit = (e) => {
        e.preventDefault();
        // End point 
        axios.post('/api/login', formData)
        .then((response) => {
        // Navigate
        // window.location.href = '/card/:id';
        })
        .catch((error) => {
          setError('Something went wrong');
        });
    };

  return (
    <>
    <div className='p-12 bg-[#373737] rounded-[1rem] w-[50rem] h-[45rem] ' >
        <form onSubmit={handleSubmit} className="flex flex-col align-start justify-start gap-4 ">
            <span className="absolute w-32 flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 hover:text-[#FBE62E] bg-none border border-2 hover:border-[#FBE62E]  focus:outline-none text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <PlusYellow /> I’VE FOUND
            </span>

            <label className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD]'>Please fill the following information regarding the belonging you found </label>
            
            <label className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Under what category does it fall !</label>

            <select name="" id="" className='w-24'>
                <option value='' >All categories</option>
                {categories.map((item) => (
                    <option key={item.id} value={formData.category}>Animal {/*{categories.category}*/}</option>
                ))}
            </select>

            <label className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Where and when did you find it !</label>
            <label htmlFor="" className='flex flex-row gap-4'>
                <select name="" id="" className='w-24'>
                    <option value="">Country</option>
                    <option value={formData.country}>Jordan</option>
                </select>
                <select name="" id="" className='w-24'>
                    <option value="">City</option>
                    <option value={formData.city}>Amman</option>
                    <option value={formData.city}>Zarqaa</option>
                </select>
                <input type="date" value={formData.date} className='w-32'/>
            </label>

            <label htmlFor="" className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Attach images of the item</label>
            <input type="file"  value={formData.image}/>
            
            {/* max number of letters */}
            <label htmlFor="" className='self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]'>Write notes/ description to others</label>
            <input type="text" value={formData.description} className='h-[7rem]' />
            
            <button type='submit' className=" self-end text-center w-28 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Publish</button>
        </form>
    </div>
    </>
  )
}

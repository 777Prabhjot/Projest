import React, { useState } from 'react'
import { collection, doc, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [tags, setTags] = useState([]);
  const userData = collection(db,'projects')
  const navigate = useNavigate();

  const saveData = async () => {
    await addDoc(userData, {
      title: title,
      description: description,
      githubLink: githubLink,
      projectLink: projectLink,
      tags: tags
    });
    navigate('/viewprojects')
  }

  return (
    <div className='flex flex-col items-center h-[100%] pb-[50px] md:pb-[115px]'>
      <h2 className="font-medium leading-tight text-2xl mt-10 md:mt-[50px] mb-4 text-blue-600">Add your project details 👇</h2>
      <div className='border-b-[3px] border-black mb-10 w-[200px]'></div>
      <div className='flex flex-col md:flex-row justify-start items-start w-[100%]'>
        <div className='flex flex-col items-center md:items-end justify-center w-[100%] md:w-[40%] lg:w-[50%]'>
          <input type="text" placeholder='Project Title' className=' placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setTitle(e.target.value)} ></input>
          <textarea placeholder='Project Description' className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' onChange={(e) => setDescription(e.target.value)} ></textarea>
          <input type="text" placeholder='User Github Link' className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' onChange={(e) => setGithubLink(e.target.value)} ></input>
          <input type="text" placeholder='Project GIthub Link' className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setProjectLink(e.target.value)} ></input>
        </div>
        <div className='md:ml-[20px] w-[90%] md:w-[60%] lg:w-[34%] my-[20px] mx-[20px] '>
          <h4>Select Your Project Tags : </h4>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-4 mt-2'>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Javascript</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Python</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">JAVA</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">PHP</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">HTML</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">React.js</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Vue.js</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Angular.js</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Tailwind.css</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Bootstrap</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">CSS</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">C #</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Frontend</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Backend</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">FullStack</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Kotlin</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">TypeScript</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Rust</label>
            </div>
            <div className="flex items-center justify-center bg-blue-600 px-1 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="javascript" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Swift</label>
            </div>
          </div>
        </div>
      </div>
      <button className="rounded-[5px] text-white font-medium transition ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 px-6 py-2 mt-8" onClick={saveData}>Save Project</button>
    </div>
  )
}

export default AddProject


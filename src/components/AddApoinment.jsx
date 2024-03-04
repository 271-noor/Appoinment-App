import {useState} from 'react'
import {BiCalendarPlus} from 'react-icons/bi'

function AddApoinment() {
    let [toggleForm, setToggleForm] = useState(false)
  return (
    <div>
      <button 
        onClick={() => {
            setToggleForm(!toggleForm)
        }}
       className="bg-purple-500 my-3 text-white px-2 py-3 w-full text-left rounded-t-md"
       >
        <div>
            <BiCalendarPlus className="inline-block align-text-top " />
        </div>
      </button>
      {toggleForm && (
      <div className="border-r-2 border-b-2 border-1-2 border-light-blue-500 rounded-b-md pl-4 pr-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="ownerName"
             className="block text-sm font-medium text-gray-700 sm:mt-px" >
                Owner Name
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                className="mx-auto my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm-max-w-xs sm:text-sm border-gray-700 rounded-md"
                type="text" 
                name="ownerName" 
                id="ownerName"
                 />
                
            </div>
        </div> 
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="petName"
             className="block text-sm font-medium text-gray-700 sm:mt-px" >
                Pet Name
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                className="mx-auto my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm-max-w-xs sm:text-sm border-gray-700 rounded-md"
                type="text" 
                name="petName" 
                id="petName"
                 />
                
            </div>
        </div> 
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="aptDate"
             className="block text-sm font-medium text-gray-700 sm:mt-px" >
                Appoinment Date
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                className="mx-auto my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm-max-w-xs sm:text-sm border-gray-300 rounded-md"
                type="date" 
                name="aptDate" 
                id="aptDate"
                 />
                
            </div>
        </div> 
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="aptTime"
             className="block text-sm font-medium text-gray-700 sm:mt-px" >
                Appoinment Time
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                className="mx-auto my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm-max-w-xs sm:text-sm border-gray-300 rounded-md"
                type="time" 
                name="aptTime" 
                id="aptTime"
                 />
                
            </div>
        </div>
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="message"
             className="block text-sm font-medium text-gray-700 sm:mt-px" >
                Message
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea 
                rows="3"
                className="mx-auto my-0 max-w-lg block w-full shadow-md focus:ring-indigo-600 focus:border-indigo-600 sm-max-w-xs sm:text-sm border-gray-600 rounded-md"
                type="date" 
                name="message" 
                id="message"
                 >
                </textarea>
            </div>
        </div> 
        <div className="pt-5">
            <div>
                <button type="submit"
                 className="ml-3 inline-flex justify-center shadow-lg shadow-purple-500/50 py-2 px-4 border border-transparent text-white bg-purple-500 hover:bg-purple-800 rounded-md ">
                    Submit
                    </button>
            </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default AddApoinment

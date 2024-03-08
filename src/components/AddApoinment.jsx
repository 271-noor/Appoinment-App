import {useState} from 'react'
import {BiCalendarPlus} from 'react-icons/bi'

function AddApoinment({onSendAppoinment, lastId}) {
    const clearData = {
        ownerName: '',
        petName: '',
        aptDate: '',
        aptTime: '',
        message: '',
        }


    let [toggleForm, setToggleForm] = useState(false)
    let [formData, setFormData] = useState(clearData)
    
    function formDataAdd(){

        const appoinmentInfo = {
            id: lastId + 1,
            ownerName: formData.ownerName,
            petName: formData.petName,
            aptDate: formData.aptDate,
            aptTime: formData.aptTime,
            message: formData.message 

        }
        onSendAppoinment(appoinmentInfo)
        setFormData(clearData)
    }
    
    return (
    <div>
      <button 
        onClick={() => {
            setToggleForm(!toggleForm)
        }}
       className=" my-3 text-white px-2 py-3 w-full text-left rounded-t-md
       bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-900 hover:bg-gradient-to-br focus:ring-3
       focus:ring-cyan-800 dark:focus:ring-cyan-800"
       >
        <div>
            <BiCalendarPlus className="inline-block align-text-top " />
        </div>
      </button>
      {toggleForm && (
      <div className="border-r-2 border-b-2 border-1-2 border-light-cyan-500 bg-cyan-500 bg-opacity-20 
      rounded-b-md pl-4 pr-4">
        
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="ownerName"
             className="block text-md font-bold w-full text-white sm:mt-px" >
                    Owner Name
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                onChange = {(event) => {
                    setFormData({...formData, ownerName: event.target.value})
                }}
                className=" px-2 -mx-14 my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500
                 focus:border-indigo-500 sm-max-w-xs sm:text-md font-bold border-gray-700 rounded-md"
                type="text" 
                name="ownerName" 
                id="ownerName"
                value={formData.ownerName}
                 />
                
            </div>

        </div> 
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="petName"
             className="block text-md w-full font-bold text-white sm:mt-px" >
                Pet Name
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                  onChange = {(event) => {
                    setFormData({...formData, petName: event.target.value})
                }}
                className=" px-2 mx-auto my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500
                 focus:border-indigo-500 sm-max-w-xs sm:text-md font-bold border-gray-700 rounded-md"
                type="text" 
                name="petName" 
                id="petName"
                value={formData.petName}
                 />
                
            </div>

        </div> 
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="aptDate"
             className="block text-md font-bold text-white sm:mt-px" >
                Appoinment Date
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange = {(event) => {
                    setFormData({...formData, aptDate: event.target.value})
                }} 
                className="mx-auto px-2 my-0 h-7 max-w-lg block w-full shadow-md focus:ring-blue-500
                focus:border-indigo-500 sm-max-w-xs sm:text-md font-bold border-gray-300 rounded"
                type="date" 
                name="aptDate" 
                id="aptDate"
                value={formData.aptDate}
                 />
                
            </div>
        </div> 
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="aptTime"
             className="block text-md font-bold text-white sm:mt-px" >
                Appoinment Time
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input 
                  onChange = {(event) => {
                    setFormData({...formData, aptTime: event.target.value})
                }}
                className=" px-2 mx-auto my-0 h-7 max-w-lg block w-full shadow-md focus:ring-indigo-500
                 focus:border-indigo-500 sm-max-w-xs sm:text-md font-bold border-gray-300 rounded-md"
                type="time" 
                name="aptTime" 
                id="aptTime"
                value={formData.aptTime}
                 />
                
            </div>
        </div>
        <div classname="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="message"
             className="block text-md font-bold text-white sm:mt-px" >
                Message
                </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea 
                  onChange = {(event) => {
                    setFormData({...formData, message: event.target.value})
                }}
                rows="3"
                className="mx-auto px-2 my-0 max-w-lg block w-full shadow-md focus:ring-indigo-600
                 focus:border-indigo-600 sm-max-w-xs sm:text-md font-bold border-gray-600 rounded-md"
                type="date" 
                name="message" 
                id="message"
                value={formData.message}
                 >
                </textarea>
            </div>
        </div> 
        <div className="pt-5">
            <div>
                <button type="submit"
                 className="ml-3 inline-flex justify-center shadow-lg
                  shadow-cyan-700/50 font-bold py-2 px-4 border border-transparent text-white rounded-lg
                   transition duration-400 ease-in-out bg-cyan-800 hover:bg-cyan-900 transform hover:-translate-y-1 hover:scale-110 "
                   onClick={formDataAdd}
                   >
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

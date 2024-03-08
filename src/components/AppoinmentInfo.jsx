import { BiTrash } from 'react-icons/bi'


function AppoinmentInfo({appoinment, onDeleteAppoinment}) {
  return (
   
      <li className="px-3 py-3 flex items-start bg-cyan-500 bg-opacity-20">
          <button 
            onClick={() => onDeleteAppoinment(appoinment.id)}
            type="button" 
            className="p-1.5 mr-1.5 mt-1 rounded-md bg-red-500 hover:bg-yellow-700"
          >

            <BiTrash />

          </button>
          <div className="flex-grow">
            <div className="flex items-center">
              <span className="flex-none font-medium text-2xl text-cyan-400">
                  {appoinment.petName}
                </span>

              <span className="flex-grow text-right font-bold text-white">
                Date: {appoinment.aptDate} Time: {appoinment.aptTime}
              </span>

            </div>
            <div  className="font-bold text-white">
                <b className="font-bold text-white"> Owner: </b>{appoinment.ownerName}
              </div>
            <div className="leading-tight font-bold text-white">
              Message: {appoinment.message}
              </div>
          </div>
        </li>
    
  )
}

export default AppoinmentInfo
import { useState } from 'react'
import {BiSearch, BiCaretDown, BiCheck} from 'react-icons/bi'

const DropDown = (props) => {
    const toggle = props.toggle
    if (!toggle) {
        return null
    }
    return(
     <div className="origin-top-right absolute">
    <div>
        <div 
        role="menuitem"
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        >
            Pet Name <BiCheck />
         </div>
        <div role="menuitem"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
            Owner Name <BiCheck /> 
            </div>
            <div role="menuitem"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
             Date <BiCheck />
            </div>
            <div role="menuitem"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
             Acending <BiCheck />
            </div>
            <div role="menuitem"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
             Decending <BiCheck />
            </div>
    </div>
</div>
)
}
const Search = ({query, onQueryChange}) => {
    let [toggleSort, setToggleSort] = useState(false)
return (
<div className='py-5'>
<div className="mt-1 relative rounded-md shadow-sm">
    <div className="absolute inset-y-0 left-0 pl-3 flex item-center">
    <BiSearch />
    <label htmlFor="query" className="sr-only" />
    </div>
    <input 
    onChange={(event) => {
        onQueryChange(event.target.value)
    }}
    type="text"
         name="query"
         id="query" 
         value = {query}
         placeholder="Search" 
        className="pl-8 rounded-md h-7 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" 
        />
    <div className="absolute inset-y-0 right-0 flex items-center">
        <div>
            <button 
                onClick={() => 
                    {setToggleSort(!toggleSort)
                }}
            type="button" 
            id="options-menu"
            className="px-4 py-2 bg-purple-500 text-sm text-white shadow-lg shadow-purple-500/50 hover:bg-purple-800 focus:outline-none focus:ring-offset-2 flex items-center rounded-md"
            >
                Sort by
                <BiCaretDown className="ml-2" />
                </button>
                <DropDown toggle={toggleSort} />
        </div>
    </div>
        </div>
    </div>
  )
}

export default Search
import { useState } from 'react'
import {BiSearch, BiCaretDown, BiCheck} from 'react-icons/bi'

const DropDown = ({
    toggle, 
    sortBy, 
    onSortByChange, 
    orderBy, 
    onOrderByChange}) => {
    // const toggle = props.toggle
    if (!toggle) {
        return null
    }
    return(
     <div className="origin-top-right absolute rounded-lg  bg-cyan-300 bg-opacity-30 ">
    <div>
        <div 
        onClick={() => onSortByChange("petName")}
        role="menuitem"
        className="px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        >
            Pet Name {sortBy === "petName" && <BiCheck /> } 
         </div>
        <div 
        onClick={() => onSortByChange("ownerName")}
        role="menuitem"
            className="px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
            Owner Name {sortBy === "ownerName" && <BiCheck /> }
            </div>
            <div 
            onClick={() => onSortByChange("date")}
            role="menuitem"
            className="px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
             Date {sortBy === "date" && <BiCheck />}
            </div>
            <div 
            onCanPlay={() => onOrderByChange("asc")}
            role="menuitem"
            className="px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
             Acending {orderBy === "asc" && <BiCheck />}
            </div>
            <div 
            onClick={() => onOrderByChange("dsc")}
            role="menuitem"
            className="px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            >
             Decending {orderBy === "dsc" && <BiCheck />}
            </div>
    </div>
</div>
)
}
const Search = ({
    query, 
    onQueryChange,
     sortBy, 
     onSortByChange, 
     orderBy, 
     onOrderByChange
}) => {
    let [toggleSort, setToggleSort] = useState(false)
return (

<div className="py-5">
<div className="mt-1 relative rounded-md shadow-sm ">
    <div className="absolute inset-y-0 left-2 py-2 flex item-center">
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
        className="pl-8 rounded-md h-8 shadow-md block w-full sm:text-sm border-gray-300
          placeholder-shown:border-blue-gray-200 focus:ring-border-cyan-700 disabled:border-0 disabled:bg-blue-gray-50
         focus:placeholder:opacity-100 transition-all font-bold" 
        />

    <div className="absolute inset-y-0 right-0 flex items-center">
        
        <div>
            <button 
                onClick={() => 
                    {setToggleSort(!toggleSort)
                }}
            type="button" 
            id="options-menu"
            className="px-4 py-2 font-bold text-sm text-white shadow-lg
             shadow-cyan-700/50 focus:outline-none focus:ring-offset-2 flex items-center rounded-lg
             transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110
             bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-900
              hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
                Sort by
                <BiCaretDown className="ml-2" />
                </button>
                <DropDown 
                toggle={toggleSort} 
                    sortBy = {sortBy}
                    onSortByChange = {(mySort) => onSortByChange(mySort)}
                    orderBy = {orderBy}
                    onOrderByChange = {myOrder => onOrderByChange(myOrder)}
                />
        </div>
    </div>
        </div>
    </div>
  )
}

export default Search
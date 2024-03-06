// import logo from './logo.svg';
// import './App.css';
import { BiArchive } from 'react-icons/bi'
import Search from './components/Search'
import AddApoinment from './components/AddApoinment'
import AppoinmentInfo from './components/AppoinmentInfo'
import { useCallback, useEffect, useState } from 'react'


function App() {

  let [appoinmentList, setAppoinmentList] = useState([])
  let [query, setQuery] = useState("")
  let [sortBy, setSortBy] = useState("petName")
  let[orderBy, setOrderBy] = useState("asc")

  const filteredAppoinmentList = appoinmentList.filter((item) => {
    return(
    item.petName.toLowerCase().includes(query.toLowerCase()) || 
    item.ownerName.toLowerCase().includes(query.toLowerCase())
    )

  }).sort((a,b) => {
    let order = (orderBy === 'asc') ? 1 : -1
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
    ? -1 * order 
    : 1 * order
  })


  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      setAppoinmentList(data)
    })
  }, [])

  useEffect(() =>{
    fetchData()
  }, [fetchData])
  return (
       <div className="App container mx-auto mt-3 font-thin">

<h1 className="text-4xl font-bold">
  <BiArchive className="inline-block text-red-400 align-top" />
  Appoinment App
</h1>
  <AddApoinment />
  <Search query = {query} onQueryChange={(myQuery) => setQuery(myQuery)}
   orderBy = {orderBy}
   onorderByChange = {mySort => setOrderBy(mySort)}
   sortBy = {sortBy}
   onSortByChange = {(mySort) => setSortBy(mySort)}
   />
 
  <ul className="divide-y divide-gray-200">
    {filteredAppoinmentList.map((appoinment) => ( 
        < AppoinmentInfo key={appoinment.id}
          appoinment={appoinment}

          onDeleteAppoinment={(appoinmentId) => 
            setAppoinmentList(
              appoinmentList.filter(
                (appoinment) => appoinment.id !== appoinmentId
            ))
          }
        />
    ))}
  </ul>
    </div>
    
  )
}

export default App;

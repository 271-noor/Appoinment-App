// import logo from './logo.svg';
// import './App.css';
import { BiArchive } from 'react-icons/bi'
import Search from './components/Search'
import AddApoinment from './components/AddApoinment'
// import appoinmentList from './data.json'
import AppoinmentInfo from './components/AppoinmentInfo'
import { useCallback, useEffect, useState } from 'react'


function App() {

  let [appoinmentList, setAppoinmentList] = useState([])
  let [query, setQuery] = useState("")

  const filteredAppoinmentList = appoinmentList.filter((item) => {
    return item.petNam
    .toLowerCase()
    .include(
      query.toLowerCase() || 
        item.ownerName.toLowerCase().include(query.toLowerCase()) )
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
  <Search query = {query} onQueryChange={(myQuery) => setQuery(myQuery)}/>
 
  <ul className="divide-y divide-gray-200">
    {appoinmentList.map((appoinment) => ( 
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

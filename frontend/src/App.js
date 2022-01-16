import React, { useState, useEffect } from "react"

import MainWrapper from "./Container/MainWrapper"
import MainHeader from "./Container/MainHeader"
import SearchName from "./Component/SearchName"
import SearchID from "./Component/SearchID"
import SearchCollege from "./Component/SearchCollege"
import SearchDepartment from "./Component/SearchDepartment"
import SearchResult from "./Component/SearchResult"

import {useQuery, useMutation} from "@apollo/client"
import {GET_ALL_CARDS} from "./graphql"

function App() {

  const [debug, setDebug] = useState('Debug')
  const [college, setCollege] = useState('')
  const [department, setDepartment] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  
  

  const search = (keyword, data, loading, error) => {
    
    if (loading)
      setSearchResults(<p>系統查詢中，請稍後...</p>)
    
    else if (error)
      setSearchResults(<p>{`${error}`}</p>)
    
    else
      setSearchResults(<SearchResult data={data} keyword={keyword}/>)
  }
  
  return (
    <MainWrapper>
      <MainHeader>
        臺灣大學學生證報失及查詢系統
      </MainHeader>
      <SearchName 
        search={search}
      />
      <SearchID 
        search={search}
      />
      <SearchCollege
        college={college}
        setCollege={setCollege}
        search={search}
      />
      <SearchDepartment 
        college={college}
        department={department}
        setDepartment={setDepartment}
        search={search}
      />
      {searchResults}
    </MainWrapper>
  )
}

export default App;

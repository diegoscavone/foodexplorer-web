import { useState, useContext, createContext } from 'react'

export const SearchContext = createContext({})
function SearchProvider({ children }) {
  const [data, setData] = useState({ search: '' })

  function searchDishes(value) {
    const search = value.trim().replace(/[^\p{L}\d\s]/gu, '')
    setData({ search })
    console.log(search)
  }

  return (
    <SearchContext.Provider
      value={{
        searchDishes,
        search: data.search
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = useContext(SearchContext)
  return context
}

export { SearchProvider, useSearch }

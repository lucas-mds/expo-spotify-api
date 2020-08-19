import React, { createContext, useContext } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({children}) {
  const[state, setState] = React.useState({
    loading: false,
    newState: (value) => setState(_ => ({..._, ...value})),
    setLoading: (newValue) =>  setState(_ => ({ ..._, loading: newValue })),
  });

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}


function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalContextProvider')
  }
  return context
}

export {
  useGlobalContext,
  GlobalContextProvider,
}
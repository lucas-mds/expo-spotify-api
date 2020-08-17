import React, { createContext, useContext } from 'react';

const GlobalContext = createContext();

const defaultState = { signed: true, loading: true };

function GlobalContextProvider({children}) {
  const[state, setState] = React.useState(defaultState);

  React.useEffect(() => {
    console.log('rodando apenas uma vez');
    setState(current => ({
      ...current,
      loading: false,
      setLoading: (newValue) =>  setState(_ => ({ ..._, loading: newValue })),
    }))
  }, []);

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
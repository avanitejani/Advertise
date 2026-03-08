import React, { createContext, useContext, useEffect, useState } from 'react';

const ListProviderContext = createContext();

export const useListContext = () => useContext(ListProviderContext);

export function ListProvider({ children }) {

  const [uploadedTrainingType, setUpTrainingloadedType] = useState(false);
  const [terminationType, setTerminationType] = useState([]);
  const [terminationChange, setTerminationChange] = useState("");

  return (
    <ListProviderContext.Provider value={{
      uploadedTrainingType, setUpTrainingloadedType      
    }}>
      {children}
    </ListProviderContext.Provider>
  );
}

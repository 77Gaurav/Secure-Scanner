import { createContext, useContext, useState } from 'react';

const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
  const [scanHistory, setScanHistory] = useState([]);
  const [currentScan, setCurrentScan] = useState(null);

  const addScanResult = (result) => {
    setScanHistory(prev => [result, ...prev.slice(0, 9)]);
    setCurrentScan(result);
  };

  return (
    <ScanContext.Provider value={{ scanHistory, currentScan, addScanResult }}>
      {children}
    </ScanContext.Provider>
  );
};

export const useScan = () => useContext(ScanContext);
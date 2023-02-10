import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Managers, Tasks } from "../utils/data";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [geojsonFiles, setGeojsonFiles] = useState([]);
  const [selectedPolygon, setSelectedPolygon] = useState("");
  const [assignTask, setAssignTask] = useState(false);
  const[manager, setManager] = useState([])

  useEffect(() => {
    setGeojsonFiles(Tasks);
    setManager(Managers)
  }, []);
  return (
    <DataContext.Provider
      value={{
        geojsonFiles,
        manager,
        setGeojsonFiles,
        selectedPolygon,
        assignTask,
        setAssignTask,
        setSelectedPolygon,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

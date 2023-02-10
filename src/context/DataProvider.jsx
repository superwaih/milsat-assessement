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
  const checkPolygon = (taskid) =>{
    return selectedPolygon === taskid
  }
  console.log(checkPolygon("poly001"))

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
        checkPolygon,
        setAssignTask,
        setSelectedPolygon,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

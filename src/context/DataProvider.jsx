import { createContext, useContext, useEffect, useState } from "react";
import { Managers, Tasks } from "../utils/data";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [geojsonFiles, setGeojsonFiles] = useState([]);
  const [selectedPolygon, setSelectedPolygon] = useState("");
  const [assignTaskModal, setAssignTaskModal] = useState(false);
  const [activateDropDown, setActivateDropDown] = useState(false);
  const [manager, setManager] = useState([]);
  const[esriData, setEsriData] = useState([])
  const [mapType, setMapType] = useState('satellite');
  const [baseMap, setBaseMap] = useState('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  const currentpolygon = geojsonFiles.filter(
    (d) => d.taskid === selectedPolygon
  );

  const checkPolygon = (taskid) => {
    return selectedPolygon === taskid;
  };

  useEffect(() => {
    setGeojsonFiles(Tasks);
    setManager(Managers);
  }, []);


  const handleRemoveUser = (itemId, subItemIndex) => {
    setGeojsonFiles(
      geojsonFiles.map((item) => {
        if (item.taskid === itemId) {
          return {
            ...item,
            assigned_users: item.assigned_users.filter(
              (_, index) => index !== subItemIndex
            ),
          };
        }
        return item;
      })
    );
  };
  return (
    <DataContext.Provider
      value={{
        geojsonFiles,
        mapType,
        setMapType,
        baseMap,
        setBaseMap,
        esriData,
        setEsriData,
        manager,
        handleRemoveUser,
        currentpolygon,
        setGeojsonFiles,
        selectedPolygon,
        activateDropDown,
        setActivateDropDown,
        assignTaskModal,
        checkPolygon,
        setAssignTaskModal,
        setSelectedPolygon,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

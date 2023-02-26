import { createContext, useContext, useEffect, useState } from "react";
import { Managers, Tasks } from "../utils/data";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  // for storing the geojsonfiles
  const [geojsonFiles, setGeojsonFiles] = useState([]);
  // variable for storing the name of the selected polygon
  const [selectedPolygon, setSelectedPolygon] = useState("");
  // boolean for settting the assigntaskmodal
  const [assignTaskModal, setAssignTaskModal] = useState(false);
 // boolean for show the list of assigned users to a task
  const [activateDropDown, setActivateDropDown] = useState(false);
  const [manager, setManager] = useState([]);
  // boolean for showing the filtered data on the map
  const[showGrid, setShowGrid] = useState(false)
 
  const [mapType, setMapType] = useState('satellite');
  const [naijaState, setNaijaState] = useState('');
  const [naijaLga, setNaijaLga] = useState('');
  // Grid loading state
  const[loading, setLoading] = useState(false)

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

  // Function for removing a field collector from the list of assigned users to a task 
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
        setLoading,
        loading,
        naijaLga,
        setNaijaLga,
        naijaState,
        setNaijaState,
        setMapType,
        baseMap,
        showGrid,
        setShowGrid,
        setBaseMap,
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

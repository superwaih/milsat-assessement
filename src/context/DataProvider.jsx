import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Allusers, Tasks } from "../utils/data";

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
  // boolean for showing the filtered data on the map

  // User input states
  const [workFrameType, setWorkFrameType] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState(null);
  const [selectedLGACode, setSelectedLGACode] = useState(null);
 
  const [mapType, setMapType] = useState('satellite');

  // 
  const[Users, setUsers] = useState([]) 
  // 
  const[gridFrame, setGridFrame] = useState(null)

  // Grid loading state
  const[loading, setLoading] = useState(false)

  const [baseMap, setBaseMap] = useState('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  const currentpolygon = gridFrame?.filter(
    (d) => d.properties.FID === selectedPolygon
  );
  const[firstcords, setFirstCords] = useState([])


  const checkPolygon = (taskid) => {
    return selectedPolygon === taskid;
  };

  useEffect(() => {
    setGeojsonFiles(Tasks);
    setUsers(Allusers)
  }, []);

  // Function for removing a field collector from the list of assigned users to a task 
  const handleRemoveUser = (itemId, subItemIndex) => {
    setGridFrame(
      gridFrame?.map((item) => {
        if (item.properties.FID === itemId) {
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
        Users,
        gridFrame, 
        setGridFrame,
        setMapType,
        baseMap,
        setBaseMap,
        handleRemoveUser,
        currentpolygon,
        setGeojsonFiles,
        selectedPolygon,
        activateDropDown,
        setActivateDropDown,
        assignTaskModal,
        workFrameType, 
        setWorkFrameType, 
        selectedStateCode, 
        setSelectedStateCode, 
        selectedLGACode, 
        setSelectedLGACode,
        firstcords,
        setFirstCords,
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

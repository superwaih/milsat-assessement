import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDataProvider } from "../../context/DataProvider";
const url =
  "https://services3.arcgis.com/od20s3ViWJZ68qsq/arcgis/rest/services/Nigeria_Grids/FeatureServer/0/query";

const QueryTab = () => {
  const {
    setGridFrame,
    loading,
    setLoading,
    setFirstCords,
    workFrameType,
    setWorkFrameType,
    selectedStateCode,
    setSelectedStateCode,
    selectedLGACode,
    setSelectedLGACode,
  } = useDataProvider();
  const [stateNames, setStateNames] = useState([]);
  const [lgaNames, setLgaNames] = useState([]);
  const [lgaLoading, setLgaloading] = useState(false);

  const fetchStates = async () => {
    const { data } = await axios.get(
      "https://services3.arcgis.com/od20s3ViWJZ68qsq/arcgis/rest/services/Nigeria_Grids/FeatureServer/0/query?where=1%3D1&outFields=STATE_CODE%2CSTATE_NAME&returnGeometry=false&returnCentroid=false&returnDistinctValues=true&orderByFields=STATE_NAME&f=pjson&token="
    );
    setStateNames(data.features);
  };
  const fetchLgas = async () => {
    if (selectedStateCode != null) {
      setLgaloading(true);
      try {
        const { data } = await axios.get(
          `${url}?where=STATE_CODE=${selectedStateCode}&outFields=LGA_CODE%2CLGA_NAME&returnGeometry=false&returnDistinctValues=true&corderByFields=LGA_NAMEsqlFormat=none&f=pjson&token=`
        );
        setLgaNames(data.features);
        setLgaloading(false);
      } catch (error) {
        console.log(error);
        setLgaloading(false);
      }
    }
  };

  const handleStateChange = async (e) => {
    setSelectedStateCode(e.target.value);
  };
  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchLgas();
  }, [selectedStateCode]);
  const handleFilter = async (event) => {
    event.preventDefault();
    setLoading(true);

    if ((selectedLGACode, selectedStateCode)) {
      setFirstCords([]);
      try {
        const URL = `${url}?where=STATE_CODE=${selectedStateCode}+AND+LGA_CODE=${selectedLGACode}&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=LGA_NAME,STATE_NAME,FID,LGA_CODE&returnGeometry=true&returnCentroid=True&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=`;
        const { data } = await axios.get(URL);
        const formatData = data.features.map((d) => {
          return {
            ...d,
            assigned_users: [],
          };
        });
        setGridFrame(formatData);
        setFirstCords(data.features[0].geometry.coordinates[0][0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(workFrameType)
  return (
    <form className="w-full flex gap-4" onSubmit={handleFilter}>
      <div className="">
        {/* <label className="font-semibold" htmlFor="workFrameType">
          Work Frame Type:
        </label> */}
        <select
          id="workFrameType"
          value={workFrameType}
          className="w-full border p-4"
          onChange={(event) => setWorkFrameType(event.target.value)}
          required
        >
          <option value="">Select Frame type</option>
          <option value="0">Frame 0</option>
          <option value="1">Frame 1</option>
        </select>
      </div>

      <div className="flex gap-4">
        <select
          name="states"
          value={selectedStateCode}
          className="w-full border font-bold p-4"
          onChange={(e) => handleStateChange(e)}
        >
          <option value="">Select your state</option>
          {workFrameType != "" ? stateNames?.map((state) => (
            <option
              className=""
              key={state.attributes.STATE_CODE}
              value={state.attributes.STATE_CODE}
            >
              {state.attributes.STATE_NAME} <span>
              ({state.attributes.STATE_CODE})
              </span>
            </option>
          )) : <option className="" value="">select a work frame type first</option>}
        </select>
        <select
          className="w-full border font-bold p-4 "
          value={selectedLGACode}
          onChange={(e) => setSelectedLGACode(e.target.value)}
          name="lga"
          id="lga-code"
        >
          {selectedStateCode === null ? (
            <option value="">Select a state first</option>
          ) : lgaLoading ? (
            <option value="">Loading lgas...</option>
          ) : (
            <>
              <option value="">Select Lga</option>
              {lgaNames?.map((lga) => (
                <option
                  key={lga.attributes.LGA_CODE}
                  value={lga.attributes.LGA_CODE}
                >
                  {lga.attributes.LGA_NAME} <span>({lga.attributes.LGA_CODE})</span>
                </option>
              ))}
            </>
          )}
        </select>
        <div>
          {/* lga:{selectedLGACode}, state:{selectedStateCode} */}
        </div>
      </div>
      <button
        disabled={loading}
        className="bg-blue-500 disabled:opacity-40 text-white font-semibold rounded-md px-4 py-5"
        type="submit"
      >
        {loading ? "Loading..." : "Get Grid Data"}
      </button>
    </form>
  );
};

export default QueryTab;

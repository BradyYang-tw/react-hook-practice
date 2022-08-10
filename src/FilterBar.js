import react, { useState } from "react";
import Table from "./Table.js";
import { useOutletContext } from "react-router-dom";

function FilterBar() {
  const [user, setUser] = useOutletContext();
  const [keyword, setKeyword] = useState("");
  const [showData, setshowData] = useState([]);
  // const searchName = (event)=>{
  //     array.filter((name)=>{
  //         name == event.target.value;
  //     })
  // }

  const showChange = (event) => {
    setKeyword(event.target.value);
  };

  const alertSomrthing = () => {
    const fildata = user.filter((data) => data.name == keyword);
    setshowData(fildata);
    console.log(showData);
  };
  return (
    <div>
      <h2>查詢人名：</h2>
      <input type="search" onChange={showChange}></input>
      <button type="button" onClick={alertSomrthing}>
        查詢
      </button>
      <Table name={showData.length > 0 ? showData:user} />
    </div>
  );
}
export default FilterBar;

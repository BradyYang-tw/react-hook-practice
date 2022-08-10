import "./ItemList.css"
import { Outlet, Link } from "react-router-dom";

function ItemList() {
//   const liArray = ["新增", "查詢"];
//   const item = liArray.map((data, index) => {
//     return (<li key={index}>{data}</li>);
//   });
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="AddPhone">新增電話簿</Link></li>
        <li><Link to="SearchPhone">查詢電話簿</Link></li>
    </ul>
  );
}

export default ItemList;

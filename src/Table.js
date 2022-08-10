import react, { useState } from "react";
// const showItems = () => {
//   return <td>123</td>;
// };

function Table(props) {
  //   const listItems = () => {
  //     console.log("動起來", props);
  //     return props.name.map((name) => <tr key={name.index}><td>{name}</td></tr>);
  //   };
  console.log(props);
  const test = props.name.map((data) => (
    <tr>
      <td>{data.name}</td>
      <td>{data.tel}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Tel</th>
        </tr>
      </thead>

      <tbody>{test}</tbody>
    </table>
  );
}

export default Table;

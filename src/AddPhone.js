import "./AddPhone.css";
import { useOutletContext } from "react-router-dom";

let allData = [];
function AddPhone() {
  const [user, setUser] = useOutletContext();
  let finalName;
  let finalTel;

  const handleNameChange = (event) => {
    console.log(event.target.value);
    finalName = event.target.value;
  };

  const handleTelChange = (event) => {
    console.log(event.target.value);
    finalTel = event.target.value;
  };
  const clickButton = () => {
    allData.push({ name: finalName, tel: finalTel });
    setUser(allData);
  };
  return (
    <div>
      <h1>Add Phone</h1>
      <label for="fname">Name:</label>
      <br />
      <input type="text" id="fname" name="fname" onChange={handleNameChange} />
      <br />
      <label for="lname">Tel No:</label>
      <br />
      <input type="text" id="lname" name="lname" onChange={handleTelChange} />
      <br />
      <br />
      <button onClick={clickButton}> Submit</button>
      {/* <div className='information'>
        Name： <input></input>
      </div>
      
      <div className='information'>
        Tel: <input></input>
      </div>
      

       */}
    </div>
  );
}

export default AddPhone;

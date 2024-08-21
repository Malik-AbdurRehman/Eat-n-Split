import { useState } from "react";

const AddFriend = ({ SetFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const addFriend = () => {
    if (name !== "") {
      const newItem = { name: name, balance: 0, Imag: image };
      SetFriend(newItem);
    } else alert("Please Enter the Name.");
  };
  return (
    <>
      <div className="addFriend">
        <p>
          Friend Name: <input onChange={handleName}></input>
        </p>
        <p>
          Image URL:<input onChange={handleImage}></input>
        </p>
        <button onClick={() => addFriend()}>Add</button>
      </div>
    </>
  );
};
export default AddFriend;

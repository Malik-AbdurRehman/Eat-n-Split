import { useState } from "react";
import FriendList from "./friend-list";

const App = () => {
  const [friends, setFriends] = useState([
    { name: "saif", balance: -5, Imag: "logo192.png" },
    { name: "Hassan", balance: 10, Imag: "logo192.png" },
  ]);
  const handleAddFriends = (friend) => {
    setFriends((t) => [...t, friend]);
  };
  const handleNewFriendArray = (friends) => {
    setFriends(friends);
  };
  return (
    <>
      <div className="fullContainer">
        <div className="division">
          <div className="friendList_addFriend">
            <FriendList
              Friends={friends}
              SetFriend={handleAddFriends}
              SetNewFriendArray={handleNewFriendArray}
            />
          </div>
          {/* <div className="splitbill">
            <SplitBill />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default App;

import { useState } from "react";
import AddFriend from "./AddFriend";
import SplitBill from "./Split-Bill";

const FriendList = ({ Friends, SetFriend, SetNewFriendArray }) => {
  console.log(Friends);
  const [addFriend, setAddFriend] = useState(false);

  const [selected, setSelected] = useState();

  const handleAddFriend = () => {
    setAddFriend(true);
  };
  const handleCloseButton = () => {
    setAddFriend(false);
  };
  const handleSelected = (obj) => {
    console.log(obj);
    setSelected(obj);
  };
  return (
    <>
      <div className="friendList">
        {Friends.map((fr, index) => (
          <div className="friendListElements" key={index}>
            <img className="profileImage" src={fr.Imag} alt="pfp" />
            <div className="nameBalance">
              <p>{fr.name}</p>
              <p
                // className={`balance ${
                //   fr.balance >= 0 ? "positive" : "negative"
                // }`}
                className={`balance ${
                  fr.balance > 0
                    ? "positive"
                    : fr.balance === 0
                    ? "even"
                    : "negative"
                }`}
              >
                {fr.balance < 0
                  ? `you owe ${fr.name} ${Math.abs(fr.balance)}$`
                  : `${fr.name} owes you ${Math.abs(fr.balance)}$`}
              </p>
            </div>
            <div>
              <button
                className="selectButton"
                onClick={() => handleSelected(fr)}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={handleAddFriend}>Add a Friend</button> */}
      {addFriend === false ? (
        <button onClick={handleAddFriend}>Add a Friend</button>
      ) : (
        <div>
          <AddFriend SetFriend={SetFriend} />
          <button onClick={handleCloseButton}>Close</button>
        </div>
      )}
      <SplitBill
        Selected={selected}
        SETSELECTED={setSelected}
        Friends={Friends}
        //SetFriend={SetFriend}
        SetNewFriendArray={SetNewFriendArray}
      />
    </>
  );
};
export default FriendList;

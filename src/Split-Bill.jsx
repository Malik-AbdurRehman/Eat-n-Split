import { useState } from "react";

const SplitBill = ({ Selected, SETSELECTED, Friends, SetNewFriendArray }) => {
  const [billValue, setBillvalue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whoPaid, setWhoPaid] = useState("You");
  const otherPersonExpense = billValue - myExpense;

  const handleBillValue = (e) => {
    setBillvalue(e.target.value);
  };
  const handleMyExpense = (e) => {
    setMyExpense(e.target.value);
  };

  const handleSplitClose = () => {
    SETSELECTED();
    console.log();
  };

  const handleWhoPaid = (e) => {
    setWhoPaid(e.target.value);
  };

  const handleSplitBill = () => {
    parseInt(billValue);
    parseInt(myExpense);
    let totalBill = parseInt(billValue);
    let MyExpense = parseInt(myExpense);
    let prevBalance = Selected.balance;
    let temp = 0;
    if (whoPaid === "You") {
      temp = prevBalance + totalBill - MyExpense;
      console.log(temp);
      //Selected.balance = temp;
      SETSELECTED((t) => {
        //return { name: "murtaza", balance: 5, Imag: "./logo192.png" };
        return { ...t, balance: temp };
      });
      // console.log(Selected);
    } else {
      temp = prevBalance - totalBill + (totalBill - MyExpense);
      console.log(temp);
      SETSELECTED((t) => {
        return { ...t, balance: temp };
      });
      // console.log(Selected);
    }

    const newarr = Friends.map((fr) => {
      if (fr.name === Selected.name) {
        console.log("check");
        return { ...fr, balance: temp };
      } else {
        return fr;
      }
    });
    SetNewFriendArray(newarr);
  };
  console.log(Selected);
  return (
    <>
      {!Selected ? (
        ""
      ) : (
        <div>
          <div>
            <h2>Split a bill with User</h2>
            <div className="splitInput">
              <p>Bill value</p>
              <input type="Number" onChange={handleBillValue}></input>
            </div>
            <div className="splitInput">
              <p>Your expense</p>
              <input type="Number" onChange={handleMyExpense}></input>
            </div>
            <div className="splitInput">
              <p>{Selected.name}'s Expense</p>
              <input type="Number" value={otherPersonExpense}></input>
            </div>
            <div className="splitInput">
              <p>Who is paying the bill?</p>
              <select onChange={handleWhoPaid} name="whoPaid">
                <option value={"You"}>You</option>
                <option value={Selected.name}>{Selected.name}</option>
              </select>
            </div>
            <button onClick={() => handleSplitBill()}>SplitBill</button>
          </div>
          {<button onClick={() => handleSplitClose(Selected)}>close</button>}
        </div>
      )}
    </>
  );
};
export default SplitBill;

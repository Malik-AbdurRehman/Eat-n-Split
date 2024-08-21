import { useState } from "react";

const SplitBill = ({ Selected, SETSELECTED }) => {
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
    SETSELECTED(null);
  };

  const handleWhoPaid = (e) => {
    setWhoPaid(e.target.value);
  };

  const handleSplitBill = () => {
    if (whoPaid === "You") {
      // console.log(billValue + 2);
      // console.log(myExpense + 2);
      // console.log(Selected.balance + 2);
      parseInt(billValue);
      parseInt(myExpense);
      console.log(billValue + 2);
      console.log(myExpense + 2);
      console.log(Selected.balance + 2);
    }
  };
  // const handleSplitBill = () => {};
  // const handleOtherPersonExpense = () => {
  //   let temp = billValue - myExpense;
  //   setOtherPersonExpense(temp);
  // };
  return (
    <>
      {Selected === null ? (
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
              <p>{whoPaid}</p>
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

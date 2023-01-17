import React from 'react'

export default function AddExpense({handleAddSubmit,handleCancelBtn,handleChange,clickHandler}) {
  return (
    <>
<div className='container'>
    <h3>Add Expense</h3>
    <form onSubmit={handleAddSubmit}>
  
    Expense_Type<select name='expenses_type' >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
    Spend_Money:<input type="text" name="spend_money" onClick={clickHandler}></input>
    
    date:<input type="date" name="date"></input>
  <button type="submit">submit</button>
  <button onClick={handleCancelBtn}>Cancel</button>
</form>



</div>
    </>
   
  )
}

import React from 'react'

export default function EditExpense({handleEditSubmit,selectedEditData}) {
  return (
    <>
   <div className='container'>
    <h3>Edit Expense</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.user)}>
    Expense_Type:<select name='expenses_type' defaultValue={selectedEditData.expenses_type}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
    Spend_Money:<input type="text" name="spend_money" defaultValue={selectedEditData.spend_money}></input>
    date:<input type="text" name="date" defaultValue={selectedEditData.date}></input>
  <button type="submit" >Edit</button>
</form>
</div>

    </>
   
  )
}

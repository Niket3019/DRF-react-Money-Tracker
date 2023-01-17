import React, { useEffect, useState } from "react";
import {getMoney ,addexpense,editexpense,deleteMoney, getTotalBalance,addbalance} from "../services/CRUDS";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";


export default function MoneyTracker(){
const [money,setMoney] = useState([])

const [ShowAddExpenseForm,setShowAddExpenseForm] = useState(false)
const [ShowEditExpenseForm,setShowEditExpenseForm] = useState(false)
const [selectedEditData,setSelectedEditData] = useState()

    const [totalExpenses, setTotalExpenses] = useState(0);
  const[TotalBalance,setTotalBalance] = useState([]);
  const [balanceLeft, setBalanceLeft] = useState(0);
    useEffect(() => {
        const total = money.map(MoneysBudget => MoneysBudget.spend_money)
        .reduce((acc, currentValue) => acc + currentValue, 0);
        setTotalExpenses(total)
    }, [money])
    useEffect(() => {
      const total_balance = TotalBalance.map(Expenses => Expenses.total_income)
      .reduce((acc, currentValue) => acc - currentValue, 0);
      setTotalBalance(total_balance)
  }, [])
    
useEffect(()=>{
        let mount =  true
        getMoney()
        .then(res=>{console.log("res from api",res)
            setMoney(res)
            return()=> mount=false
        })
       
},[])
useEffect(()=>{
  let mount =  true
  getTotalBalance()
  .then(res=>{console.log("res from api",res)
      setTotalBalance(res)
      return()=> mount=false
  })
 
},[])



const clickHandler = (event)=>{
  setMoney(money.concat(event.target.MoneysBudget.spend_money.value))
}
const handleAddSubmit = (e)=> {
   addexpense(e.target)
     .then(res =>{
      setMoney(res)
      
})
}
function handleCancelBtn() {
  setShowAddExpenseForm(false)
}
const handleEditBtn = (MoneysBudget) =>{
  setSelectedEditData(MoneysBudget)

  setShowEditExpenseForm(true)
  setShowAddExpenseForm(false)
}
const handleEditSubmit = (e,id) => {
    editexpense(id,e.target)
    .then(res =>{
      setMoney(res)
    })
}
const handleDeleteBtn = (id) =>{
  deleteMoney(id)
  .then(res =>{
    setMoney(money.filter(p=>p.user!==id))
  })
}
const AddIncome =(e)=> {
  addbalance(e.target)
    .then(res =>{
    setTotalBalance(res)
})
}



      return(
        <>
      
      
        <h2 className="container">Money tracker</h2>
   
      

      <h1 style={{ color: 'red' }}>5000$</h1>
      <h4>Total Amount Spend:</h4>  
      <h2 style={{ color: 'red' }}>{totalExpenses}$</h2>
      
            <h4>Total Balance Left:</h4>  
            
            <h2 style={{ color: 'red' }}>Balance Left: {balanceLeft}$</h2>
            <h4>Your Income:</h4>
           
            <form onSubmit={AddIncome}>
            <input type="text" name="total_income"></input>
            <button type="submit">submit</button>
            </form>
            

             
<h2>History:</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Expense_Type</th>
      <th scope="col">Spend_Money</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {money.map(MoneysBudget =>{
        return <tr key={MoneysBudget.id}>
      <td>{MoneysBudget.expenses_type}</td>
      <td>{MoneysBudget.spend_money}</td>
      <td>{MoneysBudget.date}</td>
  
      <button onClick={()=>handleEditBtn(MoneysBudget)}>Edit</button>
      <button onClick={()=>handleDeleteBtn(MoneysBudget.user)}>Delete</button>
      
     
    </tr>
    })}
 </tbody>
</table>
<button onClick={()=>setShowAddExpenseForm(true)}>Add A New History</button>
{ShowAddExpenseForm && <AddExpense handleAddSubmit={handleAddSubmit}/>}
{ShowEditExpenseForm && <EditExpense handleEditSubmit={handleEditSubmit} selectedEditData ={selectedEditData}/>}
 




        
        </>
      )
}
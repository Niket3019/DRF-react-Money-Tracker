import axios from "axios";

export function getMoney(){
    return axios.get('http://127.0.0.1:8000/MoneysBudget/')
    .then(res=>{
        return res.data
    })
  
}
export function getTotalBalance(){
    return axios.get('http://127.0.0.1:8000/Expenses/')
    .then(res=>{
        return res.data
    })
}

export function addexpense(MoneysBudget){
    return axios.post('http://127.0.0.1:8000/MoneysBudget/',
    {
        user : null,
        expenses_type: MoneysBudget.expenses_type.value,
        spend_money: MoneysBudget.spend_money.value,
        date: MoneysBudget.date.value
    })
    .then(res=>{
        return res.data
    })
}
export function addbalance(Expenses){
    return axios.post('http://127.0.0.1:8000/Expenses/',
    {
        user : null,
        total_income:Expenses.total_income.value
    })
    .then(res=>{
        return res.data
    })
}
export function editexpense(id,MoneysBudget){
    return axios.put('http://127.0.0.1:8000/MoneysBudget/'+id+'/',
    {  
        user : null,
        expenses_type: MoneysBudget.expenses_type.value,
        spend_money: MoneysBudget.spend_money.value,
        date: MoneysBudget.date.value
    })
    .then(res=>{
        return res.data
    })}
export function deleteMoney(id){
        return axios.delete('http://127.0.0.1:8000/MoneysBudget/'+id+'/')
        
        .then(res=>{
            return res.data
        })
    }
    
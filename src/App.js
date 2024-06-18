import { useState, useEffect } from 'react';
import './components/Expenses/Expenses.css';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2023, 11 , 7),
    title: "New book",
    amount: 69
  },
  {
    id: 'id2',
    date: new Date(2666, 8, 7),
    title: "Genesis crystal",
    amount: 1
  },
  {
    id: 'id3',
    date: new Date(2024, 9, 7),
    title: "New pantaloons",
    amount: 420
  },
  {
    id: 'id4',
    date: new Date(2666, 10, 7),
    title: "Stellar jade",
    amount: 1
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'))
    return expensesFromLS || []
  })
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

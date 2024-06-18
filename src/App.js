import { useState, useEffect } from 'react';
import './components/Expenses/Expenses.css';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Error from './components/UI/Error';

const App = () => {
  const [isfetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)
  
  useEffect(() => {
    const getexpenses = async () => {
      setIsFetching(true)
      try {
        const response = await fetch('http://localhost:3001/expenses')
        const data = await response.json()
        if (!response.ok) {
          throw new Error('Something went wrong!')
        }
        setExpenses(data.expenses)
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed to fetch expenses. Please try again later.'
        })
        setShowError(true)
      }
      setIsFetching(false)
    }
    getexpenses()
  }, [])

  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpenseHandler = (expense) => {
    const addExpense = async () => {
      try {
        const response = await fetch('http://localhost:3001/add-expense', {
          method: 'POST',
          body: JSON.stringify(expense),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const responseData = await response.json()
        setExpenses([expense, ...expenses])
        if (!response.ok) {
          throw new Error('Something went wrong!')
        }
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed to add expense. Please try again later.'
        })
        setShowError(true)
      }
    }
    addExpense(expense)
  }

  return (
    <div className='App'>
      {showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />)
      }
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isloading={isfetching} />
    </div>
  );
}

export default App;

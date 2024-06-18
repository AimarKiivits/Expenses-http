import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const changeFilterHandler = (enteredYear) => {

        setFilteredYear(enteredYear)
    }

    props.expenses.map((expense) => {
        console.log(expense)
    })

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date (expense.date).getFullYear().toString() === filteredYear;
    });

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={changeFilterHandler}/>
            <ExpensesList expenses={filteredExpenses} isloading={props.isloading}/>
        </Card>
    )
}

export default Expenses
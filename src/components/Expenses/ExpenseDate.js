import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const day = new Date (props.date).toLocaleString('en-US', {day: '2-digit'})
    const month = new Date (props.date).toLocaleString('en-US', {month: 'long'})
    const year = new Date (props.date).getFullYear()
    
    return(
        <div className='expense-date'>
            <div className='expense-date_month'>{month}</div>
            <div className='expense-date_day'>{day}</div>
            <div className='expense-date_year'>{year}</div>
        </div>
    )
}

export default ExpenseDate
import express from 'express';
import fs from 'node:fs/promises';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/expenses', async (req, res) => {
    const filecontent = await fs.readFile('./data/expenses.json');
    const expensesData = JSON.parse(filecontent);
    res.status(200).json({expenses: expensesData});
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
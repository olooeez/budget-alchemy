import { useContext } from "react"
import { BudgetAlchemyContext } from '../context/BudgetAlchemyContext'
import { incomeCategories, expenseCategories, resetCategories } from '../constants/categories'

const useTransactions = (title) => {
  resetCategories()

  const { transactions } = useContext(BudgetAlchemyContext)
  const transactionsPerType = transactions.filter((t) => t.type === title)
  const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0)
  const categories = title === 'Income' ? incomeCategories : expenseCategories

  transactionsPerType.forEach((tpt) => {
    const category = categories.find((c) => c.type === tpt.category)

    if (category) category.amount += tpt.amount
  })

  const filteredCategories = categories.filter((c) => c.amount > 0)

  const chartData = {
    datasets: [{
      data: filteredCategories.map((fc) => fc.amount),
      backgroundColor: filteredCategories.map((fc) => fc.color),
    }],
    labels: filteredCategories.map((fc) => fc.type),
  }

  return { total, chartData }
}

export default useTransactions

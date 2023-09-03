import React, { useReducer, createContext } from 'react'

const contextReducer = (state, action) => {
  let transactions

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((t) => t.id !== action.payload)
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state]
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions
    default:
      return state
  }
}

const initialState = JSON.parse(localStorage.getItem('transactions')) || []
export const BudgetAlchemyContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction})

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

  return (
    <BudgetAlchemyContext.Provider value={{ balance, deleteTransaction, addTransaction, transactions }}>
      {children}
    </BudgetAlchemyContext.Provider >
  )
}

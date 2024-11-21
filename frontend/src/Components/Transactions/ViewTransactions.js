import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { InnerLayout } from '../../styles/Layouts'
import { dateFormat } from '../../utils/dateFormat'
import { dollar } from '../../utils/Icons'

function ViewTransactions() {
  const { getIncomes, getExpenses, incomes, expenses } = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  // Combine and sort transactions by date
  const allTransactions = [...incomes, ...expenses].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  return (
    <ViewTransactionsStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="transaction-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {allTransactions.map((transaction) => {
                const { _id, title, amount, date, category, description, type } = transaction
                return (
                  <tr key={_id}>
                    <td>{dateFormat(date)}</td>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td className={`type ${type}`}>{type}</td>
                    <td className={`amount ${type}`}>
                      {type === 'expense' ? '-' : '+'}{dollar} {amount}
                    </td>
                    <td>{description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </InnerLayout>
    </ViewTransactionsStyled>
  )
}

const ViewTransactionsStyled = styled.div`
  .transaction-table {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 2rem;
    margin-top: 2rem;
    
    table {
      width: 100%;
      border-collapse: collapse;
      
      thead {
        tr {
          th {
            padding: 1rem;
            text-align: left;
            background: rgba(34, 34, 96, 0.05);
            color: var(--primary-color);
            font-weight: 700;
            
          }
        }
      }
      
      tbody {
        tr {
          td {
            padding: 1rem;
            border-bottom: 1px solid rgba(34, 34, 96, 0.1);
            color: var(--primary-color);
          }
          
          .type {
            text-transform: capitalize;
            
            &.expense {
              color: red;
            }
            
            &.income {
              color: var(--color-green);
            }
          }
          
          .amount {
            font-weight: 600;
            
            &.expense {
              color: red;
            }
            
            &.income {
              color: var(--color-green);
            }
          }
        }
      }
    }
  }
`;

export default ViewTransactions;
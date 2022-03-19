import React from 'react';
import styled from 'styled-components';
import AddExpenseBtn from './AddExpenseBtn';
import AddIncomeBtn from './AddIncomeBtn';
import ExpensesTable from './ExpensesTable';
import IncomesTable from './IncomesTable';

const data = {
  expenses: [
    {
      name: 'jacket',
      type: 'clothing',
      value: 170,
    },
    {
      name: 'petrol',
      type: 'transportation',
      value: 22,
    },
    {
      name: 'train tickets',
      type: 'transportation',
      value: 12,
    },
  ],
  incomes: [
    {
      name: 'salary',
      type: 'employment',
      value: 2500,
    },
  ],
};

const MainContainer = styled.div`
  margin: 4rem auto 4rem auto;
  background: grey;
  width: 800px;
`;
const TableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Divider = styled.div`
  width: 4%;
  height: 100%;
  background-color: black;
`;
const ButtonsContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;
const Table = () => {
  return (
    <MainContainer>
      <TableContainer>
        <IncomesTable incomes={data.incomes} />
        <Divider />
        <ExpensesTable expenses={data.expenses} />
      </TableContainer>
      <ButtonsContainer>
        <AddIncomeBtn />
        <AddExpenseBtn />
      </ButtonsContainer>
    </MainContainer>
  );
};

export default Table;
import { formatMoney } from '../utils/format-money.js';

let balance = 100_000;
let historical = [];

const checkBalance = () => {
  return formatMoney(balance);
};

const deposit = (amount) => {
  balance += amount;

  const history = {
    amount,
    type: 'deposit',
    balance,
    date: new Date(),
  };

  historical.push(history);
  return history;
};

const withdraw = (amount) => {
  if (balance >= amount) {
    balance -= amount;

    const history = {
      amount,
      type: 'withdraw',
      balance,
      date: new Date(),
    };

    historical.push(history);
    return history;
  }
  return balance;
};

const activityHistory = () => {
  historical.map((history) => {
    console.log(
      `action: ${history.type}, amount: ${formatMoney(
        history.amount
      )}, balance: ${formatMoney(history.balance)}`
    );
  });
};

export { checkBalance, deposit, withdraw, activityHistory };

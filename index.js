import { formatMoney } from './utils/format-money.js';
import { readLines } from './utils/readline.js';
import * as wallet from './wallet/wallet.js';

const menu = [
  '1. Check balance',
  '2. Deposit',
  '3. Withdraw',
  '4. History',
  '5. Exit',
];

const depositAction = (amount) => {
  if (typeof +amount != 'number') {
    console.log(`Incorect Amount`);
    return null;
  }

  const res = wallet.deposit(+amount);
  console.log('\n----------------------------\n');
  console.log(`Deposit success`);
  console.log(`New balance: ${formatMoney(res.balance)}`);
  console.log('\n----------------------------\n');
};

const withdrawAction = (amount) => {
  if (typeof +amount != 'number') {
    console.log(`Incorect Amount`);
    return null;
  }

  const res = wallet.withdraw(+amount);
  if (typeof res != 'number') {
    console.log('\n----------------------------\n');
    console.log(`Withdraw success`);
    console.log(`New balance: ${formatMoney(res.balance)}`);
    console.log('\n----------------------------\n');
  } else {
    console.log('\n----------------------------\n');
    console.log(`Withdraw failed`);
    console.log(`balance: ${formatMoney(res)}`);
    console.log('\n----------------------------\n');
  }
};

const main = async () => {
  let state = true;
  while (state) {
    console.log(`\n.........Wallet.........\n`);
    menu.map((item) => console.log(`${item}`));
    console.log(`__________________`);
    const choice = await readLines();
    switch (choice) {
      case '1':
        console.log(`\n----------------------------\n
        Balance: ${wallet.checkBalance()}
        \n----------------------------\n
        `);
        break;

      case '2':
        const depositAmount = await readLines('Enter amount: ');
        depositAction(depositAmount);
        break;

      case '3':
        const withdrawAmount = await readLines('Enter amount: ');
        withdrawAction(withdrawAmount);
        break;

      default:
        state = false;
        break;
    }
  }
};

main();

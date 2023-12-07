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

const depositAction = async (amount) => {
  console.log('amount ty: ', amount);
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
        const amount = await readLines('Enter amount: ');
        depositAction(amount);
        break;

      default:
        state = false;
        break;
    }
  }
};

main();

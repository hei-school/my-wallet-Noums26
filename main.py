from wallet import check_balance, deposit, withdraw, get_activity_history
from utils.format_money import format_money
from utils.readlines import read_lines

menu = [
    "1. Check balance",
    "2. Deposit",
    "3. Withdraw",
    "4. History",
    "5. Exit",
]

def deposit_action(amount):
    try:
        amount = float(amount)
    except ValueError:
        print("Incorrect amount")
        return

    result = deposit(amount)
    print("\n----------------------------\n")
    print("Deposit successful")
    print(f"New balance: {format_money(result.balance)}")
    print("\n----------------------------\n")


def withdraw_action(amount):
    try:
        amount = float(amount)
    except ValueError:
        print("Incorrect amount")
        return

    result = withdraw(amount)
    print(result)
    if isinstance(result, float):
        print("\n----------------------------\n")
        print("Withdraw failed")
        print(f"Balance: {format_money(result)}")
        print("\n----------------------------\n")
    else:
      print("\n----------------------------\n")
      print("Withdraw successful")
      print(f"New balance: {format_money(result.balance)}")
      print("\n----------------------------\n")

def history_action():
    print("\n----------------------------\n")
    print("History")
    for activity in get_activity_history():
        print(f"{activity.date} - {activity.amount} - {activity.type}")
    print("\n----------------------------\n")


def main():
    running = True
    while running:
        print("\n.........Wallet.........\n")
        for item in menu:
            print(item)
        print("__________________")

        choice = read_lines()
        if choice == "1":
            balance = check_balance()
            print(f"\n----------------------------\nBalance: {format_money(balance)}\n----------------------------\n")
        elif choice == "2":
            amount = read_lines("Enter amount: ")
            deposit_action(amount)
        elif choice == "3":
            amount = read_lines("Enter amount: ")
            withdraw_action(amount)
        elif choice == "4":
            history_action()
        elif choice == "5":
            print("\n----------------------------\nGood Bye!\n----------------------------\n")
            running = False
        else:
            print("\n----------------------------\nChoice not recognized\n----------------------------\n")


if __name__ == "__main__":
    main()

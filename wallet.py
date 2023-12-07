from typing import List
from datetime import datetime

from utils.format_money import format_money


class Transaction:
    def __init__(self, amount: float, type: str, balance: float, date: str):
        self.amount = amount
        self.type = type
        self.balance = balance
        self.date = date


def check_balance():
    return format_money(balance)


def deposit(amount: float) -> Transaction:
    global balance
    global historical

    balance += amount
    history = Transaction(amount, "deposit", balance, str(datetime.now()))
    historical.append(history)

    return history


def withdraw(amount: float) -> Transaction:
    global balance
    global historical

    if balance >= amount:
        balance -= amount
        history = Transaction(amount, "withdraw", balance, str(datetime.now()))
        historical.append(history)

        return history
    else:
        return balance


def get_activity_history() -> List[Transaction]:
    return historical

balance = 100_000
historical = []

const Log = document.getElementById("Log")
const AccountBalanceBox = document.getElementById("AccountBalance")
const CashBalanceBox = document.getElementById("CashBalance")
const BankOperation = document.getElementById("BankOperation")
const OperatingMoney = document.getElementById("UpdateAcc")

const InputCurrencyBox = document.getElementById("CurrencyIn")
const OutputCurrencyBox = document.getElementById("CurrencyOut")
const TransferToCurrencyBox = document.getElementById("TransferToCurrency")

let logs = -1
let AccountBalance = Number(AccountBalanceBox.value)
let CashBalance = Number(CashBalanceBox.value)
function SetBalances() {
	logs += 1;
	AccountBalance = Number(AccountBalanceBox.value)
	CashBalance = Number(CashBalanceBox.value)
	Log.value += String(logs + 1) + ", " + "Current Account balance: " + String(AccountBalance) + "," + "Current Cash Balance: " + String(CashBalance) + "\n";
	Log.scrollTop = Log.scrollHeight;
}
function UpdateAccountBalance() {
	let Operation = BankOperation.value
	let Money = Number(OperatingMoney.value)
	if (Operation == "Deposit" ){
		AccountBalance += Money
		CashBalance -= Money
		AccountBalanceBox.value = AccountBalance
		CashBalanceBox.value = CashBalance
		SetBalances()
	} else if (Operation == "Withdraw") {
		AccountBalance -= Money
		CashBalance += Money
		AccountBalanceBox.value = AccountBalance
		CashBalanceBox.value = CashBalance
		SetBalances()
	}
}
function ConvertCurrency() {
	let InMoney = Number(InputCurrencyBox.value)
	let CurrencyTo = TransferToCurrencyBox.value
	let Calculated = 0
	if (CurrencyTo == "THB") {
		Calculated = Math.round(InMoney/0.31)
	} else if (CurrencyTo == "USD") {
		Calculated = Math.round(InMoney*0.31)
	}
	OutputCurrencyBox.value = Calculated
}
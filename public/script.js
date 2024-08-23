let expenses = [];
let totalAmount = 0;
const categorySelect = document.getElementById("category_select");
const amountInput = document.getElementById("amount_input");
const infoInput = document.getElementById("info");
const dateInput = document.getElementById("date_input");
const addBtn = document.getElementById("add_btn");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const info = infoInput.value;
  const amount = amountInput.value;
  const date = dateInput.value;

  if (category === "") {
    alert("Please select category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (info === "") {
    alert("Please enter valid amount info");
    return;
  }
  if (date === "") {
    alert("Please select a date");
    return;
  }

  expenses.push({ category, amount, info, date });

  if (category === "Income") {
    totalAmount += amount;
  }
  if (category === "Expense") {
    totalAmount -= amount;
  }
  totalAmountCell.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const infoCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);
    if (category === "Income") {
      totalAmount -= amount;
    }
    if (category === "Expense") {
      totalAmount += amount;
    }
    totalAmountCell.textContent = totalAmount;
    expenseTableBody.removeChild(newRow());
  });

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  infoCell.textContent = expense.info;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
  if (category === "Income") {
    totalAmount += amount;
  }
  if (category === "Expense") {
    totalAmount -= amount;
  }
  totalAmountCell.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const infoCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);
    if (category === "Income") {
      totalAmount -= amount;
    }
    if (category === "Expense") {
      totalAmount += amount;
    }
    totalAmountCell.textContent = totalAmount;
    expenseTableBody.removeChild(newRow());
  });

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  infoCell.textContent = expense.info;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}

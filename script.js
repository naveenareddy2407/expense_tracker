let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function save() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateSummary() {
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  document.getElementById('balance').textContent = `$${(income - expenses).toFixed(2)}`;
  document.getElementById('income').textContent = `$${income.toFixed(2)}`;
  document.getElementById('expenses').textContent = `$${expenses.toFixed(2)}`;
}

function render() {
  const list = document.getElementById('transactionList');
  list.innerHTML = '';
  if (!transactions.length) {
    list.innerHTML = 'No transactions yet';
    return;
  }
  transactions.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = t.type + '-item';
    li.innerHTML = `${t.description}
      ${t.type === 'income' ? '+' : '-'}$${t.amount.toFixed(2)}
      ×`;
    list.appendChild(li);
  });
}

function del(i) {
  transactions.splice(i, 1);
  save(); updateSummary(); render();
}

document.getElementById('transForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const desc = document.getElementById('desc').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;
  if (!desc || !amount || amount <= 0) return;
  transactions.unshift({ description: desc, amount, type });
  save(); updateSummary(); render();
  this.reset();
});

updateSummary(); render();
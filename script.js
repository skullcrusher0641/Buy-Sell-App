function buy() {
    if (!document.getElementById('item').value || !document.getElementById("price").value) {
        alert("Enter Item and Price First");
        return;
    }
    let transactionContainer = document.querySelector(".transaction-container");
    let budgetDisplay = document.getElementById("priceBudget");
    let itemInput = document.getElementById('item').value;
    let priceInput = document.getElementById("price").value;

    
    let transactionRow = document.createElement("div");
    transactionRow.className = "transaction-row";
    transactionRow.innerHTML = `
        <div class="item">${itemInput}</div>
        <div class="price negative">- $${priceInput}</div>
    `;

    transactionContainer.appendChild(transactionRow);

  
    let currentBudget = budgetDisplay.innerText.replace("$", "");
    budgetDisplay.innerText = `$${+currentBudget - +priceInput}`;
    budgetDisplay.style.color = "red";

    setTimeout(() => {
        budgetDisplay.style.color = 'black';
    }, 2000);

    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
}

function sell() {
    if (!document.getElementById('item').value || !document.getElementById("price").value) {
        alert("Enter Item and Price First");
        return;
    }
    let transactionContainer = document.querySelector(".transaction-container");
    let budgetDisplay = document.getElementById("priceBudget");
    let itemInput = document.getElementById('item').value;
    let priceInput = document.getElementById("price").value;

   
    let transactionRow = document.createElement("div");
    transactionRow.className = "transaction-row";
    transactionRow.innerHTML = `
        <div class="item">${itemInput}</div>
        <div class="price positive">+ $${priceInput}</div>
    `;

    transactionContainer.appendChild(transactionRow);


    let currentBudget = budgetDisplay.innerText.replace("$", "");
    budgetDisplay.innerText = `$${+currentBudget + +priceInput}`;
    budgetDisplay.style.color = "green";

    setTimeout(() => {
        budgetDisplay.style.color = 'black';
    }, 2000);

     document.getElementById("item").value = "";
    document.getElementById("price").value = "";
}
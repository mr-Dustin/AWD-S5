let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;

const prices = {
  item1: 290,
  item2: 290,
  item3: 290,
  item4: 560,
  item5: 490,
  item6: 750,
};

function updateCounter(itemId, quantity) {
  document.getElementById(`quantity${itemId}`).innerText = quantity;
}

function updateTotalItems() {
  const totalItems =
    quantity1 + quantity2 + quantity3 + quantity4 + quantity5 + quantity6;
  document.getElementById("totalItems").innerText = totalItems;
}

function calculateTotalBill() {
  const totalBill =
    quantity1 * prices.item1 +
    quantity2 * prices.item2 +
    quantity3 * prices.item3 +
    quantity4 * prices.item4 +
    quantity5 * prices.item5 +
    quantity6 * prices.item6;
  document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}

$("#submitOrder").click(function () {
  const name = $("#name").val();
  const address = $("#address").val();
  const contact = $("#contact").val();
  const cashInput = parseFloat($("#cashInput").val());

  const totalBill =
    quantity1 * prices.item1 +
    quantity2 * prices.item2 +
    quantity3 * prices.item3 +
    quantity4 * prices.item4 +
    quantity5 * prices.item5 +
    quantity6 * prices.item6;
  const change = cashInput - totalBill;

  const invoice = `
        <h2>Sales Invoice</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Total Bill:</strong> PHP${totalBill.toFixed(2)}</p>
        <p><strong>Cash Payment:</strong> PHP${cashInput.toFixed(2)}</p>
        <p><strong>Change:</strong> PHP${change.toFixed(2)}</p>
    `;
  $("#invoiceContent").html(invoice);
  $("#invoiceModal").modal("show");
});

$(".counter button").click(function () {
  const itemId = $(this).attr("id").replace("minus", "").replace("plus", "");
  const operation = $(this).attr("id").includes("minus") ? -1 : 1;

  switch (itemId) {
    case "1":
      quantity1 += operation;
      updateCounter(1, quantity1);
      break;
    case "2":
      quantity2 += operation;
      updateCounter(2, quantity2);
      break;
    case "3":
      quantity3 += operation;
      updateCounter(3, quantity3);
      break;
    case "4":
      quantity4 += operation;
      updateCounter(4, quantity4);
      break;
    case "5":
      quantity5 += operation;
      updateCounter(5, quantity5);
      break;
    case "6":
      quantity6 += operation;
      updateCounter(6, quantity6);
      break;
    default:
      break;
  }
  updateTotalItems();
  calculateTotalBill();
});

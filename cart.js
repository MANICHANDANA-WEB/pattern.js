function calculateTotal() {
    
  let cart = [
    { name: "Dress", price: 1200, quantity: 1 },
    { name: "Shoes", price: 2000, quantity: 1 },
    { name: "Bag", price: 1500, quantity: 2 }
  ];

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }

  console.log("Total Price before discount:", totalPrice);

  let discount = 0;

  if (totalPrice >= 5000) {
    discount = totalPrice * 0.20; 
  } else if (totalPrice >= 3000) {
    discount = totalPrice * 0.10; 
  } else {
    discount = 0;
  }

  let finalPrice = totalPrice - discount;
  console.log("Discount:", discount);
  console.log("Final Price:", finalPrice);

  let paymentMode = "UPI";

  switch (paymentMode) {
    case "UPI":
      console.log("Payment Mode: UPI");
      break;

    case "Card":
      console.log("Payment Mode: Debit/Credit Card");
      break;

    case "Cash":
      console.log("Payment Mode: Cash on Delivery");
      break;

    default:
      console.log("Invalid Payment Mode");
  }
}

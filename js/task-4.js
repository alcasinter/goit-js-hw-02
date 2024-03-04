function getShippingCost(country) {
  let shippingCost;
  switch (country) {
    case "China":
      shippingCost = 100;
      break;
    case "Chile":
      shippingCost = 250;
      break;
    case "Australia":
      shippingCost = 170;
      break;
    case "Jamaica":
      shippingCost = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return "Shipping to " + country + " will cost " + shippingCost + " credits";
}

console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 

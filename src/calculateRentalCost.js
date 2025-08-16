/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let total = 0;
  const costOfRent = 40;
  const basicDisc = 20;
  const longTermDisc = 50;

  if (days < 3) {
    total = days * costOfRent;
  }

  if (days >= 3 && days < 7) {
    total = days * costOfRent - basicDisc;
  }

  if (days >= 7) {
    total = days * costOfRent - longTermDisc;
  }

  return total;
}

module.exports = calculateRentalCost;

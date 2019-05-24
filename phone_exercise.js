

bank = prompt( "How much money do you have on your Balance?" );
bankAccountBalance = Number(bank);
console.log(bankAccountBalance);


// // if(bankAccountBalance == NaN){
// //     alert("Oops! Enter a number without any characters")
// //     bank = prompt( "How much money do you have on your Balance?" );
// //     bankAccountBalance = Number(bank);
// // }
// // console.log(bankAccountBalance);

// spending = prompt( "How much money can spent for the thing you like?" );
// spendingThreshold = Number(spending);
// console.log(spendingThreshold);

// phone = prompt( "Hom much does your favorite phone costs?");
// phonePrice = Number(phone);
// console.log(phonePrice);

// accessories = prompt( "How much does an accessory costs for this phone?" );
// accessoriesPrice = Number(accessories);
// console.log(accessoriesPrice);



bankAccountBalance = 10000;
spendingThreshold = 9000;
phonePrice = 1000;
accessoriesPrice = 100;
        // phones = 7, access=6, spent without taxes = 6916, taxes=2964; withtaxes = 9880; balance = 120;


numberOfAccessories = 0;
numberOfPhones = 0;
spent = 0;

function ValuesWithTaxes(spent) {
	var taxRate = 1.0;// calculate the new amount with the tax
	spent = spent + (spent * taxRate);
	return spent;
}

for(let i = 1; bankAccountBalance >= phonePrice && bankAccountBalance >= phonePrice + ValuesWithTaxes(phonePrice); i++ ){
    bankAccountBalance = bankAccountBalance - ValuesWithTaxes(phonePrice);
    numberOfPhones = numberOfPhones+1;
    spent = spent + ValuesWithTaxes(phonePrice);
  

if(bankAccountBalance >= accessoriesPrice && bankAccountBalance >= accessoriesPrice + ValuesWithTaxes(accessoriesPrice)){
    
    if(spent < spendingThreshold){
        bankAccountBalance = bankAccountBalance - ValuesWithTaxes(accessoriesPrice);
        numberOfAccessories = numberOfAccessories + 1 ;
        spent = spent + ValuesWithTaxes(accessoriesPrice);
        }
    } 
}


console.log("Number of bought phones = ", numberOfPhones);
console.log("Number of bought accessories = ", numberOfAccessories);
console.log("Spent Money without taxes = ", spent - (ValuesWithTaxes(spent) - spent)   + "$");
console.log("Taxes = ", ValuesWithTaxes(spent) - spent   + "$");
console.log("Spent Money with taxes = ", spent + "$");

console.log("Current balance = ", bankAccountBalance + "$");




/*- Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) 
until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
- After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
- Finally, check the amount against your bank account balance to see if you can afford it or not.
- You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," 
    as well as a variable for your "bank account balance.""
- You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
- Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. 
You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/
// const SPENDING_THRESHOLD = 9000;
// const TAX_RATE = 0.1;
// const PHONE_PRICE = 1000;
// const ACCESSORY_PRICE = 100;

// var bank_balance = 10000;
// var amount = 0;

// function calculateTax(amount) {
// 	return amount * TAX_RATE;
// }

// function formatAmount(amount) {
// 	return "$" + amount.toFixed( 2 );
// }

// // keep buying phones while you still have money
// while (amount < bank_balance) {
// 	// buy a new phone!
// 	amount = amount + PHONE_PRICE;

// 	// can we afford the accessory?
// 	if (amount < SPENDING_THRESHOLD) {
// 		amount = amount + ACCESSORY_PRICE;
// 	}
// }

// // don't forget to pay the government, too
// amount = amount + calculateTax( amount );

// console.log(
// 	"Your purchase: " + formatAmount( amount )
// );
// // Your purchase: $334.76

// // can you actually afford this purchase?
// if (amount > bank_balance) {
// 	console.log(
// 		"You can't afford this purchase. :("
// 	);
// }
// You can't afford this purchase. :(
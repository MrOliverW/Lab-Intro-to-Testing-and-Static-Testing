

- **Happy-path test:** Tests a function using valid input and confirms that it produces the expected result.
//Adding
If addITEMS = char = pass // If the added item is a character, the test should pass

//Deleting
If deleteITEM = NaN = pass // If the deleted item is not a number, the test should pass

//Subtotal
If subtotal = 0 = pass // If the subtotal is zero, the test should pass

//Total
If total = subtotal + tax = pass // If the total is equal to the subtotal plus tax, the test should pass

//Receipt
If console.log = receiptPrint = pass // If the receipt is printed correctly, the test should pass

- **Unhappy-path test:** Tests how a function responds to invalid input or an incorrect value.

If test = fail
    console.log("test failed")



- **Edge-case test:** Tests an unusual value or a value near the limits of the function's expected input.

If test = char( < 99) = pass // If the input character is less than 99, the test should pass
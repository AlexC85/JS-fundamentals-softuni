function orders(prod, quantity) {
/*     coffee - 1.50 water - 1.00 coke - 1.40· snacks - 2.00 */
let price = 0;
let result = 0;
let finalPrice = (x, y) => x*y;
switch (prod){
case ('coffee') : price = 1.50; break;
case ('water') : price = 1.00; break;
case ('coke') : price = 1.40; break;
case ('snacks') : price = 2.00; break;
}
result = finalPrice(price, quantity);
console.log(result.toFixed(2))

}
orders('water', 5)
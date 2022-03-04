// Problem #6

// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");
// let c = +prompt("Enter third number: ");

// if(a>b && a>c){
//   console.log(`Maximum number is ${a}`)
// }
// else if(b>a && b>c){
//   console.log(`Maximum number is ${b}`);
// }
// else if(c>a && c>b){
//   console.log(`Maximum number is ${c}`);
// }
// else if(a==b & a>c){
//   console.log(`Maximum number is ${a}`);
// }
// else if(b==c & b>a){
//   console.log(`Maximum number is ${b}`);
// }
// else if(c==a & c>b){
//   console.log(`Maximum number is ${c}`);
// }
// else{
//   console.log("Numbers are equal");
// }


// Problem #7

// let a = +prompt("Enter length of first side: ");
// let b = +prompt("Enter length of second side : ");
// let c = +prompt("Enter length of third side: ");

// if((a+b)>c && (a+c)>b && (b+c)>a){
//   console.log("Yes!");
// }
// else{
//   console.log("No!");
// }


// Problem #8

// let a = +prompt("Enter length of first side: ");
// let b = +prompt("Enter length of second side : ");
// let c = +prompt("Enter length of third side: ");

// if(a==b==c){
//   console.log("Teng tomonli");
// }
// else if(a==b || a==c || b==c){
//   console.log("Teng yonli");
// }
// else{
//   console.log("Turli tomonli");
// }


// Problem #9

// let a = +prompt("Enter length of first side: ");
// let b = +prompt("Enter length of second side : ");
// let c = +prompt("Enter length of third side: ");

// if(a**2+b**2==c**2 || a**2+c**2==b**2 || b**2+c**2==a**2 ){
//   console.log("Yes!");
// }
// else{
//   console.log("No!");
// }


// Problem #10

// let a = +prompt("Enter finger number: ");

// if(a==1){
//   console.log("Bosh barmoq");
// }
// else if(a==2){
//   console.log("Ko'rsatkich barmoq");
// }
// else if(a==3){
//   console.log("O'rta barmoq");
// }
// else if(a==4){
//   console.log("Nomsiz barmoq");
// }
// else if(a==5){
//   console.log("Kichik barmoq");
// }
// else{
//   console.log("Noto'g'ri ma'lumot kiritildi");
// }


// Problem #11

// let n = +prompt("Enter a number: ");
// let sum = 0;
//   for(sum = 0; n > 0;  sum += n % 10,  n = parseInt(n / 10)){
//   }
//   console.log(sum);
  

// Problem #12

// let n = +prompt("Enter a number: ");
// let sum = 0;
//   for(let i=0; i<=n; i++ ){
//     sum += i;
//   }
//   console.log(sum);
 

// Problem #13

// let n = +prompt("Enter a number: ");
// let sum = 0;
//   for(let i=0; i<=n; i+=2 ){
//     sum += i;
//   }
//   console.log(sum);
 

// Problem #14

// let n = +prompt("Enter Fibonacci number: ");
// let n1 = 0;
// let n2 = 1;

// for (let i = 1; i <= n; i++) {
//   console.log(n1);
//   f = n1 + n2;
//   n1 = n2;
//   n2 = f;
// }
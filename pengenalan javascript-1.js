/* Buat variable var dengan deklarasi dulu */
var Harga; //Declaration
Harga = 2000; //assignment

/* buat variable var yg langsung diberi nilai */
var Harga = 2000

var diskon = 1000 // Gbobal scope
if (true){
	var diskon = 600 // Global scope
}
console.log(diskon)
// output: 600
// karena var adalah global scope

/* sebelum ada es6, solusinya membuat function scope -> local scope */
var diskon = 1000 //global scope
function diskonscope(){
	var diskon = 600 //local scope
console.log(diskon) //output: 600
}
diskonscope()
console.log(diskon) //output 1000


var name; //Declaration
console.log(name) // output: undefined

name ='aries' // Assignment
console.log(name) // output: aries

var name ='johnson' // redeclared and reassigned      
console.log(name)// output : johnson

name = 'sapi' // Variabel di-assign dulu
var name; //kemudian baru dideklarasi
console.log(name) //output: sapi

/* di belakang layer terjadi hoisting */
var name;
name = 'sapi'
console.log(name) //output: sapi

//* buat variable yg langsung kita kasih nilai*/
let pesan = "hei saying";
console.log(pesan);

/* buat banyak variable sekaligus */
let nama = "gajah", //* dipisahkan dengan koma
umur = 6, //* dipisahkan dengan koma
jenis = "jantan"

console.log(nama); //*output: gajah
console.log(umur); //*output: 6
console.log(jenis); //*output: jantan

let diskon = 800
if (true) { // tanda awal scope
	let diskon = 500 // hanya bisa di akses dalam scope
	console.log(diskon) // output: 500
} // tanda akhir scope
console.log(diskon) //output: 800

let name; // declaration
console.log(name) // output: undefined
name ='bujang' //assignment
console.log(name) //output: bujang
name ='bujang lapuk' //reassigned
console.log(name) //output: bujang lapuk
let name ='boss bujang'; // can not redeclared
console.log(name)

//output: syntaxerror: identifier 'name' has already been declared

// Contoh pertama di codesandbox.io
name = "bot" //assignment
let name; //declaration
console.log(name); //output: Bot
// contoh pertama di console web browser
name = "bot"; //assignment
let name; //declaration
console.log(name);
// output: cannot access 'name' before initialization

/* setelah revisi kode */
let name = "bot" //Initialization
console.log(name); //output: Bot

// Contoh kedua
let message = "Hello"
function greetings(){
	console.log(message)
	let message = "hello world!"
}
greetings()
// Output: uncaught referanceError: cannot access 'message' before initialization

/* setelah kode direvisi */
let message = "hello"
function greetings(){
	let message = "Hello world!"
	console.log(message)
}
greetings()
// output: Hello World!

const diskon = 1000
if (true) { //tanda awal scope
	const diskon = 600 //hanya bisa di akses dalam scope
	console.log(diskon) //output: 600
} //tanda akhir scope
console.log(diskon) //output: 1000

/* tidak bisa ubah nilai bumi */
const bumi = "datar";
bumi = "datar";
// output: typeError: invalid assignment to const 'bumi'

/* tidak bisa juga deklarasi ulang */
const bumi = "datar";
// output: syntaxError: identifier 'bumi' has already been declared

/* Object dengan variable const masih bisa diubah propertynya */
const obj = {id:1, name:'bujang'}
obj.location="Jakarta"
console.log(obj) // output: { id:1, name:'bujang', location:'Jakarta'}
// tapi tidak bisa di reassigned
obj={} //output: TypeError: assignment to constant variable.

/* Array dengan variable const masih bisa diubah propertynya */
const arr = [1,2,3,4]
arr.push(5)
console.log(arr) //output: [1,2,3,4,5]
// tapi tida bisa di reassigned
arr=[] //output: TypeError: Assignment to constant variable.

name = "bujang lapuk" //Assignment
const name; // Declaration
console.log(name);
// Output: Uncaught syntaxerror: missing initializer in const declaration

let today = "good";
today = "bad";
console.log(today)
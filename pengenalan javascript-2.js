const name = "bujang";
const pekerjaan = "Developer fakebook";
console.log(`halo namaku ${name} pekerjaanku adalah seorang ${pekerjaan}`)

// output: Halo, namaku bujang, aku kerja sebagai developer fakebook

const p = "bujang adalah seorang web deverloper di fakebook";
console.log(p.replaceAll('bujang', 'inem'));

// expected output : "inem adalah seorang web developer di fakebook"

let m = "abcdefghijklmn";
console.log(m.substring(2,6));

// expected output: c,d,e,f

let text = "Hello World!";
let resultUpper = text.toUpperCase();
Console.log(resultUpper) // expected output: HELLO WORLD!

let text = "Hello World!";
let resultLower = text.toLowerCase();
console.log(resultLower) // expected output: hello world!

let raw = "		Hello bujang!		"
console.log(raw.trim()); // expected output: Hello bujang!

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var len = txt.length;
console.log(len); // expected output: 26

let teks = "bujang merdeka";
let hasilSlice = teks.slice(0,7);
console.log(hasilSlice); // expected output : bujang

let merdeka = "17 agustus 1945";
const arrayMerdeka = merdeka.split(" ");
let tanggalMerdeka = arrayMerdeka[0];
console.log(tanggalMerdeka); //expected outcome : 17

let bulanMerdeka = arrayMerdeka[1];
console.log(bulanMerdeka); // expected outcome : Agustus

let tahunMerdeka = arrayMerdeka[2];
console.log(tahunMerdeka); //expected outcome: 1945

let text = "Hello Bujang!";
let result = text.substring(0, 5);
console.log(result); // output: "Hello"

// syntax untuk mengubah string '123' menjadi number
parseInt("456");
// syntax untuk mengubah data number menjadi string
let z = 456;
z.toString() 
console.log(z) // Output '123'

let a = 1;
let b = 2;
let apakahAsamaDenganB = a == b;
console.log(apakahAsamaDenganB); //expected output : false

// logical operators = di gunakan untuk menggabung atau memanipulasi value Boolean

// (true or false)

// AND = &&
// OR = ||
// NOT = !

// Jika cuaca di bawah 0 maka cuaca buruk, jika cuaca diatas 30 maka bagus
const temp = -20;
if(temp > 0 && temp <= 30){
	console.log("Cuaca bagus")
}
else{
	console.log("Cuaca buruk")
} 
//expected outcome : temp >0 & dibawah 30 = cuaca bagus
//expected outcome : temp <0 & diatas 30 = cuaca buruk

let pesan = "hello bujang";
console.log(typeof (pesan));
// output: string

console.log(typeof 10);
// output: number

console.log(typeof (true));
// output: boolean

const myAge = 60
const yourAge = 45

// Soal (utas syntax)

//soal 1
const ourAge = myAge + yourAge;
console.log(ourAge); //output: 105
//soal 2
console.log(myAge*yourAge) //output: 2700
//soal 3
console.log(ourAge/myAge) //output: 1.75
//soal 4
console.log(yourAge+myAge) //output: 105
//soal 5
console.log(myAge-yourAge) //output: 15
//soal 6
console.log(myAge%yourAge) //output: 15


console.log(Math.random()); // angka acak
console.log(Math.PI);// keliling lingkaran (3.14)
console.log(Math.round(4.4)); // pembulatan angka
console.log(Math.abs(-4.7)); // menghasilkan nilai absolut 
console.log(Math.floor(4.7)); // membulatkan ke bawah dan menghasilkan bilangan bulat terbesar
console.log(Math.pow(8, 2)); // nilai basis yang dipangkatkan.
console.log(Math.ceil(4.4)); // menghasilkan bilangan bulat terkecil yang lebih besar
console.log(Math.sqrt(64)); // menghasilkan akar kuadrat suatu angka
console.log(Math.cbrt(8)); // menghasilkan akar pangkat tiga suatu bilangan
console.log(Math.max(1,3,5)); // angka terbesar yang diberikan sebagai parameter masukan
console.log(Math.min(1,3,5)); // angka terkecil yang diberikan sebagai parameter masukan
console.log(Math.round(4.7)); // nilai suatu bilangan yang dibulatkan ke bilangan bulat terdekat.

let a = new Date()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds()); 
console.log(a.getMilliseconds());
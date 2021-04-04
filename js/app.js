alert('Welcome to our site for laptops');

let userNAme = prompt ( 'Please enter your username' );
console.log( userNAme , typeof userNAme );

let useLaptop = prompt ( 'What do you need to use a laptop? Games, design, programming.' );
console.log( useLaptop , typeof useLaptop );

let budget = prompt ( 'What is your budget to pay ?' );
console.log( budget , typeof budget );

let device = prompt ( 'Which of these types of devices would you like to have? Msi, Razer, Asus, Dell, Acer, Hp, Mac.' );
console.log( device , typeof device );

budget = parseInt(budget);

console.log( budget , typeof budget );

alert('Hello '+ userNAme +', your type of business is '+ useLaptop +', the payment budget is '+ budget +', the type of device you want to have is '+ device +'.');
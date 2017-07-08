// var newDiv = document.createElement('div')
// var text = document.createTextNode('sup')
// var body = document.getElementById('headers')
// var newImg = document.createElement('img')
// //send new div to body
// body.appendChild(newDiv)
// //put text into newDiv
// newDiv.appendChild(text)
// //give class of 'cyan' to newDiv
// newDiv.className = "cyan"
// //send newImg into newDiv
// newDiv.appendChild(newImg)
// //give newImg a source to a img
// newImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg")

	

// var boolean = true
// 	console.log(boolean.length)

// var string = "i'm a starboy"
// 	console.log(string.length)

// var num = 1,2,3
// 	console.log(num.length)

// var array = [1,true, "yay"]
// 	console.log(array.length)

// var object = {
// 	pokemon: "pikachu",
// 	car: toyota,
// 	age: 4;
// },{
// 	pokemon: "charmander",
// 	car: honda,
// 	age 6;
// }
// 	console.log(object.length)

// var poke = ['tuna', 'salmon', 'mackeral', 'ikura', 'uni', 'hamachi', 'tamago']
	
// 	poke.pop()

// // 	console.log(poke)
// var num = [23, 24, 985, 4, 5]
// console.log(num.sort(function (a, b){ return a-b } ))

var accounts = [
	{ 
		username: "bob",
		password: "pw"
	},
	{
		username: "alice",
		password: "pw"
	}
]

function register() {
	var usernameInput = document.getElementById("usernameInput").value
	var passwordInput = document.getElementById("passwordInput").value

	var newUser = {
		username: usernameInput,
		password: passwordInput
	}

	for(var i=0; i < accounts.length; i++) {

		if(usernameInput == accounts[i].username) {
		console.log("username already exist")
		return
		}

		else { 
		accounts.push(newUser)
		console.log("registration successful")
		return
		}
	}		
}

function login() {
	var name = document.getElementById("usernameInput").value
	var pw = document.getElementById("passwordInput").value
	
	for(var i = 0; i < accounts.length; i++) {

		if(name !== accounts[i].username || pw !== accounts[i].password) {
			console.log("try again")
			return	
		}
	
		else if(name == accounts[i].username && pw == accounts[i].password) {
		console.log("login successful")
		return
		}
	}
}
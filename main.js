
// For Header
let header = document.querySelector("header")

  

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("small")
  } else {
    header.classList.remove("small")
  }
} 

// For highlights nav
let highlightNavs = document.querySelectorAll(".highlights_nav .nav_item")

highlightNavs.forEach(item => {
	item.addEventListener("click", () => {
		highlightNavs.forEach(targ => {
			targ.classList.remove("nav_item-active")
		})
		item.classList.add("nav_item-active")

	})
})


// For highlights
let highlights = {
	today: [
		{
		name: "Chohe Pancakes",
		sides: "Chicken Wings",
		toppings: "Pepper Sauce",
		price: "5000"
	}, 
	{
		name: "Chohe Pancakes",
		sides: "Chicken Wings",
		toppings: "Pepper Sauce",
		price: "5000"
	}
	],
	week: [
	{
		name: "Sapa Pancakes",
		sides: "Chicken Wings",
		toppings: "Pepper Sauce",
		price: "5000"
	}
	],
	month: [
	{
		name: "Zazu Pancakes",
		sides: "Chicken Wings",
		toppings: "Zeh Sauce",
		price: "5000"
	}
	],
}

let createHighlight = (data, target) => {
	let title = document.createElement("h3")
	title.innerText = data.name
		let sides = document.createElement("p")
	sides.innerText = data.sides
	let toppings = document.createElement("p")
	toppings.innerText = data.toppings
	let price = document.createElement("p")
	price.innerText = "N" + data.price
	let order = document.createElement("button")
	order.innerText = "Place your Order"
	
	let info = document.createElement("div")
	info.classList.add("order_info")
	info.appendChild(title)
	info.appendChild(sides)
	info.appendChild(toppings)
	info.appendChild(price)
	info.appendChild(order)
	let img = document.createElement("div")
	img.classList.add("order_img")

		let body = document.createElement("div")
	body.classList.add("order")
	body.appendChild(img)
	body.appendChild(info)	
	target.appendChild(body)	
}


let highlightsSlides = document.querySelector(".highlights_slides")

highlights.today.forEach(item => {
	createHighlight(item, highlightsSlides)
	
})
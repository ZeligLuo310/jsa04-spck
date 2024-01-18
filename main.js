// array object
// let data = [
//     {
//         productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
//         price: "35",
//         image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
//     },

//     {
//         productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
//         price: "34",
//         image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
//     },

//     {
//         productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
//         price: "35",
//         image: "https://dosi-in.com/file/detailed/497/dosiin-levents-ao-thun-levents-travellight-brown-497273497273.jpg?w=670&h=670&fit=fill&fm=webp"
//     },

//     {
//         productName: "LEVENTS® TRAVEL TEE/ BLACK",
//         price: "22",
//         image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
//     },

//     {
//         productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
//         price: "38",
//         image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
//     },

//     {
//         productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
//         price: "42",
//         image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
//     },

//     {
//         productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
//         price: "37",
//         image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
//     },

//     {
//         productName: "LEVENTS® EARTH TEE/ PURPLE",
//         price: "36",
//         image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
//     },

//     {
//         productName: "LEVENTS® PLAY LOGO TEE/ PINK",
//         price: "29",
//         image: "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg"
//     },
// ]

init()

function init() {
    getProductAPI()
}

// fetch API
async function getProductAPI() {
    let data = await fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) // lấy dữ liệu từ fetch() bỏ vào data
        .then(json => json) // chuyển response thành json sau đó tạo thành array/object và lưu vào biến data
    console.log(data)
    loadProducts(data)
}

let product_area = document.getElementById("product-area")

// data[i].productName

function loadProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let output = `<div class="product col-3">
        <h3 class="product-title">${data[i].title}</h3>
        <img src="${data[i].image}" alt="" class="product-image">
        <div class="product-footer">
            <h5>$<span class="product-price">${data[i].price}</span></h5>
            <button class="product-btn" onclick="addProduct(event)">Buy now!</button>
        </div>
        </div>`
        product_area.innerHTML += output
    }
}

function searchProduct() {
    let search_input = document.getElementById("searchbar").value
    search_input = search_input.toUpperCase()
    let product_titles = document.getElementsByClassName("product-title") // array
    let products = document.getElementsByClassName("product")

    for (let i = 0; i < products.length; i++) {
        // nếu như trong tên product mà có chữ nhập vào từ search input thì thẻ product hiện lên
        if (product_titles[i].innerText.includes(search_input)) {
            products[i].style.display = 'block'
        }
        // nếu không thì ẩn thẻ product đi
        else {
            products[i].style.display = 'none'
        }
    }
}

let id = 0
let total = 0
let cartBody = document.getElementById("cart-body")
let cartTotal = document.getElementById("total-price")

let cartBtn = document.getElementById("cart-btn")
let cartWrapper = document.getElementById("cart-wrapper")
cartBtn.addEventListener("click", () => {
    cartWrapper.classList.toggle("cart-on")
})

let addProduct = (event) => {
    let title = event.target.parentElement.parentElement.childNodes[1].innerText
    let price = event.target.parentElement.childNodes[1].childNodes[1].innerText
    id += 1
    total += parseInt(price)

    let output = `<tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>$${price}</td>
    </tr>`

    cartBody.innerHTML += output
    cartTotal.innerHTML = total
}

// ES6 Arrow Function
// let function = () => {
//     -- your code here --
// }

// Viết hàm tính tổng 2 số
// let tongHaiSo = (a, b) => {
//     return a + b
// }

// Bài 1
// ax + b = 0 => x (nhập a, b)
let equation = (a, b) => {
    // parseFloat(): đưa phép chia ra số thực
    return parseFloat(-b/a)
}

// Bài 2
// cạnh huyền = cgv1^2 + cgv2^2
let hypotenuse = (cgv1, cgv2) => {
    // return Math.sqrt(cgv1*cgv1 + cgv2*cgv2)
    // Math.pow(x,y) = x^y
    return Math.sqrt(Math.pow(cgv1, 2) + Math.pow(cgv2, 2))
}
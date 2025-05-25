// JavaScript to handle the login and signup forms
let loggedIn = false;

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
}

function showSignup() {
    document.getElementById('signupForm').style.display = 'block';
}

function closePopup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
}

function login() {
    // Implement login logic here
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // For simplicity, we'll just check if both fields are filled
    if (username && password) {
        loggedIn = true;
        alert('Login successful!');
        closePopup();
    } else {
        alert('Please enter both username and password.');
    }
}

function signup() {
    // Implement signup logic here
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // For simplicity, we'll just check if both fields are filled
    if (username && password) {
        loggedIn = true;
        alert('Signup successful!');
        closePopup();
    } else {
        alert('Please enter both username and password.');
    }
}

// Existing JavaScript for product selection
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "NIKE",
        price: 4000,
        colors: [
            {
                code: "black",
                img: "./img/travis.png",
            },
            {
                code: "blue",
                img: "",
            },
        ],
    },
    {
        id: 2,
        title: "ADIDAS",
        price: 3500,
        colors: [
            {
                code: "lightgray",
                img: "./img/adiyez.png",
            },
            {
                code: "green",
                img: "",
            },
        ],
    },
    {
        id: 3,
        title: "PUMA",
        price: 3800,
        colors: [
            {
                code: "lightgray",
                img: "./img/pumax.png",
            },
            {
                code: "green",
                img: "",
            },
        ],
    },
    {
        id: 4,
        title: "NEW BALANCE",
        price: 4500,
        colors: [
            {
                code: "gray",
                img: "./img/newba.png",
            },
            {
                code: "green",
                img: "",
            },
        ],
    },
    {
        id: 5,
        title: "COLLABS",
        price: 5500,
        colors: [
            {
                code: "brown",
                img: "./img/travis.png",
            },
            {
                code: "green",
                img: "",
            },
        ],
    },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    if (!loggedIn) {
        alert("Please login first.");
    } else {
        payment.style.display = "flex";
    }
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

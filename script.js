let angle = 0;
let direction = 1;

const toggleMenu = () =>{
    const popupMenu = document.getElementById('menu-popup');
    popupMenu.style.display = popupMenu.style.display === "block" ? "none" : "block";

    const menu = document.getElementById('rotate')
    angle += 180 * direction;
    menu.style.transform = `rotate(${angle}deg)`
    menu.style.transition = '0.5s'
    direction *= -1;
}

//to display none the menu popup when it is not closed
window.onload = function(){
    var div = document.getElementById('menu-popup')

    function checkWidth(){
        var deviceWidth = window.innerWidth;
        if(deviceWidth < 1100){
            div.style.display = "none";
        }else{
            div.style.display = 'flex'
        }
    }

    checkWidth();
    window.addEventListener('resize',checkWidth)
}

const popup1 = () =>{
    const products = document.getElementById('popup1');
    products.style.display = products.style.display === "block" ? "none" : "block";

    // for the rotation of the product arrow when in menu
    const icon = document.getElementById('arrow1')
    angle += 180 * direction;
    icon.style.transform = `rotate(${angle}deg)`
    icon.style.transition = '0.5s'
    direction *= -1;
} 

//for scrolling on the about us part
window.smoothScroll = function(target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 1);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

//for highlighting the selected navigation option
const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

const home = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'block'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'block'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'


        let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const addToCart = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'none'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'block'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const loginPage = () =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'none'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'block'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'
}

const signUpPage = () =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'none'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'block'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'
}

const User = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'none'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'block'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

//searchbar for serum
document.getElementById("myInput").addEventListener("keyup", function () {
    var input, filter, figures, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    figures = document.querySelectorAll(".product figure");

    figures.forEach(function (figure) {
        txtValue = figure.textContent || figure.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figure.style.display = "";
        } else {
            figure.style.display = "none";
        }
    });
});

//searchbar for soap
document.getElementById("myInput1").addEventListener("keyup", function () {
    var input, filter, figures, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    figures = document.querySelectorAll(".product figure");

    figures.forEach(function (figure) {
        txtValue = figure.textContent || figure.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figure.style.display = "";
        } else {
            figure.style.display = "none";
        }
    });
});

//searchbar for toner
document.getElementById("myInput2").addEventListener("keyup", function () {
    var input, filter, figures, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    figures = document.querySelectorAll(".product figure");

    figures.forEach(function (figure) {
        txtValue = figure.textContent || figure.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figure.style.display = "";
        } else {
            figure.style.display = "none";
        }
    });
});

//searchbar for foam
document.getElementById("myInput3").addEventListener("keyup", function () {
    var input, filter, figures, txtValue;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    figures = document.querySelectorAll(".product figure");

    figures.forEach(function (figure) {
        txtValue = figure.textContent || figure.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figure.style.display = "";
        } else {
            figure.style.display = "none";
        }
    });
});

//searchbar for cream
document.getElementById("myInput4").addEventListener("keyup", function () {
    var input, filter, figures, txtValue;
    input = document.getElementById("myInput4");
    filter = input.value.toUpperCase();
    figures = document.querySelectorAll(".product figure");

    figures.forEach(function (figure) {
        txtValue = figure.textContent || figure.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figure.style.display = "";
        } else {
            figure.style.display = "none";
        }
    });
});


const serumPage = (target) =>{

    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'block'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'block'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const soapPage = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'block'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'block'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const tonerPage = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'block'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'block'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const foamPage = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'block'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'block'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'none'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const creamPage = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const aboutus = document.getElementById('aboutUs')
    aboutus.style.display = 'block'

    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    const cartContainer = document.getElementById('add-to-cart-container')
    cartContainer.style.display = 'none'

    const userContainer = document.getElementById('user-container')
    userContainer.style.display = 'none'

    const serum = document.getElementById('serum-page')
    serum.style.display = 'none'

    const soap = document.getElementById('soap-page')
    soap.style.display = 'none'

    const toner = document.getElementById('toner-page')
    toner.style.display = 'none'

    const foam = document.getElementById('foam-page')
    foam.style.display = 'none'

    const cream = document.getElementById('cream-page')
    cream.style.display = 'block'

    const addProduct = document.getElementById('add-product')
    addProduct.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


//--------------------------------------------this is the add product feature-------------------------------
// Array to store products
let serum = [];
let soap = [];
let toner = [];
let foam = [];
let cream = [];

// Function to retrieve data from HTML and organize into arrays
function getDataAndOrganize() {
    // Iterate over each product container
    for (let i = 1; i <= 5; i++) {
        const containerId = `productContainer${i}`; // Generate container ID
        const container = document.getElementById(containerId); // Get container element
        const productFigures = container.querySelectorAll('figure'); // Get all figure elements within the container

        // Iterate over each figure within the container
        productFigures.forEach(figure => {
            // Extract product information from the figure
            const productName = figure.querySelector('figcaption h3').textContent;
            const productDescription = figure.querySelectorAll('figcaption')[1].textContent;
            const productPrice = figure.querySelectorAll('figcaption')[2].textContent.trim().slice(1); // Remove leading whitespace and currency symbol
            const productImage = figure.querySelector('img').src;

            // Create a new product object
            const newProduct = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: productImage
            };

            // Push the new product into the corresponding array based on the container ID
            switch (containerId) {
                case 'productContainer1':
                    serum.push(newProduct);
                    break;
                case 'productContainer2':
                    soap.push(newProduct);
                    break;
                case 'productContainer3':
                    toner.push(newProduct);
                    break;
                case 'productContainer4':
                    foam.push(newProduct);
                    break;
                case 'productContainer5':
                    cream.push(newProduct);
                    break;
                default:
                    // Handle invalid container ID
                    break;
            }
        });
    }
}

// Call the function to retrieve data and organize into arrays
getDataAndOrganize();

// Function to add product
function addProduct() {

    // Get form values
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0]; // Get the file object
    const productType = document.getElementById('productType').value; // Get the selected product type

    // Read the file as data URL
    const reader = new FileReader();
    reader.onload = function(event) {
        // Once the file is loaded, create a new product object
        const newProduct = {
            name: productName,
            description: productDescription,
            price: productPrice,
            image: event.target.result // Use the data URL as the image source
        };

        // Determine which array to push the new product into based on the selected product type
        let productArray;
        switch(productType) {
            case 'serum':
                productArray = serum;
                break;
            case 'soap':
                productArray = soap;
                break;
            case 'toner':
                productArray = toner;
                break;
            case 'foam':
                productArray = foam;
                break;
            case 'cream':
                productArray = cream;
                break;
            default:
                // Handle invalid product type
                break;
        }

        if (productArray) {
            productArray.push(newProduct);

            // Clear form inputs
            document.getElementById('productName').value = '';
            document.getElementById('productDescription').value = '';
            document.getElementById('productPrice').value = '';
            document.getElementById('productImage').value = '';

            // Display products
            displayProduct();
        }
    };

    // Read the file as data URL
    if (productImage) {
        reader.readAsDataURL(productImage);
    }
}

function displayProduct() {
    // Iterate over each product array and its corresponding product container
    const productArrays = [serum, soap, toner, foam, cream];
    productArrays.forEach((productArray, index) => {
        const containerId = `productContainer${index + 1}`; // Generate container ID
        const container = document.getElementById(containerId); // Get container element

        // Clear existing products in the container
        container.innerHTML = '';

        // Iterate over products in the array and create figure elements
        productArray.forEach(product => {
            const figure = document.createElement('figure');

            // Create image element
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;

            // Create caption elements
            const nameCaption = document.createElement('figcaption');
            nameCaption.innerHTML = `<h3>${product.name}</h3>`;
            const descriptionCaption = document.createElement('figcaption');
            descriptionCaption.textContent = product.description;
            const priceCaption = document.createElement('figcaption');
            priceCaption.textContent = `₱${product.price}`;

            // Create button element
            const addButton = document.createElement('button');
            addButton.textContent = 'ADD TO CART';

            // Append elements to figure
            figure.appendChild(img);
            figure.appendChild(nameCaption);
            figure.appendChild(descriptionCaption);
            figure.appendChild(priceCaption);
            figure.appendChild(addButton);

            // Append figure to container
            container.appendChild(figure);

        });
    });
}

// Add event listener to Add Product button
document.getElementById('addProductBtn').addEventListener('click', addProduct);
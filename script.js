//database
let users = [
    {
        name:"Admin",
        contact:"Admin",
        address:"Admin st. Admin City",
        email:"admin@email.com",
        password:"admin",
    }
];
//temporary for userlogin
let temp = [];

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

    const profileContainer = document.getElementById('profile-container')
    profileContainer.style.display = 'none'

    const footer = document.getElementById('footer')
    footer.style.display = 'block'


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
    let emailToFind = "admin@email.com";
    let temps = temp.find(temps => temps.email === emailToFind);
    if(temps){
        const addProduct = document.getElementById('add-product')
        addProduct.style.display = 'block'

        const homepageContainer = document.getElementById('homepage')
        homepageContainer.style.display = 'none'

        const aboutus = document.getElementById('aboutUs')
        aboutus.style.display = 'none'

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

        const footer = document.getElementById('footer')
        footer.style.display = 'none'

        const profileContainer = document.getElementById('profile-container')
        profileContainer.style.display = 'none'
    }else{
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

        const profileContainer = document.getElementById('profile-container')
        profileContainer.style.display = 'none'

        const footer = document.getElementById('footer')
        footer.style.display = 'none'

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

    const profileContainer = document.getElementById('profile-container')
    profileContainer.style.display = 'none'

    const footer = document.getElementById('footer')
    footer.style.display = 'block'

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

    const profileContainer = document.getElementById('profile-container')
    profileContainer.style.display = 'none'

    const footer = document.getElementById('footer')
    footer.style.display = 'block'

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

    const profileContainer = document.getElementById('profile-container')
    profileContainer.style.display = 'none'

    const footer = document.getElementById('footer')
    footer.style.display = 'block'

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

    const profileContainer = document.getElementById('profile-container')
    profileContainer.style.display = 'none'

    const footer = document.getElementById('footer')
    footer.style.display = 'block'

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

    const profileContainer = document.getElementById('profile-container')
    profileContainer.style.display = 'none'

    const footer = document.getElementById('footer')
    footer.style.display = 'block'

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
            const productPrice = parseFloat(figure.querySelectorAll('figcaption')[2].textContent.trim().slice(1)); // Remove leading whitespace and currency symbol
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
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productImage = document.getElementById('productImage').files[0]; // Get the file object
    const productType = document.getElementById('productType').value; // Get the selected product type

    // Read the file as data URL
    const reader = new FileReader();
    reader.onload = function(event) {
        // Once the file is loaded, create a new product object
        const newProduct = {
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
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
            priceCaption.textContent = parseFloat(`₱${product.price}.00`);

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

            // Call the function to attach event listeners for "Add to Cart" buttons
            attachAddToCartListeners();

        });
    });
}

// Add event listener to Add Product button
document.getElementById('addProductBtn').addEventListener('click', addProduct);


//------------------------------------------For login and signup and credentials----------------------------

// Function to display user profile in HTML
function displayUserProfile() {
    let user = temp[0]

    // Accessing wrap element
    const wrapElement = document.querySelector(".wrap");

    // Accessing h3 elements inside wrap
    const nameH3 = wrapElement.querySelector("#name");
    const contactH3 = wrapElement.querySelector("#contact");
    const addressH3 = wrapElement.querySelector("#address");
    const emailH3 = wrapElement.querySelector("#email");

    // Set text content of h3 elements
    nameH3.textContent = user.name;
    contactH3.textContent = user.contact;
    addressH3.textContent = user.address;
    emailH3.textContent = user.email;
}

//for showing and hiding the page
const loginPage = () =>{
    if (temp.length === 0) {
    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'block'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'
    }

    else{
        const profile = document.getElementById('profile-container')
        profile.style.display = 'block'

        const input = document.getElementById('serum-page')
        input.style.display = 'none'

        const input1 = document.getElementById('soap-page')
        input1.style.display = 'none'

        const input2 = document.getElementById('toner-page')
        input2.style.display = 'none'

        const input3 = document.getElementById('foam-page')
        input3.style.display = 'none'

        const input4 = document.getElementById('cream-page')
        input4.style.display = 'none'

        const homepage = document.getElementById('homepage')
        homepage.style.display = 'none'

        const about = document.getElementById('aboutUs')
        about.style.display = 'none'

        const cartContainer = document.getElementById('add-to-cart-container')
        cartContainer.style.display = 'none'

        const addProduct = document.getElementById('add-product')
        addProduct.style.display = 'none'

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email1").value = "";
        document.getElementById("password1").value = "";
        document.getElementById("password2").value = "";
    }
}

const loginCloseBtn = () =>{
    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    //clear login fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

const signUpPage = () =>{
    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'none'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'block'

    //clear login fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

}

const signUpCloseBtn = () =>{
    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
}   

//for validation 

function signUp() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

     // Check if any required field is empty
     if (!name || !contact || !address || !email || !password || !password2) {
        alert("Please fill in all required fields");
        return;
    }

    // Check if passwords match
    if (password !== password2) {
        alert("Passwords do not match");
        return;
    }

    // Check if email already exists
    if (users.find(user => user.email === email)) {
        alert("Email already exists");
        return;
    }

    // Create user object
    let user = {
        name: name,
        contact: contact,
        address: address,
        email: email,
        password: password
    };

    // Add user to array
    users.push(user);
    alert("Sign up successful");

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    
    const loginContainer = document.getElementById('login-container')
    loginContainer.style.display = 'block'

    const signupContainer = document.getElementById('sign-up-container')
    signupContainer.style.display = 'none'
}



function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if any required field is empty
    if (!email || !password) {
        alert("Please fill in all required fields");
        return;
    }

    // Check if the user exists
    let user = users.find(user => user.email === email);

    if (!user) {
        alert("User not found");
        return;
    }

    // Check if the user is the admin
    if (user.email === 'admin@email.com') {
        if (password !== 'admin') {
            alert("Incorrect password");
            return;
        }
        // Add admin to temporary array
        temp.push(user);
        alert("Login successful");

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        const cart = document.getElementById('cart-counter')
        cart.style.display = 'none'
        const loginContainer = document.getElementById('login-container');
        displayUserProfile();
        loginContainer.style.display = 'none';

        // Change the add-to-cart image source for admin
        const addToCartImg = document.getElementById('product_icon');
        addToCartImg.src = 'assets/add-product.png';
        return;
    }

    // For regular users
    if (user.password !== password) {
        alert("Incorrect password");
        return;
    }

    // Add user to temporary array
    temp.push(user);
    alert("Login successful");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    const loginContainer = document.getElementById('login-container');
    displayUserProfile();
    updateCartDisplay();
    updateCartCounter();
    loginContainer.style.display = 'none';
}

const logout = () =>{
    const logoutpopup = document.getElementById('logout-popup')
    logoutpopup.style.display = "block"; // Ensure the popup is visible
    logoutpopup.classList.add("popup"); // Add class to trigger animation
    setTimeout(function() {
        logoutpopup.style.animation = 'popup 1s'
        logoutpopup.classList.remove("popup"); // Remove class after animation ends
        logoutpopup.style.display = "none"; // Hide the popup after animation
    },2000); // Adjust the time as needed
    temp=[]

    const cartCounter = document.getElementById('cart-counter')
    cartCounter.style.display ='block'

    const profileContainer = document.getElementById('profile-container');
    profileContainer.style.display = 'none';

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

    updateCartCounter()

    // Change the add-to-cart image source back to the original one
    const addToCartImg = document.getElementById('product_icon');
    addToCartImg.src = 'assets/shopping-cart.png';
}


//---------------------------------------add to cart function -------------------------------------------------

//initialize cartCounter
let cartCounter = 0

function showPopup() {
    var popup = document.getElementById("cart-popup");
    popup.style.display = "block"; // Ensure the popup is visible
    popup.classList.add("popup"); // Add class to trigger animation
    setTimeout(function() {
        popup.style.animation = 'popup 1s'
      popup.classList.remove("popup"); // Remove class after animation ends
      popup.style.display = "none"; // Hide the popup after animation
    },1000); // Adjust the time as needed
  } 

// Create a new array to store cart items with user emails
let carts = [];

// Modify addtoCart function to handle user-specific carts
function addtoCart(event) {
    if (temp.length === 0) {
        // If no user is logged in, show the login page
        const loginContainer = document.getElementById('login-container');
        loginContainer.style.display = 'block';
    } else {
        // If user is logged in
        const loggedInUser = temp[0];
        // Check if the logged-in user is the admin
        if (loggedInUser.email === 'admin@email.com') {
            alert("Admins cannot add items to the cart.");
            return;
        }

        // If user is not admin, proceed with adding item to cart
        const productContainer = event.target.closest('figure');
        const itemDetails = {
            image: productContainer.querySelector('img').src,
            title: productContainer.querySelector('figcaption h3').textContent,
            description: productContainer.querySelector('figcaption:nth-of-type(2)').textContent,
            price: parseFloat(productContainer.querySelector('figcaption:nth-of-type(3)').textContent.trim().slice(1))
        };

        // Check if item already exists in the cart for this user
        const userCartIndex = carts.findIndex(cart => cart.email === loggedInUser.email);
        if (userCartIndex !== -1) {
            const existingItemIndex = carts[userCartIndex].items.findIndex(item => item.description === itemDetails.description);
            if (existingItemIndex !== -1) {
                alert("This item is already in the cart.");
                return;
            } else {
                // Add the item to existing user cart
                carts[userCartIndex].items.push(itemDetails);
            }
        } else {
            // Create a new cart for the user and add item to it
            carts.push({
                email: loggedInUser.email,
                items: [itemDetails]
            });
        }

        // Update HTML with item details and quantity selectors
        const addToCartContainer = document.getElementById('add-to-cart-container');
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <div>
                <input type="checkbox" class="product-checkbox" onclick=updateOverallPrice()>
            </div>
            <img src="${itemDetails.image}" alt="${itemDetails.title}">
            <div>
                <h3>${itemDetails.title}</h3>
                <p>${itemDetails.description}</p>
            </div>
            <div>
                <h3 style="text-align: center; margin: 1px;">Price</h3>
                <p>₱${itemDetails.price}.00</p>
            </div>
            <div>
                <h3 style="text-align: center; margin: 1px;">Quantity</h3>
                <div class="quantity">
                    <button class="minus">-</button>
                    <span>1</span>
                    <button class="plus">+</button>
                </div>
            </div>
            <div class="total" data-price="${itemDetails.price}">
                <h3 style="text-align: center; margin: 1px;">Total</h3>
                <p>₱${itemDetails.price}.00</p>
            </div>
        `;
        addToCartContainer.querySelector('.contain').appendChild(itemElement);

        // Update cart counter
        updateOverallPrice()
        updateCartCounter();
        showPopup();
    }
}

// Function to update overall price based on selected products
function updateOverallPrice() {
    const selectedProducts = document.querySelectorAll('.product-checkbox');
    let overallPrice = 0;
    selectedProducts.forEach(product => {
        if (product.checked) {
            const priceText = product.closest('.item').querySelector('.total p').textContent;
            const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
            overallPrice += price;
            document.getElementById('overall-price').textContent = `Overall Price: ₱${overallPrice}.00`;
        }else{
            document.getElementById('overall-price').textContent = `Overall Price: ₱${overallPrice}.00`;
        }
    });
}

// Function to update cart counter based on the currently logged-in user's cart
function updateCartCounter() {
    if (temp.length === 0) {
        // If no user is logged in, set cartCounter to 0
        cartCounter = 0;
        clearContain()
    } else {
        // If user is logged in, find their cart and count items
        const loggedInUser = temp[0];
        const userCart = carts.find(cart => cart.email === loggedInUser.email);
        if (userCart) {
            cartCounter = userCart.items.length;
        } else {
            cartCounter = 0;
        }
    }
    document.getElementById('cart-counter').textContent = cartCounter;
}

// Function to clear contents of the contain div, except the h1 element
function clearContain() {
    const containDiv = document.querySelector('#add-to-cart-container .contain');
    const children = Array.from(containDiv.children);
    children.forEach(child => {
        if (child.tagName.toLowerCase() !== 'h1') {
            containDiv.removeChild(child);
        }
    });
}

// Function to update cart display based on the currently logged-in user's cart
function updateCartDisplay() {
    if (temp.length === 0) {
        // If no user is logged in, clear the cart container
        clearContain();
    } else {
        // If user is logged in, find their cart and display items
        const loggedInUser = temp[0];
        const userCart = carts.find(cart => cart.email === loggedInUser.email);
        if (userCart) {
            const addToCartContainer = document.getElementById('add-to-cart-container');
            clearContain(); // Clear existing contents
            userCart.items.forEach(itemDetails => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <div>
                        <input type="checkbox" id="product-checkbox">
                        <label for="product-checkbox">Add to purchase</label>
                    </div>
                    <img src="${itemDetails.image}" alt="${itemDetails.title}">
                    <div>
                        <h3>${itemDetails.title}</h3>
                        <p>${itemDetails.description}</p>
                    </div>
                    <div>
                        <h3 style="text-align: center; margin: 10px 0;">Price</h3>
                        <p>₱${itemDetails.price}.00</p>
                    </div>
                    <div>
                        <h3 style="text-align: center; margin: 1px;">Quantity</h3>
                        <div class="quantity">
                            <button class="minus">-</button>
                            <span>1</span>
                            <button class="plus">+</button>
                        </div>
                    </div>
                    <div class="total" data-price="${itemDetails.price}">
                        <h3 style="text-align: center; margin: 1px;">Total</h3>
                        <p>₱${itemDetails.price}.00</p>
                     </div>
                `;
                addToCartContainer.querySelector('.contain').appendChild(itemElement);
            });
        } else {
            clearContain(); // Clear existing contents
        }
    }
}

// Function to handle plus button click
function increaseQuantity(event) {
    const quantityElement = event.target.parentElement.querySelector('span');
    const totalElement = event.target.closest('.item').querySelector('.total');
    const total = event.target.closest('.item').querySelector('.total p');// Adjusted selector
    if (!totalElement) {
        console.error("Total element not found.");
        return;
    }
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    total.textContent = `₱${parseInt(quantityElement.textContent) * parseFloat(totalElement.dataset.price)}.00`;
    updateOverallPrice()
}

// Function to handle minus button click
function decreaseQuantity(event) {
    const quantityElement = event.target.parentElement.querySelector('span');
    const totalElement = event.target.closest('.item').querySelector('.total');
    const total = event.target.closest('.item').querySelector('.total p'); // Adjusted selector
    if (!totalElement) {
        console.error("Total element not found.");
        return;
    }
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        total.textContent = `₱${parseInt(quantityElement.textContent) * parseFloat(totalElement.dataset.price)}.00`;
        updateOverallPrice()
    }
}

// Event delegation to handle plus and minus button clicks
document.getElementById('add-to-cart-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('plus')) {
        increaseQuantity(event);
        updateOverallPrice()
    } else if (event.target.classList.contains('minus')) {
        decreaseQuantity(event);
        updateOverallPrice()
    }
});

// Attach event listeners to Add to Cart buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', addtoCart);
});

// Function to attach event listeners for "Add to Cart" buttons
function attachAddToCartListeners() {
    // Select all "Add to Cart" buttons within the add-to-cart-container
    const addToCartButtons = document.querySelectorAll('.product button');
    
    // Iterate over each button and attach the event listener
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addtoCart);
    });
}

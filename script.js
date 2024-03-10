    // creating variables for best selling artworks added sources both locally and via URL to display different usages
    const saleItemOne = {image:"Images/boat.jpeg",price:"$122.95 AUD"}
    const saleItemTwo = {image:"Images/woodmap.jpg", price:"$24.95 AUD"}
    const saleItemThree = {image:"https://images.pexels.com/photos/11105145/pexels-photo-11105145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$82.95 AUD"}
    const saleItemFour = {image:"https://images.pexels.com/photos/12727634/pexels-photo-12727634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$60.00 AUD"}
    const saleItemFive = {image:"https://images.pexels.com/photos/4609253/pexels-photo-4609253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$399.00 AUD"}

    // Function to update the image and price of a selected product
function updateSaleProduct(imageUrl, price) {
    const saleImage = document.querySelector("#salesDisplay")
    const priceCaption = document.querySelector("#priceCaption")
    saleImage.src = imageUrl
    priceCaption.innerHTML = price
}
    // Function to toggle the theme
function changeTheme() {
    const body = document.body
    const theme = body.getAttribute("data-theme")
    console.log(theme)
    if(theme === "light"){
        return body.setAttribute("data-theme", "dark")
    }else {
        return body.setAttribute("data-theme", "light")
    }
}
    // Function to change the font from standard to Dyslexic
function changeFont() {
    const body = document.body
    const theme = body.getAttribute("data-font")
    console.log(theme)
    if(theme === "standard"){
        return body.setAttribute("data-font", "dyslexic")
    }else {
        return body.setAttribute("data-font", "standard")
    }
}
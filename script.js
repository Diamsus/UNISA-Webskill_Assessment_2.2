    // creating variables for best selling artworks added sources both locally and via URL to display different usages
    const saleItemOne = {image:"Images/boat.jpeg",price:"$122.95 AUD"}
    const saleItemTwo = {image:"Images/woodmap.jpg", price:"$24.95 AUD"}
    const saleItemThree = {image:"https://images.pexels.com/photos/11105145/pexels-photo-11105145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$82.95 AUD"}
    const saleItemFour = {image:"https://images.pexels.com/photos/12727634/pexels-photo-12727634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$60.00 AUD"}
    const saleItemFive = {image:"https://images.pexels.com/photos/4609253/pexels-photo-4609253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$399.00 AUD"}

function updateSaleProduct(imageUrl, price) {
    const saleImage = document.querySelector("#salesDisplay")
    const priceCaption = document.querySelector("#priceCaption")
    saleImage.src = imageUrl
    priceCaption.innerHTML = price
}
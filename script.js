const saleItemOne = {image:"https://www.pexels.com/photo/brown-wooden-ship-model-2739070/",price:"$122.95"}

const saleItemTwo = {image:"https://images.pexels.com/photos/6616378/pexels-photo-6616378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price:"$24.95"}

function updateSaleProduct(imageUrl, price) {
    const saleImage = document.querySelector("#salesDisplay")
    const priceCaption = document.querySelector("#priceCaption")
    saleImage.src = imageUrl
    priceCaption.innerHTML = price
}

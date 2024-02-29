let products = {
    data: [{
        productName: "Regular White T-shirt",
        category: "Topwear",
        price: "30",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnR5JTIwc21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2ljJTIwa25pdHRlZCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwbGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJyb3duJTIwTWVuJ3MlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://unsplash.com/photos/blue-denim-jeans-on-white-textile-ytQeX4iQ7Uk"
    },
    ],
}

for (let i of products.data) {
    // Create Card
    let card = document.createElement("div")
    // Card should have category
    card.classList.add("card", "i.category");
    // image div
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")
    // img tag
    let image = document.createElement("img")
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")
    // product name
    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.productName

    container.appendChild(name)
    card.appendChild(container)

    document.getElementById("products").appendChild(card)
}
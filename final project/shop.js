function openProduct(image, title, price, desc) {
    document.getElementById("product-image").src = image;
    document.getElementById("product-title").innerText = title;
    document.getElementById("product-price").innerText = price;
    document.getElementById("product-desc").innerText = desc;

    document.getElementById("product-view").classList.add("show");
}

function closeProduct() {
    document.getElementById("product-view").classList.remove("show");
}

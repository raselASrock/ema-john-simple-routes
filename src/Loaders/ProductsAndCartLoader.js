import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
    // get products data
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // get cart
    const savedCart = getStoredCart();
    console.log("savedCart", savedCart);
    const initialCart = []
    
    for (const id in savedCart){
        // console.log(id);
        const addedProduct = products.find( product => product.id === id);
        console.log(id, addedProduct);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }

    return {products: products, initialCart: initialCart};
}
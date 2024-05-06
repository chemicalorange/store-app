export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        if (products.length === 0) {
            throw new Error("Получен пустой список продуктов.");
        }
        return products;
    } catch (error) {
        throw error;
    }
}

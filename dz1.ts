type email = `${string}@itkachalka.ru` & {
    _brand: 'UserEmail'
}

let a: email = 'xyu@itkachalka.ru' as email


// #######################

type Product = {
    id: number
    name: string
    type: "FILM" | "SERIAL"
    videoFiles: string[]
    price: number

}

type Shop = {
    money: number
    products: Product[]
    
}

type Client = {
    id: number
    money: number
    products: Product[]
}

let shop: Shop = {
    money: 100000000,
    products:[/* many products */]
}


const checkAvailableMoneyClient = (client: Client, product: Product): void => {
    if ((client.money -= product.price) < 0) {
        throw new Error("Client doesn't have money =(")
    }
}

const transferMoney = (from: Client, to: Client | Shop, product: Product): void => {
    from.money -= product.price
    to.money += product.price

    to.products.push(product)
}

const checkHasProductFromSeller = (seller: Client, product: Product): void => {
    if (!seller.products.find(item => item.id === product.id)) {
        throw new Error("Seller doesn't have the product =(")
    }
}

const buyProductFromShop = (client: Client, product: Product): void => {
    checkAvailableMoneyClient(client, product)

    transferMoney(client, shop, product)
}

const addVideoFile = (video: string, product: Product, client: Client): void => {
    checkHasProductFromSeller(client, product)
    product.videoFiles.push(video)
}

const buyProductFromUser = (buyer: Client, seller: Client, product: Product): void => {
    checkAvailableMoneyClient(buyer, product)

    checkHasProductFromSeller(seller, product)
    
    transferMoney(buyer, seller, product)

    const productIdx = seller.products.findIndex(item => item.id === product.id)
    seller.products.splice(productIdx, 1)

}
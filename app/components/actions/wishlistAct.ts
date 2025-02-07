import { Product } from "@/types/products";


export const addToWishlist = (product : Product) => {
    const wishlist : Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]')

    const existingProductIndexWL = wishlist.findIndex(item => item._id === product._id)

    if(existingProductIndexWL > -1) {
        wishlist[existingProductIndexWL].inventory += 1
    }
    else {
        wishlist.push({
            ...product, inventory: 1
        })
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

export const removeFromWishList = (productId : string) => {
    let wishlist : Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]')
    wishlist = wishlist.filter(item => item._id !== productId)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

export const updateWishlistQuantity = (productId :string, quantity : number) => {
    const wishlist : Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const productIndex = wishlist.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        wishlist[productIndex].inventory = quantity;
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
}

export const getWishlistItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('wishlist') || '[]')
}

export const removeFromWishlist = (productId : string) => {
    let wishlist : Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]')
    wishlist = wishlist.filter(item => item._id !== productId)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}
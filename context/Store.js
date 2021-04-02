import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()
const AddToCartContext = createContext()
const UpdateCartQuantityContext = createContext()

export function useCartContext() {
  return useContext(CartContext)
}

export function useAddToCartContext() {
  return useContext(AddToCartContext)
}

export function useUpdateCartQuantityContext() {
  return useContext(UpdateCartQuantityContext)
}

async function updateShopifyCheckout(updatedCart, checkoutId) {
  const lineItems = updatedCart.map(item => {
    return {
      variantId: item['variantId'],
      quantity: item['variantQuantity']
    }
  })
  await fetch('/api/update-checkout', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ checkoutId, lineItems }),
  })
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    // get any local session
    const localData = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME))
    if (localData) {
      if (Array.isArray(localData[0])) {
        setCart([...localData[0]])
      }
      else {
        setCart([localData[0]])
      }
      setCheckoutId(localData[1])
      setCheckoutUrl(localData[2])
    }
  }, [])

  async function addToCart(newItem) {
    setisLoading(true)
    // empty cart
    if (cart.length === 0) {
      setCart([
        ...cart,
        newItem
      ])
      // send shopify update
      const data = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: newItem['variantId'], quantity: newItem['variantQuantity'] }),
      })
      const response = await data.json()
      setCheckoutId(response.checkout.id)
      setCheckoutUrl(response.checkout.webUrl)
      // store locally
      localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([newItem, response.checkout.id, response.checkout.webUrl]))
    } else {
      let newCart = [...cart]
      let itemAdded = false
      // loop through all cart items to check if variant
      // already exists and update quantity
      newCart.map(item => {
        if (item.variantId === newItem.variantId) {
          item.variantQuantity += newItem.variantQuantity
          itemAdded = true
        }
      })

      let newCartWithItem = [...newCart]
      if (itemAdded) {
      } else {
        // if its a new item than add it to the end
        newCartWithItem = [...newCart, newItem]
      }
      setCart(newCartWithItem)
      await updateShopifyCheckout(newCartWithItem, checkoutId)
      // store locally
      localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([newCartWithItem, checkoutId, checkoutUrl]))

    }
    setisLoading(false)
  }

  async function updateCartItemQuantity(id, quantity) {

    setisLoading(true)
    let newQuantity = Math.floor(quantity)
    if (quantity === '') {
      newQuantity = ''
    }
    let newCart = [...cart]
    newCart.forEach(item => {
      if (item.variantId === id) {
        item.variantQuantity = newQuantity
      }
    })
    // take out zeroes items
    newCart = newCart.filter(i => i.variantQuantity !== 0)
    setCart(newCart)
    await updateShopifyCheckout(newCart, checkoutId)
    localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([newCart, checkoutId, checkoutUrl]))
    setisLoading(false)
  }

  return (
    <CartContext.Provider value={[cart, checkoutUrl, isLoading]}>
      <AddToCartContext.Provider value={addToCart}>
        <UpdateCartQuantityContext.Provider value={updateCartItemQuantity}>
          {children}
        </UpdateCartQuantityContext.Provider>
      </AddToCartContext.Provider>
    </CartContext.Provider>
  )
}

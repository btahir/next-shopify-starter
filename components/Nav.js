import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    let numItems = 0
    cart.forEach(item => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <a className="focus:outline-none cursor-pointer">
            <h1 className="flex no-underline">
              <img height="32" width="32" alt="logo" className="h-6 w-6 mr-2 object-contain" src="/icon.svg" />
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                {process.env.siteTitle}
              </span>
            </h1>
          </a>
        </Link>
        <div>
          <Link
            href="/cart"
            passHref
          >
            <a className="focus:outline-none relative" aria-label="cart">
              <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faShoppingCart} />
              {
                cartItems === 0 ?
                  null
                  :
                  <div
                    className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                    {cartItems}
                  </div>
              }
            </a>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Nav

import { updateCheckout } from '@/lib/shopify'

export default async function modifyCheckout(req, res) {

  const checkout = await updateCheckout(req.body.checkoutId, req.body.lineItems)

  res.status(200).json({ checkout: JSON.stringify(checkout) })
}

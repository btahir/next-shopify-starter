import { createCheckout } from '@/lib/shopify'

export default async function (req, res) {

  const checkout = await createCheckout(req.body.id, req.body.quantity)

  res.status(200).json({ checkout: checkout })
}

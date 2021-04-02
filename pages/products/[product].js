import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductSection from '@/components/ProductSection'

function ProductPage({ productData }) {  

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  )
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()

  const paths = productSlugs.map((slug) => {    
    const product = String(slug.node.handle)
    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.product)  

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage

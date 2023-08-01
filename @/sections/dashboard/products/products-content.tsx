import ProductItem from "./product-item"
import { PRODUCTS } from "@/mocks/common"
function ProductContent() {
  return (
    <div className="flex-1 space-y-2">
      {
        PRODUCTS.map((item) => <ProductItem key={item.id} item={item}/> )
      }
    </div>
  )
}

export default ProductContent;

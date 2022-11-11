import { ShoppingCart } from 'phosphor-react'
import {
  CatalogItemContainer,
  CatalogItemDescription,
  CatalogItemFooter,
  CatalogItemHeader,
  PriceLabel,
  ProductLabel,
  ProductLabelBox,
  QuantityManagerButton,
} from './styles'

export interface Coffe {
  id: string
  imagePath: string
  labels: string[]
  title: string
  description: string
  price: string
}

interface CatalogItemProps {
  productData: Coffe
}

export function CatalogItem({ productData }: CatalogItemProps) {
  return (
    <CatalogItemContainer>
      <CatalogItemHeader>
        <img src={productData.imagePath} alt="foto do produto" />
        <ProductLabelBox>
          {productData.labels.map((label) => (
            <ProductLabel key={label}>{label}</ProductLabel>
          ))}
        </ProductLabelBox>
      </CatalogItemHeader>

      <CatalogItemDescription>
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
      </CatalogItemDescription>

      <CatalogItemFooter>
        <PriceLabel>
          R$ <span>{productData.price}</span>
        </PriceLabel>

        <QuantityManagerButton>
          <button>-</button>1<button>+</button>
        </QuantityManagerButton>

        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </CatalogItemFooter>
    </CatalogItemContainer>
  )
}

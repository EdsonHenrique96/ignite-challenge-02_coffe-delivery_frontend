import { ShoppingCart } from 'phosphor-react'
import {
  CatalogItemContainer,
  CatalogItemDescription,
  CatalogItemFooter,
  CatalogItemHeader,
  PriceLabel,
  QuantityManagerButton,
} from './styles'
import ProductImg from '../../../../assets/expresso.png'

export function CatalogItem() {
  return (
    <CatalogItemContainer>
      <CatalogItemHeader>
        <img src={ProductImg} alt="foto do produto" />
        <span>TRADICIONAL</span>
      </CatalogItemHeader>

      <CatalogItemDescription>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CatalogItemDescription>

      <CatalogItemFooter>
        <PriceLabel>
          <p>
            R$ <span>9,90</span>
          </p>
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

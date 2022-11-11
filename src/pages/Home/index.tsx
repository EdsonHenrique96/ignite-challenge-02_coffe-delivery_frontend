import { useEffect, useState } from 'react'
import { MapPin, ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import LogoImg from '../../assets/logo.png'
import IlustrateImg from '../../assets/ilustrate-image.png'
import {
  CartButton,
  CatalogItems,
  CatalogSection,
  Container,
  HeaderContainer,
  HomeConteiner,
  IntroSection,
  IntroSectionDescription,
  IntroSectionItem,
  IntroSectionItems,
  LocationButton,
} from './styles'
import { CatalogItem, Coffe } from './components/CatalogItem'

import ProductDataJSON from '../../../public/products-data.json'

export function Home() {
  const [products, setProducts] = useState<Coffe[]>([])

  useEffect(() => {
    setProducts(ProductDataJSON as Coffe[])
  }, [])

  return (
    <Container>
      <header>
        <HeaderContainer>
          <img src={LogoImg} alt="logo coffe delivery" />

          <div>
            <LocationButton>
              <MapPin weight="fill" size={22} />
              São Paulo, SP
            </LocationButton>
            <CartButton>
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </div>
        </HeaderContainer>
      </header>
      <HomeConteiner>
        <IntroSection>
          <div>
            <IntroSectionDescription>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </IntroSectionDescription>

            <IntroSectionItems>
              <div>
                <IntroSectionItem color="orange">
                  <span>
                    <ShoppingCart weight="fill" />
                  </span>
                  <p>Compra simples e segura</p>
                </IntroSectionItem>
                <IntroSectionItem color="yellow">
                  <span>
                    <Timer weight="fill" />
                  </span>
                  <p>Entrega rápida e rastreada</p>
                </IntroSectionItem>
              </div>

              <div>
                <IntroSectionItem color="gray">
                  <span>
                    <Package weight="fill" />
                  </span>
                  <p>Embalagem mantém o café intacto</p>
                </IntroSectionItem>

                <IntroSectionItem color="purple">
                  <span>
                    <Coffee weight="fill" />
                  </span>
                  <p>O café chega fresquinho até você</p>
                </IntroSectionItem>
              </div>
            </IntroSectionItems>
          </div>
          <div>
            <img src={IlustrateImg} alt="Imagem ilustrativa do produto" />
          </div>
        </IntroSection>
        <CatalogSection>
          <h2>Nossos cafés</h2>
          <CatalogItems>
            {products.length > 0 &&
              products.map((product) => (
                <CatalogItem productData={product} key={product.id} />
              ))}
          </CatalogItems>
        </CatalogSection>
      </HomeConteiner>
    </Container>
  )
}

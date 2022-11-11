import styled from 'styled-components'

export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  width: 16rem;
  border-radius: 6px 36px;
  gap: 1rem;
  padding: 0 1.25rem 1.25rem;
`
export const CatalogItemHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }
`

export const ProductLabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.25rem;
`

export const ProductLabel = styled.span`
  color: ${(props) => props.theme['yellow-800']};
  background-color: ${(props) => props.theme['yellow-200']};
  font-weight: bold;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const CatalogItemDescription = styled.section`
  text-align: center;

  h1 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CatalogItemFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 2.375rem;
    background-color: ${(props) => props.theme['purple-800']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    padding: 0.5rem;
  }
`

export const PriceLabel = styled.p`
  color: ${(props) => props.theme['gray-800']};

  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.6;
  }
`

export const QuantityManagerButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 0.5rem;
  border-radius: 6px;
  width: 4.5rem;

  button {
    width: 0.875rem;
    border: none;
    background-color: inherit;
    color: ${(props) => props.theme['purple-800']};
  }
`

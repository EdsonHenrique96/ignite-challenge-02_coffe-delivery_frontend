import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
`

export const HomeConteiner = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0;

  > img {
    width: 84.95px;
    height: 40px;
  }

  > div {
    display: flex;
    gap: 0.75rem;
  }
`

const CommomButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
`

export const LocationButton = styled(CommomButton)`
  gap: 0.5rem;
  background-color: ${(props) => props.theme['purple-200']};
  color: ${(props) => props.theme['purple-800']};
  font-size: 0.875rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CartButton = styled(CommomButton)`
  background-color: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-800']};
`

export const IntroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding-bottom: 6.75rem;
`

export const IntroSectionDescription = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }
`

export const IntroSectionItems = styled.div`
  display: flex;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

const ITEM_COLORS = {
  purple: 'purple-500',
  orange: 'yellow-800',
  yellow: 'yellow-500',
  gray: 'gray-700',
} as const
/**
 * Define que os valores do status color seram essa consts e não qualquer string
 *
 * na dúvida, passe o mouse em cima do STATUS_COLOR e veja a tipagem dele.
 */

interface IntroSectionItemProps {
  color: keyof typeof ITEM_COLORS
}

export const IntroSectionItem = styled.div<IntroSectionItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme[ITEM_COLORS[props.color]]};
  }
`

export const CatalogSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding-top: 2rem;
`

export const CatalogItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

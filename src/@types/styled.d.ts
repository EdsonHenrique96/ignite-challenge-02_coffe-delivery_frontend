import 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'

// criar um type, baseado na inferência feita pelo o TS sobre o defaultTheme.
type ThemeType = typeof defaultTheme

/**
 * Importando o styled-component com está sendo feito acima,
 * nós apenas sobrescrevemos parte da declaração do modulo do styled-component.
 * Se o styled-components não estivese importado, o modulo seria completamente reescrito.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

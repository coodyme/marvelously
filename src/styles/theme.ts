import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    text: string
    primary: string
    secondary: string
  }
}

export const darkTheme: DefaultTheme = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#FF0000',
  secondary: '#84848D'
}

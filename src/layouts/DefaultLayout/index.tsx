import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

// DefaultLayout é um layout padrão que será exibido em todas as páginas

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

// Outlet se torna o conteúdo que iremos posicionar
// ao chamar o Header

import { List, Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import {
  Container,
  Menu,
  Order,
  Brand,
  Logout,
  Search,
  OrderButton
} from './styles'

import logoFoodExplorer from '../../assets/logo.svg'
import logoFoodExplorerAdmin from '../../assets/logo_admin.svg'

import { Button } from '../Button'
import { Input } from '../Input'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/search'
import { useCart } from '../../hooks/cart'

export function Header({ onOpenMenu }) {
  const { signOut, user } = useAuth()
  const { search, searchDishes } = useSearch()
  const { cartItems } = useCart()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <Brand>
        {user.isAdmin ? (
          <img src={logoFoodExplorerAdmin} alt="Logo Food Explorer" onClick={() => navigate('/')}/>
        ) : (
          <img src={logoFoodExplorer} alt="Logo Food Explorer" onClick={() => navigate('/')} />
        )}
      </Brand>
      <Search>
        <Input
          type="search"
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          id="name"
          value={search}
          onChange={e => searchDishes(e.target.value)}
        />
      </Search>

      <OrderButton>
        {user.isAdmin ? (
          <Button title="Novo Prato" onClick={() => navigate('/new')}/>
        ) : (
          <Button icon={Receipt} title="Pedidos" itemsCount={cartItems} />
        )}
      </OrderButton>

      <Order>
        <span className="notify">{cartItems}</span>
        <Receipt />
      </Order>

      <Logout onClick={handleSignOut}>
        <SignOut />
      </Logout>
    </Container>
  )
}

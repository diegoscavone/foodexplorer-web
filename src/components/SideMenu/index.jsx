import { PiX, PiMagnifyingGlass } from 'react-icons/pi'

import { Input } from '../../components/Input'

import { Container, Content, Header, Nav } from './styles'
import { Footer } from '../Footer'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/search'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { user, signOut } = useAuth()
  const { search, searchDishes } = useSearch()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        {menuIsOpen && (
          <button onClick={onCloseMenu}>
            <PiX />
          </button>
        )}
        <h2>Menu</h2>
      </Header>

      <Content>
      <Input
          type="search"
          icon={PiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          id="name"
          value={search}
          onChange={e => searchDishes(e.target.value)}
        />

        <Nav>
          {user.isAdmin ? (
            <>
              <a onClick={() => navigate('/new')}>Novo Prato</a>
              <a onClick={handleSignOut}>Sair</a>
            </>
          ) : (
            <a onClick={handleSignOut}>Sair</a>
          )}
        </Nav>
      </Content>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  )
}

import {
  Container,
  Content,
  Card,
  Tags,
  Order,
  Image,
  Description,
  Wrapper
} from './styles'

import { PiCaretLeft } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { InputNumber } from '../../components/InputNumber'
import { Footer } from '../../components/Footer'

import { Tag } from '../../components/Tag'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SideMenu } from '../../components/SideMenu'
import { Receipt } from '@phosphor-icons/react'
import { api } from '../../services/api'
import { useCart } from '../../hooks/cart'
import { useAuth } from '../../hooks/auth'
export function Details() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { user } = useAuth()

  const { addDishInCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const [data, setData] = useState()
  const params = useParams()

  const navigate = useNavigate()

  function handleAddDishToCart() {
    addDishInCart(data, quantity)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }
    fetchDish()
  }, [])

  // const handleQuantityClick = event => {
  //   event.preventDefault()
  //   event.stopPropagation()
  // }

  function handleEdit(id) {
    navigate(`/edit/${id}`)
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <Link to="/">
          <PiCaretLeft />
          <span>voltar</span>
        </Link>

        {data && (
          <Card>
            <Image>
              <img
                src={`${api.defaults.baseURL}/images/uploads/${data.picture}`}
              />
            </Image>
            <Wrapper>
              <Description>
                <h2>{`${data.title} >`}</h2>
                <span>{data.description}</span>
              </Description>
              <Tags>
                {data.ingredients &&
                  data.ingredients.map(ingredient => (
                    <Tag key={String(ingredient.id)} title={ingredient.name} />
                  ))}
              </Tags>

              {user.isAdmin ? (
                <Order>
                  <Button title="Editar Prato" onClick={() => handleEdit(data.id)} />
                </Order>
              ) : (
                <Order>
                  <InputNumber value={quantity} onChange={setQuantity} />
                  <Button
                    icon={Receipt}
                    title={`incluir ∙ R$ ${data.price}`}
                    onClick={handleAddDishToCart}
                  />
                </Order>
              )}
            </Wrapper>
          </Card>
        )}
      </Content>
      <Footer />
    </Container>
  )
}

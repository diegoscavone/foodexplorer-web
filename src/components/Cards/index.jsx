import { PiHeart, PiPencilSimple } from 'react-icons/pi'

import {
  Container,
  Content,
  Quantity,
  Price,
  Favorite,
  Description,
  Title,
  Footer
} from './styles'
import { Button } from '../Button'
import { InputNumber } from '../InputNumber'
import { useCart } from '../../hooks/cart'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function Cards({ data, onClickImage, onClickTitle }) {
  const { user } = useAuth()
  const { addDishInCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  function handleAddDishToCart() {
    addDishInCart(data, quantity)
  }

  function handleEditDish(){
    navigate(`/details/${data.id}`)
  }

  return (
    <Container>
      <Content>
        <Favorite>
          {user.isAdmin
            ?
          <PiPencilSimple onClick={handleEditDish}/>
            :
          <PiHeart />}
        </Favorite>
        <img
          src={data.img}
          alt={`Imagem do Prato: ${data.title}`}
          onClick={onClickImage}
        />
        <Title onClick={onClickTitle}>{data.title}</Title>
        <Description>{data.description}</Description>
        <Price>{data.price}</Price>
        <Footer>
          {!user.isAdmin && (
            <>
              <Quantity>
                <InputNumber value={quantity} onChange={setQuantity} />
              </Quantity>
              <Button title="incluir" onClick={handleAddDishToCart} />
            </>
          )}
        </Footer>
      </Content>
    </Container>
  )
}

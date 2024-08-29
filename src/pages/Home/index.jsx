import { Splide, SplideSlide } from '@splidejs/react-splide'

import { Container, Slider, Content, Headline, SliderImage } from './styles'

import { Header } from '../../components/Header'

import sliderMacaron from '../../assets/macarons.png'
import { Cards } from '../../components/Cards'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { useEffect, useState } from 'react'
import { useSearch } from '../../hooks/search'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { search } = useSearch()
  const searchQuery = search === undefined ? '' : search
  const [dishes, setDishes] = useState({
    refeicoes: [],
    sobremesas: [],
    bebidas: []
  })
  const [urlDishPicture, setUrlDishPicture] = useState({})

  const navigate = useNavigate()


  function handleDetails(id) {
    navigate(`/details/${id}`)
  }
  
  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?search=${searchQuery}`)
        const dishesData = response.data

        const dishesCategory = {
          refeicoes: dishesData.filter(dish => dish.category_id === 1),
          sobremesas: dishesData.filter(dish => dish.category_id === 3),
          bebidas: dishesData.filter(dish => dish.category_id === 4)
        }

        setDishes(dishesCategory)
        dishesData.forEach(async dish => {
          await handlePictureDish(dish.picture, dish.id)
        })
      } catch (error) {
        toast.error('Erro listar os pratos cadastrados.', {
          autoClose: 3000,
          closeButton: false,
          progress: false,
          bodyStyle: { background: '#92000E' },
          progressStyle: { background: '#AB4D55' },
          style: { background: '#92000E' }
        })
      }
    }
    fetchDishes()
  }, [search])

  async function handlePictureDish(pictureName, dishId) {
    try {
      const dishPictureUrl = `${api.defaults.baseURL}/images/uploads/${pictureName}`

      setUrlDishPicture(prevUrls => ({
        ...prevUrls,
        [dishId]: dishPictureUrl
      }))
    } catch (error) {
      toast.error('Erro ao buscar a imagem do prato.', {
        autoClose: 3000,
        closeButton: false,
        progress: false,
        bodyStyle: { background: '#92000E' },
        progressStyle: { background: '#AB4D55' },
        style: { background: '#92000E' }
      })
    }
  }
  return (
    <Container>
      {
        <SideMenu
          menuIsOpen={menuIsOpen}
          onCloseMenu={() => setMenuIsOpen(false)}
        />
      }
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Slider>
        <SliderImage>
          <img
            src={sliderMacaron}
            alt="Imagem de Macarons de diversos sabores com frutas"
          />
        </SliderImage>
        <Headline>
          <h1>Sabores inigualavéis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
        </Headline>
      </Slider>
      <Content>
        {dishes.refeicoes.length > 0 && (
          <Section title="Refeições">
            <Splide
              options={{
                perPage: 2,
                pagination: false,
                arrows: true,
                autoWidth: true,
                gap: 27
              }}
            >
              {dishes.refeicoes.map(dish => (
                <SplideSlide key={dish.id}>
                  <Cards
                    data={{
                      id: dish.id,
                      img: urlDishPicture[dish.id],
                      title: `${dish.title} >`,
                      price: `R$ ${dish.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                    }}
                    onClickImage={() => handleDetails(dish.id)}
                    onClickTitle={() => handleDetails(dish.id)}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Section>
        )}

        {dishes.sobremesas.length > 0 && (
          <Section title="Sobremesas">
            <Splide
              options={{
                perPage: 2,
                pagination: false,
                arrows: true,
                autoWidth: true,
                gap: 27
              }}
            >
              {dishes.sobremesas.map(dish => (
                <SplideSlide key={dish.id}>
                  <Cards
                    data={{
                      id: dish.id,
                      img: urlDishPicture[dish.id],
                      title: `${dish.title} >`,
                      price: `R$ ${dish.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                    }}
                    onClickImage={() => handleDetails(dish.id)}
                    onClickTitle={() => handleDetails(dish.id)}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Section>
        )}

        {dishes.bebidas.length > 0 && (
          <Section title="Bebidas">
            <Splide
              options={{
                perPage: 2,
                pagination: false,
                arrows: true,
                autoWidth: true,
                gap: 27
              }}
            >
              {dishes.bebidas.map(dish => (
                <SplideSlide key={dish.id}>
                  <Cards
                    data={{
                      id: dish.id,
                      img: urlDishPicture[dish.id],
                      title: `${dish.title} >`,
                      price: `R$ ${dish.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                    }}
                    onClickImage={() => handleDetails(dish.id)}
                    onClickTitle={() => handleDetails(dish.id)}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Section>
        )}
      </Content>
      <Footer />
    </Container>
  )
}

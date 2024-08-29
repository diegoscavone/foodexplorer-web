import { Container, Content, Form, InputWrapper, Ingredients } from './styles'
import { PiCaretLeft, PiUpload } from 'react-icons/pi'

import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Headline } from '../../components/Headline'
import { Label } from '../../components/Label'

import { Link, useNavigate } from 'react-router-dom'
import { InputFile } from '../../components/InputFile'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { IngredientItem } from '../../components/IngredientItem'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { InputMask } from '../../components/InputMask'

export function New() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toastId = React.useRef(null)

  const [dishImage, setDishImage] = useState(null)
  const [dishImageName, setDishImageName] = useState('')
  const [title, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/categories')
        setCategories(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [])

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setDishImage(file)
    setDishImageName(file.name)
  }

  async function handleNewDish() {
    if (!title || !price || !description) {
      return toast.info('Preencha todos os campos!', {
        autoClose: 2000,
        closeButton: false,
        progress: false,
        bodyStyle: { background: '#065E7C' },
        style: { background: '#065E7C' }
      })
    }
    if (newIngredient) {
      return toast.info('Adicione o ingrediente clicando no ícone de +', {
        autoClose: 2000,
        closeButton: false,
        progress: false,
        bodyStyle: { background: '#065E7C' },
        style: { background: '#065E7C' }
      })
    }

    const newDish = {
      title,
      description,
      price: parseFloat(
        price.replace('R$', '').replace('.', '').replace(',', '.')
      ).toFixed(2),
      category_id: category,
      ingredients
    }

    toastId.current = toast.loading('Aguarde...Salvando prato...')

    try {
      const response = await api.post('/dishes', newDish)
      const { dish_id } = response.data
      if (dishImage && dish_id) {
        const formData = new FormData()
        formData.append('picture', dishImage)
        await api.patch(`/dishes/picture/${dish_id}`, formData)
      }
      toast.update(toastId.current, {
        render: 'Prato Salvo com sucesso',
        type: 'success',
        isLoading: false,
        progress: false,
        bodyStyle: { background: '#04D361' },
        style: { background: '#04D361' },
        autoClose: 5000
      })
      navigate('/')
    } catch (error) {
      toast.error('Erro ao salvar o prato.')
    }
  }

  function handleCategoryChange(event) {
    const selectedCategoryId = event.target.value
    setCategory(selectedCategoryId)
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
        <Headline title="Adicionar prato" />

        <Form>
          <div className="col-3">
            <InputWrapper>
              <Label htmlFor="dishImage">Imagem do prato</Label>
              <InputFile
                type="file"
                icon={PiUpload}
                id="dishImage"
                title={dishImageName ? dishImageName : 'Selecione imagem'}
                onChange={handleChangeImage}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                placeholder="Ex.: Salada Ceasar"
                value={title}
                onChange={e => setName(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="category">Categoria</Label>
              <Select onChange={handleCategoryChange} value={category}>
                <option value="">Selecione</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </InputWrapper>
          </div>

          <div className="col-2">
            <InputWrapper>
              <Label>Ingredientes</Label>
              <Ingredients>
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <IngredientItem
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </Ingredients>
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="price">Preço</Label>
              <InputMask
                id="price"
                placeholder="R$ 40,00"
                value={price}
                onChange={setPrice}
              />
            </InputWrapper>
          </div>

          <InputWrapper>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="A Salada César é uma opção refrescante para o verão"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </InputWrapper>

          <div className="col-1">
            <Button
              title="Salvar alterações"
              color="TOMATO_400"
              onClick={handleNewDish}
            />
          </div>
        </Form>
      </Content>
    </Container>
  )
}

import { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import { Pizza } from '../models/Pizza'
import Navbar from './Navbar'
import PizzaDashboard from '../../components/PizzaDashboard'

function App() {
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [editPizza, setEditPizza] = useState<Pizza | undefined>(undefined)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        axios
            .get<Pizza[]>('http://localhost:8080/api/1.0/pizzas')
            .then((response) => {
                setPizzas(response.data)
            })
    }, [])

    function handleEditPizza(id: number) {
        setEditPizza(pizzas.find((pizza) => pizza.id === id))
    }

    function cancelEditPizza() {
        setEditPizza(undefined)
    }

    function handleFormOpen(id?: number) {
        id ? handleEditPizza(id) : cancelEditPizza()
        setEditMode(true)
    }

    function handleFormClose() {
        setEditMode(false)
    }

    return (
        <div>
            <Navbar openEditForm={handleFormOpen} />
            <Container style={{ marginTop: '7em' }}>
                <PizzaDashboard
                    pizzas={pizzas}
                    selectedPizza={editPizza}
                    selectEditPizza={handleEditPizza}
                    cancelEditPizza={cancelEditPizza}
                    editMode={editMode}
                    openEditForm={handleFormOpen}
                    closeEditForm={handleFormClose}
                />
            </Container>
        </div>
    )
}

export default App

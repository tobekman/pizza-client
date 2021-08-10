import { useEffect, useState } from 'react'
import './styles.css'
import { Container } from 'semantic-ui-react'
import { Pizza } from '../models/Pizza'
import Navbar from './Navbar'
import PizzaDashboard from '../../components/PizzaDashboard'
import agent from '../api/agent'

function App() {
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [editPizza, setEditPizza] = useState<Pizza | undefined>(undefined)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        agent.Pizzas.list().then((response) => {
            setPizzas(response)
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

    function handleCreateOrEditPizza(pizza: Pizza) {
        if (pizza.id) {
            agent.Pizzas.update(pizza).then(() => {
                setPizzas([...pizzas.filter((p) => p.id !== pizza.id), pizza])
                setEditMode(false)
                setEditPizza(pizza)
            })
        } else {
            agent.Pizzas.create(pizza).then(() => {
                setPizzas([...pizzas, pizza])
                setEditMode(false)
                setEditPizza(pizza)
            })
        }
    }

    function handleDeletePizza(id: number) {
        agent.Pizzas.delete(id)
        setPizzas([...pizzas.filter((p) => p.id !== id)])
    }

    return (
        <div>
            <Navbar openEditForm={handleFormOpen} />
            {pizzas.length > 0 ? (
                <Container style={{ marginTop: '7em' }}>
                    <PizzaDashboard
                        pizzas={pizzas}
                        selectedPizza={editPizza}
                        selectEditPizza={handleEditPizza}
                        cancelEditPizza={cancelEditPizza}
                        editMode={editMode}
                        openEditForm={handleFormOpen}
                        closeEditForm={handleFormClose}
                        createOrEdit={handleCreateOrEditPizza}
                        deletePizza={handleDeletePizza}
                    />
                </Container>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default App

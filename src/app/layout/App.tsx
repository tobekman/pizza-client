import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import { Pizza } from '../models/Pizza'
import Navbar from './Navbar'
import PizzaDashboard from '../../components/PizzaDashboard'

function App() {
    const [pizzas, setPizzas] = useState<Pizza[]>([])

    useEffect(() => {
        axios
            .get<Pizza[]>('http://localhost:8080/api/1.0/pizzas')
            .then((response) => {
                setPizzas(response.data)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <Container style={{ marginTop: '7em' }}>
                <PizzaDashboard pizzas={pizzas} />
            </Container>
        </div>
    )
}

export default App

import { Grid } from 'semantic-ui-react'
import { Pizza } from '../app/models/Pizza'
import PizzaForm from './PizzaForm'
import PizzaList from './PizzaList'

interface Props {
    pizzas: Pizza[]
}

const PizzaDashboard = ({ pizzas }: Props) => {
    return (
        <Grid>
            <Grid.Column width="10">
                <PizzaList pizzas={pizzas} />
            </Grid.Column>
            <Grid.Column width="6">
                <PizzaForm />
            </Grid.Column>
        </Grid>
    )
}

export default PizzaDashboard

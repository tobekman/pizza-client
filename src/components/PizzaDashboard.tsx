import { Grid } from 'semantic-ui-react'
import { Pizza } from '../app/models/Pizza'
import PizzaForm from './PizzaForm'
import PizzaList from './PizzaList'

interface Props {
    pizzas: Pizza[]
    selectedPizza: Pizza | undefined
    selectEditPizza: (id: number) => void
    cancelEditPizza: () => void
    editMode: boolean
    openEditForm: (id?: number) => void
    closeEditForm: () => void
    createOrEdit: (pizza: Pizza) => void
}

const PizzaDashboard = ({
    pizzas,
    selectedPizza,
    selectEditPizza,
    cancelEditPizza,
    editMode,
    openEditForm,
    closeEditForm,
    createOrEdit,
}: Props) => {
    return (
        <Grid>
            <Grid.Column width="10">
                <PizzaList
                    pizzas={pizzas}
                    selectEditPizza={selectEditPizza}
                    openEditForm={openEditForm}
                />
            </Grid.Column>
            <Grid.Column width="6">
                {editMode && (
                    <PizzaForm
                        closeEditForm={closeEditForm}
                        pizza={selectedPizza}
                        createOrEdit={createOrEdit}
                        pizzas={pizzas}
                    />
                )}
            </Grid.Column>
        </Grid>
    )
}

export default PizzaDashboard

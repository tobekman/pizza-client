import { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Pizza } from '../app/models/Pizza'

interface Props {
    pizza: Pizza | undefined
    closeEditForm: () => void
    createOrEdit: (pizza: Pizza) => void
    pizzas: Pizza[]
}

const PizzaForm = ({
    pizza: selectedPizza,
    closeEditForm,
    createOrEdit,
    pizzas,
}: Props) => {
    const initialState = selectedPizza ?? {
        id: 0,
        name: '',
        toppings: '',
        price: 0,
    }

    const [pizza, setPizza] = useState(initialState)

    function handleSubmit() {
        if (pizza.id === 0) {
            pizza.id = createNewId()
        }
        createOrEdit(pizza)
    }

    function handleInputChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target
        setPizza({ ...pizza, [name]: value })
    }

    function createNewId() {
        let ids: number[] = []
        pizzas.forEach((p) => ids.push(p.id))
        let max = Math.max(...ids)
        return max + 1
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input
                    placeholder="Namn"
                    value={pizza.name}
                    name="name"
                    onChange={handleInputChange}
                />
                <Form.TextArea
                    placeholder="Toppings"
                    value={pizza.toppings}
                    name="toppings"
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="Pris"
                    value={pizza.price}
                    name="price"
                    onChange={handleInputChange}
                />
                <Button
                    floated="right"
                    positive
                    type="submit"
                    content="Lägg till"
                />
                <Button
                    floated="right"
                    positive
                    type="button"
                    content="Avbryt"
                    onClick={() => closeEditForm()}
                />
            </Form>
        </Segment>
    )
}

export default PizzaForm

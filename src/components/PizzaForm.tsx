import { Button, Form, Segment } from 'semantic-ui-react'
import { Pizza } from '../app/models/Pizza'

interface Props {
    pizza: Pizza | undefined
    closeEditForm: () => void
}

const PizzaForm = ({ pizza, closeEditForm }: Props) => {
    return (
        <Segment clearing>
            <Form>
                {pizza ? (
                    <Form.Input content={pizza.name} />
                ) : (
                    <Form.Input placeholder="Namn" />
                )}
                {pizza ? (
                    <Form.TextArea content={pizza.toppings} />
                ) : (
                    <Form.TextArea placeholder="Ingredienser" />
                )}
                {pizza ? (
                    <Form.Input content={pizza.price} />
                ) : (
                    <Form.Input placeholder="Pris" />
                )}

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

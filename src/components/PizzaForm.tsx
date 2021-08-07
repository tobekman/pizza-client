import { Button, Form, Segment } from 'semantic-ui-react'

const PizzaForm = () => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Namn" />
                <Form.TextArea placeholder="Ingredienser" />
                <Form.Input placeholder="Pris" />
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
                />
            </Form>
        </Segment>
    )
}

export default PizzaForm

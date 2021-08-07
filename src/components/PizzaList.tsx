import { Button, Header, Item, List, Segment } from 'semantic-ui-react'
import { Pizza } from '../app/models/Pizza'

interface Props {
    pizzas: Pizza[]
}

const PizzaList = ({ pizzas }: Props) => {
    return (
        <Segment>
            <Item.Group divided>
                {pizzas.map((pizza: Pizza) => (
                    <Item key={pizza.id}>
                        <Item.Content>
                            <Item.Header as="a">{pizza.name}</Item.Header>
                            <Item.Meta>{pizza.toppings}</Item.Meta>
                            <Item.Extra>{pizza.price + ' kr'}</Item.Extra>
                            <Item.Extra>
                                <Button
                                    floated="right"
                                    content="Ta bort"
                                    color="red"
                                />
                                <Button
                                    floated="right"
                                    content="Ändra"
                                    color="blue"
                                />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default PizzaList

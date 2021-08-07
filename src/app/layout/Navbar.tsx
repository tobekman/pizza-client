import { Button, Container, Menu } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img
                        src="/images/pizza-icon2.png"
                        alt="pizza icon"
                        style={{ marginRight: '1em' }}
                    />
                    Pizza time!
                </Menu.Item>
                <Menu.Item name="Meny" />
                <Menu.Item>
                    <Button positive content="Lägg till en pizza" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default Navbar

import styled from "styled-components"

import ImageWidthSpace from "../src/components/layout/ImageWidhtSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"

const FormContaineer = styled.div`
    margin-top: 60px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px;
`

const Text = styled.p`
    text-align: center;
`

function LoginPage() {
    return (
        <ImageWidthSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, esta aqui!</H4>
            <FormContaineer>
                <H2>Entre em sua conta</H2>
                <Form>
                    <input placeholder="Email ou usuário" type="email" />
                    <input placeholder="Senha" type="password" />
                    <button>Entrar</button>
                </Form>
                <Text>Não possui uma conta? <a href="#">Faça seu cadastro</a></Text>
            </FormContaineer>
        </ImageWidthSpace>
    )
}

export default LoginPage
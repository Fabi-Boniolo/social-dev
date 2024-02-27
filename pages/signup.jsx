import { useState } from 'react'
import styled from "styled-components"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { signupSchema } from '../modules/user/user.schema'

import ImageWidthSpace from "../src/components/layout/ImageWidhtSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

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

function SignupPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signupSchema)
    })


    const handlerForm = (data) => {
        console.log(data)
    }
    
    console.log(errors)

    return (
        <ImageWidthSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, esta aqui!</H4>
            <FormContaineer>
                <H2>Crie sua conta</H2>
                <Form onSubmit = { handleSubmit(handlerForm)}>
                    <Input label="Nome" {...register('firstName')} />
                    <Input label="Sobrenome" {...register('lastName')} />
                    <Input label="Usuário" {...register('user')} />
                    <Input label="Email" type="email" {...register('email')}/>
                    <Input label="Senha" type="password" {...register('password')} />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
            </FormContaineer>
        </ImageWidthSpace>
    )
    }

export default SignupPage
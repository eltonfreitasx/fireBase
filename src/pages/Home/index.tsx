import { useState, FormEvent } from 'react'
import { Container } from './styles'
import {Link} from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

export function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e: FormEvent){
        e.preventDefault()

        if(email !== '' && password !== ''){

            await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                //navegar para admin
                navigate('/admin', { replace: true })
            })
            .catch((error) => {
                console.log(error)
            })

        }else {
            alert('Preencha todos os campos seu verme')
        }
    }

    return (
        <Container>
            <h1>Lista de tarefas</h1>
            <span>Gerencie sua agenda de forma fácil.</span>

            <form onSubmit={handleLogin}>
                <input type='text'
                placeholder='digite seu email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input type='password'
                placeholder='digite sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Acessar</button>
            </form>

            <Link to='/register'>
                Nao possui uma conta ? Cadastre-se
            </Link>
        </Container>
    )
}
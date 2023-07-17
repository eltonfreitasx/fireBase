
import { useState, FormEvent } from 'react'
import {Link} from 'react-router-dom'
import { Container } from '../Home/styles'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleRegister(e: FormEvent){
        e.preventDefault()

        if(email !== '' && password !== ''){
          await createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate('/admin', { replace: true })
          })
          .catch(() => {
            ''
          })
        }else {
            alert('Preencha todos os campos')
        }
    }

    return (
        <Container>
            <h1>Lista de tarefas</h1>
            <span>Vamos criar sua conta</span>

            <form onSubmit={handleRegister}>
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

                <button type='submit'>Cadastrar</button>
            </form>

            <Link to='/'>
                Ja possui uma conta? Faça login
            </Link>
        </Container>
    )
}
import { useState, useEffect, FormEvent } from "react";
import { AdminContainer, BtnRegister, List, Exit } from "./styles";
import { auth, db } from "../../firebaseConnection";
import { signOut } from "firebase/auth";
import { 
    addDoc,
    collection,
    onSnapshot,
    getDocs,
    query,
    orderBy,
    where
} from "firebase/firestore"

interface Tarefa {
    id: string;
    tarefa: string;
    userUid: string;
}

export function Admin(){
    const [tarefaInput, setTarefaInput] = useState('')
    const [user, setUser] = useState({})

    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    useEffect(() => {
        async function loadTarefas() {
            const userDetail = localStorage.getItem('@detailUser')
            setUser(userDetail ? JSON.parse(userDetail) : {})

            if(userDetail){
                 const data = JSON.parse(userDetail)

                const tarefaRef = collection(db, "tarefas")

                const q = await query(tarefaRef, orderBy("created", "desc"), where("userUid", "==", data))

                const unsub = onSnapshot(q, (snapshot) => {
                    const lista: Tarefa[] = [];


                    snapshot.forEach((doc)=> {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })
                    setTarefas(lista)
                })
            }
        }

        loadTarefas()
    }, [])

    async function handleRegister(e: FormEvent) {
        e.preventDefault()

        if(tarefaInput === ''){
            alert("Digite sua tarefa...")
            return;
        }

        await addDoc(collection(db, "tarefas"), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user,
        })
        .then((tarefa) => {
            console.log(tarefa)
            setTarefaInput('')
        })
        .catch((erro) => {
            console.log("ERRO AO REGISTRAR" + erro)
        })
    }

    async function handleLogout() {
        await signOut(auth);
    }

    return (
        <AdminContainer>
            <h1>Minhas tarefas</h1>

            <form onSubmit={handleRegister}>
                <textarea 
                placeholder="Digite sua tarefa..."
                value= {tarefaInput}
                onChange= {(e) => setTarefaInput(e.target.value) } 
                />

            <BtnRegister type="submit">Registrar tarefa</BtnRegister>
            </form>

           {tarefas.map((item) => (
                 <List key={item.id}>
                 <p>{item.tarefa}</p>
 
                 <div>
                     <button>Editar</button>
                     <button>Concluir</button>
                 </div>
             </List>
           ))}

            <Exit onClick={handleLogout}>Sair</Exit>
        </AdminContainer>
    )
}
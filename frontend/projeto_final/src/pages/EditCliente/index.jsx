import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCliente, getCliente } from '../../services/cliente-requests.js';
function EditCliente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        id: '',
        nome: '',
        idade: '',
        email: ''
    });
    useEffect(() => {
        buscaCliente(id);
    }, []);
    const buscaCliente = async (id) => {
        const clienteDados = await (await getCliente(id)).data;
        //console.log(clienteDados);
        setCliente(clienteDados);
    }
    const handleChange = (event) => {

        const { name, value } = event.target;
        setCliente((clienteAnterior) => {
            return {
                ...clienteAnterior,
                [name]: value
            }
        }
        );
    }

    const editarCliente = async (event) => {
        event.preventDefault();
        //console.log(cliente);
        await editCliente(cliente);
        navigate('/cliente/view');
    }
    return (
        <>
            <div class="w-full h-auto flex justify-center items-center ease-in-out p-10 mt-10">
                <div class="w-500 h-500 justify-center items-center flex flex-col bg-slate-300 dark:bg-slate-800 duration-500 ease-in-out p-10 rounded-lg shadow-md gap-1">
                    <div class="flex justify-center items-center">
                        <h1 class="text-4xl text-purple-700 font-bold">Editar Clientes</h1>
                    </div>

                    <form  onSubmit={editarCliente} class="w-400 flex flex-col items-start justify-center gap-1">
                        <div class="flex gap-2 w-full">
                            <div class="w-full">
                                <label for="name" class="text-slate-800 dark:text-white duration-500 ease-in-out mb-2">ID</label>
                                <input class="w-full rounded-lg p-2 bg-white text-slate-800 dark:bg-slate-700 dark:text-white border-slate-300 border text-base shadow-md focus:outline-none box-border placeholder-white::placeholder duration-500 ease-in-out" type="text" name='id' value={cliente.id} onChange={handleChange} readOnly placeholder="Id"/>
                            </div>
                            <div class="w-full">
                                <label for="tel" class="text-slate-800 dark:text-white duration-500 ease-in-out mb-2">Nome</label>
                                <input required class="w-full rounded-lg p-2 bg-white text-slate-800 dark:bg-slate-700 dark:text-white border-slate-300 border text-base shadow-md focus:outline-none box-border placeholder-white::placeholder duration-500 ease-in-out" type="text" name='nome' value={cliente.nome} onChange={handleChange} placeholder="Nome"/>
                            </div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <div class="w-full">
                                <label for="email" class="text-slate-800 dark:text-white duration-500 ease-in-out mb-2">Idade</label>
                                <input required class="w-full rounded-lg p-2 bg-white text-slate-800 dark:bg-slate-700 dark:text-white border-slate-300 border text-base shadow-md focus:outline-none box-border placeholder-white::placeholder duration-500 ease-in-out" type="text" name='idade' value={cliente.idade} onChange={handleChange} placeholder="Idade"/>
                            </div>
                            <div class="w-full">
                                <label for="image" class="text-slate-800 dark:text-white duration-500 ease-in-out mb-2">Email</label>
                                <input required class="w-full rounded-lg p-2 bg-white text-slate-800 dark:bg-slate-700 dark:text-white border-slate-300 border text-base shadow-md focus:outline-none box-border placeholder-white::placeholder duration-500 ease-in-out" type="text" name='email' value={cliente.email} onChange={handleChange} placeholder="Email"/>
                            </div>
                        </div>
                        <button type="submit" class="w-full py-2 mt-2 rounded-md focus:outline-none text-uppercase font-semibold tracking-wider text-white bg-purple-700 cursor-pointer shadow-lg hover:bg-purple-800 duration-500 ease-in-out">Atualizar</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default EditCliente;
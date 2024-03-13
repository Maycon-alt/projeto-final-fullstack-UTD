import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCliente } from '../../services/cliente-requests.js';
function AddCliente() {
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nome: '',
        idade: '',
        email: ''
    });
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

    const salvaCliente = async (event) => {
        event.preventDefault();
        //console.log(cliente);
        await addCliente(cliente);
        navigate('/cliente/view');
    }
    return (
        <>
            <div class="flex justify-center items-center h-screen">
                <div class="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                    <h1 class="text-2xl font-bold mb-4">Adicionar Cliente</h1>

                    <form onSubmit={salvaCliente} class="space-y-4">
                        <div class="border border-gray-300 p-4 rounded-lg">
                            <label class="block mb-1">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={cliente.nome}
                                onChange={handleChange}
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div class="border border-gray-300 p-4 rounded-lg">
                            <label class="block mb-1">Idade</label>
                            <input
                                type="text"
                                name="idade"
                                value={cliente.idade}
                                onChange={handleChange}
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div class="border border-gray-300 p-4 rounded-lg">
                            <label class="block mb-1">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={cliente.email}
                                onChange={handleChange}
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <button type="submit" class="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700">
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddCliente;
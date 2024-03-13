import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getClientes, removeCliente } from "../../services/cliente-requests.js";
import { FaTrash, FaEdit } from 'react-icons/fa';
function ViewCliente() {
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        carregaClientes();
    }, []);
    const carregaClientes = async () => {
        const clientesResponse = await getClientes();
        setClientes(await clientesResponse.data);
        //console.log(clientes);
    }
    const deleteCliente = async (id) => {
        await removeCliente(id);
        carregaClientes();
    }
    return (
        <>
            <div class="flex justify-center items-center h-screen">
                <div class="w-auto p-6 bg-white shadow-md rounded-lg">
                    <h1 class="text-2xl font-bold mb-4">ViewCliente</h1>

                    <table class="table w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th class="p-3 border border-gray-200">id</th>
                                <th class="p-3 border border-gray-200">nome</th>
                                <th class="p-3 border border-gray-200">idade</th>
                                <th class="p-3 border border-gray-200">email</th>
                                <th class="p-3 border border-gray-200">ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(cliente => (
                                <tr key={cliente.id}>
                                    <td class="p-3 border border-gray-200" data-label="Id">{cliente.id}</td>
                                    <td class="p-3 border border-gray-200" data-label="Nome">{cliente.nome}</td>
                                    <td class="p-3 border border-gray-200" data-label="Idade">{cliente.idade}</td>
                                    <td class="p-3 border border-gray-200" data-label="Email">{cliente.email}</td>
                                    <td class="p-3 border border-gray-200">
                                        <div class="flex space-x-2">
                                            <Link to={`../edit/${encodeURIComponent(cliente.id)}`}>
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            <button onClick={() => deleteCliente(cliente.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default ViewCliente;
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">FARMÁCIA</Link>

                    <div className='flex gap-4'>
                        Produtos
                    <Link to='/categorias' className="hover:underline">Categorias</Link>
                    <Link to='/cadastrarcategorias' className='hover:underline'>Cadastrar categorias</Link>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    FARMÁCIA

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar categorias
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
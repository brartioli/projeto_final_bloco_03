
function Home() {
        return (
            <>
                <div className="bg-lime-50 flex justify-center">
                    <div className='container grid grid-cols-2 text-red-950'>
                        <div className="flex flex-col gap-4 items-center justify-center py-4">
                            <h2 className='text-5xl font-bold'>
                                Seja Bem-vinde a farmácia!
                            </h2>
                            <p className='text-xl'>
                                Medicamento bom e barato é aqui!
                            </p>
    
                            <div className="flex justify-around gap-4">
                                <div className='rounded text-red-950 
                                                border-red-900 border-solid border-2 py-2 px-4'
                                    >
                                    Nova produto
                                </div>
                            </div>
                        </div>
    
                        <div className="flex justify-center ">
                            <img
                                src="https://i.pinimg.com/736x/99/d0/fb/99d0fbdd68d2f65fb38bf87596829d1d.jpg"
                                alt="Imagem Página Home"
                                className='w-2/3'
                            />
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Home
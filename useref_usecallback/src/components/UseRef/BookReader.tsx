// objetivo: nos permite crear una referecncia mutable qe persiste durante todo el ciclo de vida del componente
// sin causar un re-render
// objetivo 2: hacer referencia a un elemento del DOM.

// ejemplo:
// un marcador de un libro qe usamos para guardar  la ultioma posicion de la lectura.
// no modifica el contenido del libro

import { useRef, useState } from "react"

export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    //const [ currentPage, setCurrentPage ] = useState(1)
    const [ , setCurrentPage ] = useState(1)



    const nextPage = () =>{
        currentPageRef.current +=1;
        console.log(`Avanzastes a la siguiente página ${currentPageRef.current}`)
 }

    const previousPage = () => {
        if (currentPageRef.current === 1) {
            console.log(`No se puede retroceder la página porque ya te encuentras en ${currentPageRef.current}`)
            return
        }

        currentPageRef.current -= 1;
        console.log(`Retrocedistes a la página ${currentPageRef.current}`)
    }

    const goTOPage = (page : number) =>{
        if (page < 1) {
            console.log(` No se puede saltar a un valor inmposible `)
        return;
        }

        currentPageRef.current = page;
        setCurrentPage(page)
        console.log(`Saltastes a la página ${currentPageRef.current} `)
    }

    return(
        <div>
            <h2>Lectura de libros</h2>
            <p>página actual: {currentPageRef.current} </p>
            <p>página actual [STATE]: {currentPageRef.current} </p>

            <button onClick={previousPage}> Página Anterior  </button>
            <button onClick={nextPage}> Página Siguiente  </button>
            <button onClick={() => {goTOPage(50)}}> Ir a la Página 50  </button>

        </div>
    )
}
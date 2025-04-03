import { createContext, ReactNode, useContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<{
    state:boolean;
    setState:React.Dispatch<React.SetStateAction<boolean>>;
}>({
    state: false,
    setState: () => null
})


export const ModalProvider = ({children}: {children: ReactNode}) => {
    const [state , setState] = useState<boolean>(false)

    return <ModalContext.Provider value={{state, setState}}>{children}</ModalContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () =>{
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error ("Modal is bening used outside it´s provider")
    }

    return context;
}
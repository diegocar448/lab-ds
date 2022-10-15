import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

//aqui temos a estrutura que permite usarmos todos os atributos do HTML tradicional
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

//interface na div raiz
export interface TextInputRootProps{
    children: ReactNode;
}

//aqui temos nossa div raiz recebendo as props da interface
function TextInputRoot(props: TextInputRootProps){
    //para dar focus no componente vindo do componente filho
    return (
        <div className='flex itens-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            { props.children }
        </div>
    )    
}

//function TextInputIcon(){}


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

function TextInputInput( props: TextInputInputProps){
    return (
            <input
                className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
                {...props}
            />               
    )
}


//aqui passamos todos os inputs
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}
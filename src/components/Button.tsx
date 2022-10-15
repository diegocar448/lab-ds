import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

//variações de tamanho
export interface ButtonProps{    
    children: ReactNode;    
    asChild?:boolean;
}


export function Button({ children, asChild }: ButtonProps){

    //verifica se há alguma tag senão será a tag padrão <span>
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            //w-full //botão ocupa lateral toda
            //hover:bg-cyan-300  // alterar hover
            //focus:ring-2 //efeito visual ao clicar
            className={
                clsx(
                    'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
                )
            }
        >
            {children}
        </Comp>
    )
}

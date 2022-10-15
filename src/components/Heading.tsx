import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

//variações de tamanho
export interface HeadingProps{
    size?:'sm' | 'md' | 'lg';
    children: ReactNode;    
    asChild?:boolean;
}


export function Heading({ size = 'md', children, asChild }: HeadingProps){

    //verifica se há alguma tag senão será a tag padrão <span>
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp 
            className={
                clsx(
                    'text-gray-100 font-sans',
                    {
                        'text-lg': size === 'sm',
                        'text-xl': size === 'md',
                        'text-2xl': size === 'lg',
                    }
                )
            }
        >
            {children}
        </Comp>
    )
}

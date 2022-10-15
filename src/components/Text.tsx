import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

//variações de tamanho
export interface TextProps{
    size?:'sm' | 'md' | 'lg';
    children: ReactNode;    
    asChild?:boolean;
}


export function Text({ size = 'md', children, asChild }: TextProps){

    //verifica se há alguma tag senão será a tag padrão <span>
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp 
            className={
                clsx(
                    'text-gray-100 font-sans',
                    {
                        'text-xs': size === 'sm',
                        'text-sm': size === 'md',
                        'text-md': size === 'lg',
                    }
                )
            }
        >
            {children}
        </Comp>
    )
}

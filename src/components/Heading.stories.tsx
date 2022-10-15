import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default{
    title: 'Components/Heading',
    component:Heading,
    //configurações globais para todas as variações
    args:{
        children:'Lorem ipsum.',
        //size padrão,
        size: 'md',
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }            
        }
    }
} as Meta<HeadingProps>

//configurações por variação do ambiente
//aqui criamos variações do nosso ambiente passando propriedades para ele
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args:{
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild:true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
                disable:true,
            }
        }        
    }
}
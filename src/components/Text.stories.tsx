import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default{
    title: 'Components/Text',
    component:Text,
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
} as Meta<TextProps>

//configurações por variação do ambiente
//aqui criamos variações do nosso ambiente passando propriedades para ele
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args:{
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild:true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        }        
    }
}
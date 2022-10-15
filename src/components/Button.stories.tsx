import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default{
    title: 'Components/Button',
    component:Button,
    //configurações globais para todas as variações
    args:{
        children:'Create account',        
    },
    argTypes:{
        
    }
} as Meta<ButtonProps>

//configurações por variação do ambiente
//aqui criamos variações do nosso ambiente passando propriedades para ele
export const Default: StoryObj<ButtonProps> = {}


import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';

export default{
    title: 'Components/TextInput',
    component:TextInput,
    //configurações globais para todas as variações
    args:{
        placeholder: 'Digite seu e-mail address',
        type: 'email'
    },
    argTypes:{
        
    }
} as Meta<TextInputProps>

//configurações por variação do ambiente
//aqui criamos variações do nosso ambiente passando propriedades para ele
export const Default: StoryObj<TextInputProps> = {}


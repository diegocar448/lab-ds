import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput';

export default{
    title: 'Components/TextInput',
    component:TextInput.Root,
    //configurações globais para todas as variações
    args:{
        children:(
            <TextInput.Input placeholder="Digite seu e-mail" />
        )
    },
    argTypes:{
        children:{
            table:{
                disable:true,
            }
        }
    }
} as Meta<TextInputRootProps>

//configurações por variação do ambiente
//aqui criamos variações do nosso ambiente passando propriedades para ele
export const Default: StoryObj<TextInputRootProps> = {}


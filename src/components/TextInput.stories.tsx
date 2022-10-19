import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';

export default{
    title: 'Components/TextInput',
    component:TextInput.Root,
    //configurações globais para todas as variações
    args:{
        children:[            
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Digite seu e-mail" />
        ]
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

//essa variante é para quando o usuario escolhe por não usar o Icon no input
export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder="Digite seu e-mail" />
    }
}


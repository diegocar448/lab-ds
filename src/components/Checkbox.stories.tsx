import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default{
    title: 'Components/Checkbox',
    component:Checkbox,
    //configurações globais para todas as variações
    args:{},
    argTypes:{},
    decorators:[
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size="sm">
                        Lembrar em 30 dias
                    </Text>
                </div>
            )
        }               
    ],
} as Meta<CheckboxProps>

//configurações por variação do ambiente
//aqui criamos variações do nosso ambiente passando propriedades para ele
export const Default: StoryObj<CheckboxProps> = {}


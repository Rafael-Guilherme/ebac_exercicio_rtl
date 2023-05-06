import { fireEvent, render, screen } from '@testing-library/react';
//import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários novos', () => {
        const { debug } = render(<PostComment/>)
        const comentarioNovo = screen.getByTestId('texto-comentario')
        const botao = screen.getByTestId('btn-adcionar-comentario')
        fireEvent.change(comentarioNovo, {
            target: {
                value: 'Comentário 1'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(comentarioNovo, {
            target: {
                value: 'Comentário 2'
            }
        })
        fireEvent.click(botao)
        debug()

        expect(screen.getAllByTestId('lista-comentario')).toHaveLength(2)
    })
});
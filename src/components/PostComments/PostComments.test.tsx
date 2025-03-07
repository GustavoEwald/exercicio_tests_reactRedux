import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

const primeiroComentario = 'Este é o primeiro comentário'
const segundoComentario = 'Este é o segundo comentário'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Renderizar o primeiro comentário', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: primeiroComentario
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Este é o primeiro comentário')).toBeInTheDocument()
    })
    test('Renderizar dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: primeiroComentario
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: segundoComentario
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getAllByTestId('lista-comentarios')).toHaveLength(2)
        expect(screen.getByText('Este é o primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Este é o segundo comentário')).toBeInTheDocument()
    })
});
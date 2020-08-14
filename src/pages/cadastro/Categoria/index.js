import React from 'react';
import { Link } from 'react-router-dom';
import PagesDefaut from '../../../components/PagesDefault';

function CadastroCategoria() {
    return (
        <PagesDefaut>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PagesDefaut>
    )
}

export default CadastroCategoria;
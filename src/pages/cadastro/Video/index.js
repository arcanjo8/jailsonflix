import React from 'react';
import { Link } from 'react-router-dom';
import PagesDefaut from '../../../components/PagesDefault';

function CadastroVideo() {
    return (
        <PagesDefaut>
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PagesDefaut>
    )
}

export default CadastroVideo;
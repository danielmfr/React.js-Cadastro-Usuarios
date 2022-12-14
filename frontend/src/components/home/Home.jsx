import React from 'react';
import Main from '../template/Main';

function Home(props) {
    return (
        <Main icon="home" title="Início" subtitle="Projeto de React" >
            <div className="display-4">Bem-Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
        </Main>
    )
}

export default Home;
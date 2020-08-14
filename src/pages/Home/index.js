import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
        <Menu/>

        <BannerMain
           videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
           url={dadosIniciais.categorias[0].videos[0].url}
           videoDescription={"Assista a este curso de loja virtual e aos outros cursos do downs master totalmente gratuitos e com emissão de certificados." }
        />
        <Carousel
          ignoreFirstVideo // para que o primeiro video do BannerMain não entre aqui
          category={dadosIniciais.categorias[0]} // pega os dados de dados.iniciais.json primeiro array [0] Front-end
        />
        <Carousel
          category={dadosIniciais.categorias[1]} // pega os dados de dados.iniciais.json segundo array [1] Bach-end
        />
        <Carousel
          category={dadosIniciais.categorias[2]} // pega os dados de dados.iniciais.json terceiro array [2] Data Science e Inteligência Artificial
        />
        <Carousel
          category={dadosIniciais.categorias[3]} // pega os dados de dados.iniciais.json quarto array [3] Filmes
        />
        <Carousel
          category={dadosIniciais.categorias[4]} // pega os dados de dados.iniciais.json segund array [4]  Games
        />
        <Carousel
          category={dadosIniciais.categorias[5]} // pega os dados de dados.iniciais.json segund array [5]  Aprendendo a aprender tecnologia
        />
        <Footer/> 
    </div>
  );
}

export default Home;

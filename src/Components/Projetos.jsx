
import React from "react";
import Previsaodotempo from "../assets/previsaodotempo.png";
import Cordel from "../assets/cordel.png";
import RedesSociais from "../assets/redessociais.png";
import Calculadora from "../assets/calculadora.png";
import { Img, Section } from "../Styled/ProjetosStyle";

export default function Projeto() {
  return (
    <section>
      <h2>Projetos</h2>

      <Section>
        <div>
          <section>
            <figure>
              <a href="https://previsao-do-tempo-xi.vercel.app/" target="_blank">
                <Img src={Previsaodotempo} alt="" />
              </a>
            </figure>
            <div>
              <h2>Previsão do Tempo</h2>
              <h3>
                Se você quiser saber a previsão do tempo onde você mora, é só
                acessar esse site.
              </h3>
              <p>
                Construí esse site com HTML, CSS e JavaScript, consumindo uma
                API de Previsão do tempo.
              </p>
            </div>
          </section>
        </div>

        <section>
          <figure>
            <a href="https://carladanielaa.github.io/projeto-cordel/" target="_blank">
              <Img src={Cordel} alt="" />
            </a>
          </figure>
          <div>
            <h2>Cordel</h2>
            <h3>Aprendendo a utilizar o CSS.</h3>
            <p>Esse site foi construído usando HTML e CSS.</p>
          </div>
        </section>

        <section>
          <figure>
            <a href="https://carladanielaa.github.io/projeto-social/" target="_blank">
              <Img src={RedesSociais} alt="" />
            </a>
          </figure>
          <div>
            <h2>Redes Sociais</h2>
            <h3>Neste site, aprendi a usar o iframe.</h3>
            <p>Construí com HTML e CSS.</p>
          </div>
        </section>

        <section>
          <figure>
            <a href="https://calculadora-alpha-five.vercel.app/" target="_blank">
              <Img src={Calculadora} alt="" />
            </a>
          </figure>
          <div>
            <h2>Calculadora</h2>
            <h3>Aprendendo a usar o React</h3>
            <p>Aqui usei React e Styled-components.</p>
          </div>
        </section>
      </Section>
    </section>
  );
}
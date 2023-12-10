
import React from "react";
import Previsaodotempo from "../assets/previsaodotempo.png";
import Cordel from "../assets/cordel.png";
import RedesSociais from "../assets/redessociais.png";
import Calculadora from "../assets/calculadora.png";
import { Img, Section, Section1 } from "../Styled/ProjetosStyle";

export default function Projeto() {
  return (
    <Section1>
      <h1>Projetos</h1>

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
               Consumindo uma API
              </h3>
              <p>
                Construído com HTML, CSS e JavaScript
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
    </Section1>
  );
}
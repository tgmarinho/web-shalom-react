import React, { Fragment } from "react";
import Pulse from "react-reveal/Pulse";

const About = () => {
  return (
    <Fragment>
      <Pulse duration={3000}>
        <section id="sobre" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3>Igreja Batista do Avivamento Shalom</h3>
                <h2>NOSSO TEMA</h2>
                <p className="lead">
                  <i>
                    Haverá óh Shalom, estabilidade nos teus tempos, abundância
                    de salvação, sabedoria e conhecimento; e o temor do Senhor
                    será o seu tesouro. Isaías 33:6
                  </i>
                </p>

                <h2>CULTOS</h2>
                <p className="lead">
                  Domingo 18h - Intercessão | 18h30 - Adoração e Palavra
                </p>
                <p className="lead">
                  Domingo 19h (quinzenalmente) - Culto Kids/Teens
                </p>
                <p className="lead">
                  Segunda-feira a Sexta-feira das 6h às 7h30 - Oração com os
                  Atalaias
                </p>
                <p className="lead">
                  Segunda-feira 18h às 19h30 - Oração e Intercessão
                </p>
                <p className="lead">
                  Segunda-feira 19h30 - Ensaio da Equipe de Louvor
                </p>
                <p className="lead">Terça-feira 14h30 - Culto de Milagres</p>
                <p className="lead">Quarta-feira às 19h30 - Culto da Vitória</p>
                <p className="lead">
                  Sexta-feira às 19h - Oração e intercessão
                </p>
                <p className="lead">
                  3ª Sexta-feira do mês 20h - Vigília Equipe de Louvor
                </p>
                <p className="lead">
                  Aos Sábados - 14h - Escola de Música Teens
                </p>

                <h2>CURSOS</h2>
                <p className="lead">Mulher Única</p>
                <p className="lead">Homem ao Máximo</p>
                <p className="lead">Casados para Sempre</p>
                <p className="lead">Crown - Finanças Pessoais</p>

                <p className="lead">
                  <i>De Fé em Fé, de Glória em Glória!</i>
                </p>
              </div>
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
      </Pulse>
    </Fragment>
  );
};

export default About;

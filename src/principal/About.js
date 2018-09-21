import React, { Fragment } from 'react';
import Pulse from 'react-reveal/Pulse';


const About = () => {

    return (
        <Fragment>
            <Pulse duration={3000}>
                <section id="sobre" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1>SHALOM</h1>
                                <h3>Igreja Batista do Avivamento Shalom</h3>
                                <h2>NOSSO TEMA!</h2>
                                <p className="lead">Haverá óh Shalom, estabilidade nos teus tempos, abundância de salvação, sabedoria e conhecimento; e o temor do Senhor será o seu tesouro. Isaías 33:6</p>

                                <h2>CULTOS</h2>
                                <p className="lead">Domingo 18h - Intercessão | 18h30 - Adoração e Palavra</p>
                                <p className="lead">Domingo 19h - Culto Infantil</p>
                                <p className="lead">Segunda-feira 6h às 7h30 - Oração com os Atalaias</p>
                                <p className="lead">Segunda-feira 18h às 19h30 - Oração e Intercessão</p>
                                <p className="lead">Terça-feira 14h30 - Culto de Milagres</p>
                                <p className="lead">Terça-feira 19h30 - Ensaio da Equipe de Louvor</p>
                                <p className="lead">Quarta-feira 19h30 às 21h - Culto da Vitória</p>
                                <p className="lead">3ª Quarta-feira do mês 14h - Culto no Lar dos Idosos</p>

                                <h2>ENCONTROS</h2>
                                <p className="lead">Sábado - 19h, Meetup|JS (Jovens & Adolescentes)</p>

                                <h2>CURSOS</h2>
                                <p className="lead">Mulher Única</p>
                                <p className="lead">Homem ao Máximo</p>
                                <p className="lead">Casados para Sempre</p>
                                <p className="lead">Crown - Finanças Pessoas</p>
                                <p className="lead"><spam className="text-muted">Tem interesse, fale conosco para montarmos uma nova turma</spam></p>

                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </section>
            </Pulse>
        </Fragment>
    )
}

export default About
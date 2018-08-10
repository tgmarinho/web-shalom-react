import React, { Fragment } from 'react';
import { Zoom } from 'react-reveal'

const Map = () => {

    return (
        <Fragment>
            <Zoom duration={3000}>
                <section id="contato" className="map">
                    <iframe width="100%" height="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.6400430230403!2d-54.797089028872236!3d-22.229449433971894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a83a98c88c6b%3A0x8798d9cb98c8672f!2sIgreja+Batista+do+Avivamento+Shalom!5e0!3m2!1spt-BR!2sbr!4v1497211442297;output=embed" />
                    <br />
                    <small>
                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.6400430230403!2d-54.797089028872236!3d-22.229449433971894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a83a98c88c6b%3A0x8798d9cb98c8672f!2sIgreja+Batista+do+Avivamento+Shalom!5e0!3m2!1spt-BR!2sbr!4v1497211442297;iwloc=A" />
                    </small>
                </section>
            </Zoom>
        </Fragment>

    )

}

export default Map
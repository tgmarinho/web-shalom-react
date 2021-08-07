import React from "react";

const Calendar = () => {
  return (
    <div id="agenda" className="map">
      <br />
      <div className="col-lg-12 text-center">
        <a href="/agenda.html" target="_blank" rel="noopener noreferrer">
          <h2>NOSSA AGENDA</h2>
        </a>
        <p className="lead">Seja bem vindos em nossas programações!</p>
        <a
          href="https://calendar.google.com/calendar/embed?src=avivamentoshalom%40gmail.com&ctz=America/Campo_Grande"
          style={{ border: 0 }}
          width={800}
          height={600}
          frameBorder={0}
          scrolling="no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veja em uma nova guia em tela cheia!
        </a>
      </div>
      <iframe
        width="100%"
        height="100%"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        style={{ borderWidth: 0 }}
        src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showCalendars=0&showTz=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&src=avivamentoshalom%40gmail.com&color=%2329527A&ctz=America%2FCampo_Grande"
      />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Calendar;

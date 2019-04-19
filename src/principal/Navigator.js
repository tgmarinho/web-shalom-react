import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: ""
    };
  }
  //TODO use this https://github.com/rafrex/react-router-hash-link

  // Closes the sidebar menu
  // $("#menu-close").click(function(e) {
  //     e.preventDefault();
  //     $("#sidebar-wrapper").toggleClass("active");
  // });
  // // Opens the sidebar menu
  // $("#menu-toggle").click(function(e) {
  //     e.preventDefault();
  //     $("#sidebar-wrapper").toggleClass("active");
  // });

  handleMenuToggle = async e => {
    e.preventDefault();
    this.state.menuToggle === "active"
      ? this.setState(() => {
          this.setState({ menuToggle: "" });
        })
      : this.setState(() => {
          this.setState({ menuToggle: "active" });
        });
  };

  handleMenuClose = async e => {
    e.preventDefault();
    this.setState(() => {
      this.setState({ menuToggle: "" });
    });
  };

  render() {
    return (
      <div>
        <a
          id="menu-toggle"
          href="#"
          onClick={this.handleMenuToggle}
          className={"btn btn-dark btn-lg toggle"}
        >
          <i className="fa fa-bars" />
        </a>
        <nav id="sidebar-wrapper" className={this.state.menuToggle}>
          <ul className="sidebar-nav">
            <a
              id="menu-close"
              onClick={this.handleMenuClose}
              href="#"
              className="btn btn-light btn-lg pull-right toggle"
            >
              <i className="fa fa-times" />
            </a>
            <li className="sidebar-brand">
              <Link to="#top" onClick={this.handleMenuClose}>
                SHALOM
              </Link>
            </li>
            <li>
              <Link to="#top" onClick={this.handleMenuClose}>
                Início
              </Link>
            </li>
            <li>
              <Link to="#sobre" onClick={this.handleMenuClose}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="#ministerios" onClick={this.handleMenuClose}>
                Ministério
              </Link>
            </li>
            <li>
              <Link to="#agenda" onClick={this.handleMenuClose}>
                agenda
              </Link>
            </li>
            <li>
              <Link to="#fotos" onClick={this.handleMenuClose}>
                Fotos
              </Link>
            </li>
            <li>
              <Link to="#contato" onClick={this.handleMenuClose}>
                Contato
              </Link>
            </li>
            <li>
              <Link to="/musicas">Músicas</Link>
            </li>
            <li>
              <Link to="/palavra/equipe">Ministério | Palavra</Link>
            </li>
            <li>
              <Link to="/louvor/equipe">Ministério | Louvor</Link>
            </li>
            <li>
              <Link to="/lirio-dos-vales/equipe">
                Ministério | Lírio dos Vales
              </Link>
            </li>
            <li>
              <Link to="/infantil/equipe">Ministério | Infatil</Link>
            </li>
            {/* <li>
                            <Link to='/meetup'>Ministério | Meetup</Link>
                        </li> */}
            <li>
              <Link to="/fotos">Galeria de Fotos</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigator;

/*

ISSO AQUI ESTAVA NA INDEX TEM QUE TIRAR O JQUERY DAQUI E DEIXAR APENAS JS VANILHA

<!-- Custom Theme JavaScript -->
    <script>

        // Scrolls to the selected menu item on the page
        $(function () {
            $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        //#to-top button appears after scrolling
        var fixed = false;
        $(document).scroll(function () {
            if ($(this).scrollTop() > 250) {
                if (!fixed) {
                    fixed = true;
                    // $('#to-top').css({position:'fixed', display:'block'});
                    $('#to-top').show("slow", function () {
                        $('#to-top').css({
                            position: 'fixed',
                            display: 'block'
                        });
                    });
                }
            } else {
                if (fixed) {
                    fixed = false;
                    $('#to-top').hide("slow", function () {
                        $('#to-top').css({
                            display: 'none'
                        });
                    });
                }
            }
        });
        // Disable Google Maps scrolling
        // See https://stackoverflow.com/a/25904582/1607849
        // Disable scroll zooming and bind back the click event
        var onMapMouseleaveHandler = function (event) {
            var that = $(this);
            that.on('click', onMapClickHandler);
            that.off('mouseleave', onMapMouseleaveHandler);
            that.find('iframe').css("pointer-events", "none");
        }
        var onMapClickHandler = function (event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
        $('.map').on('click', onMapClickHandler);

    </script>


*/

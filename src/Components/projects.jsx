import AcebookPhoto from "../Assets/Untitled.png"
import WeatherPhoto from "../Assets/weatherapp.jpg"
import RouteAppPhoto from "../Assets/routapp.png"
import WebPhoto from "../Assets/website.png"
import ChatPhoto from "../Assets/chatApp.png"

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="display-5">
        <br />
                    Projects
                 <br />
      </h1>
      <hr className="my-4"></hr>
      <section className="breweries" id="breweries">
        <ul>
          <li>
            <figure>
              <img alt="Acebook project" src={AcebookPhoto} />
              <figcaption>
                <h2>
                  Acebook
                        </h2>
                <h3>
                  Ruby on rails, RSpec, Capybara, PostgreSQL, Active Record, Bootstrap, RuboCop, Simplecov
                        </h3>
              </figcaption>
            </figure>
            <p>
              A humble copy of facebook where you can post, and share with other users. You can also create albums and share your pictures.
                    </p>
            <a id="boton" href="https://github.com/jaitone/acebook-good-guys">Visit Github Project</a>
          </li>
          <li>
            <figure>
              <img alt="Thermostat project" src={WeatherPhoto} />
              <figcaption>
                <h2>
                  Thermostat
                        </h2>
                <h3>
                  Javascript, Jasmine, jQuery, HTML, CSS
                        </h3>
              </figcaption>
            </figure>
            <p>
              An app where you can increase or lower the temperature, and check the weather in different cities thanks to the weather API.
                    </p>
            <a id="boton" href="https://github.com/jaitone/Thermostat/blob/master/src/thermostat.js">Visit Github Project</a>
          </li>
          <li>
            <figure>
              <img alt="Route project" src={RouteAppPhoto} />
              <figcaption>
                <h2>
                  RoutApp
                        </h2>
                <h3>
                  React, Bootstrap, Express, PostgreSQL, Reactstrap, HTML, CSS, Google Maps Api
                        </h3>
              </figcaption>
            </figure>
            <p>
              A route app that draws a route from point A to B, given an origin and a destination postcodes, using google maps API.
                      <br />
                      Also, you are able to store, name, and use the different routes in the future.
                    </p>
            <a id="boton" href="https://github.com/jaitone/RouteApp">Visit Github Project</a>
          </li>
          <li>
            <figure>
              <img alt="Chweeter" src="https://thecleverest.com/wp-content/uploads/2020/01/fake-twitter.png" />
              <figcaption>
                <h2>
                  Chwetter
                        </h2>
                <h3>
                  React, Bootstrap, Reactstrap, HTML, CSS
                        </h3>
              </figcaption>
            </figure>
            <p>
              A Front-End app, using a given Back-end in Ruby on Rails, where you can create an account, and then, Create, Read, Update and Delete peeps.
                    </p>
            <a id="boton" href="https://github.com/jaitone/Chwetter">Visit Github Project</a>
          </li>
          <li>
            <figure>
              <img alt="Website" src={WebPhoto} />
              <figcaption>
                <h2>
                  Portfolio
                        </h2>
                <h3>
                  React, Bootstrap, Reactstrap, HTML, CSS
                        </h3>
              </figcaption>
            </figure>
            <p>
              My own website, the one you are currently looking at.
                    </p>
            <a id="boton" href="https://github.com/jaitone/Netlify">Visit Github Project</a>
          </li>
          <li>
            <figure>
              <img alt="Chat" src={ChatPhoto} />
              <figcaption>
                <h2>
                  ChatApp
                        </h2>
                <h3>
                  React, Bootstrap, Reactstrap, HTML, CSS, Pubnub Api
                        </h3>
              </figcaption>
            </figure>
            <p>
              A chat with for stablished channels.
              <br />
              Using pubnub Api, users are able to create a username and have private conversations on different channels.
                    </p>
            <a id="boton" href="https://github.com/jaitone/Netlify">Visit Github Project</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
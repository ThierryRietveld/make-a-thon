import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home" id="home">
      <Particles 
              params={{
            		particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 10,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 80,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 200,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 2
                  },
                  move: {
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                "retina_detect": true
              
              }}
              
              style={{
                width: '100%',
                height: '100vh !important'
              }}
            />
        <div className="header">
          Make a Thon
        </div>
      </div>
    );
  }
}

export default Home;

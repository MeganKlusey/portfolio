'use strict'

class Home extends React.Component {
  render() {
    return (
      <a class='scroll' href='#about'>
        <div class='more-arrows-wrapper'>

          
          <svg width="75" viewBox="0 0 75 65" fill="url(#g1)">
            <defs>
              <linearGradient id="g1" x1="-100" x2="-50" gradientTransform="rotate(40)" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#fff" />
                <stop offset="50%" stop-color="#222" />
                <stop offset="100%" stop-color="#fff" />
                <animate
                attributeName="x1"
                values="-100;100"
                dur="3s"
                repeatCount="indefinite" />
                <animate
                attributeName="x2"
                values="-50;250"
                dur="3s"
                repeatCount="indefinite" />
              </linearGradient>
              <mask id="m1">
                <rect transform="translate(0 0)" width="100%" height="100%" fill="url(#g1)"/>
              </mask>
            </defs>
            <g mask="url(#m1)">
              <polygon fill="#b8b8b8" class='arrow-top' points='37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3'></polygon>
              <polygon fill="#b8b8b8" class='arrow-middle' points='37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7'></polygon>
              <polygon fill="#b8b8b8" class='arrow-bottom' points='37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1'></polygon>
            </g>
          </svg>

          <svg class='gradient more-arrows'>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0" stop-color="rgba(187,187,187,0)"/>
              <stop offset="0.94" stop-color="rgba(255,255,255,0.75)"/>
              <stop offset="0.95" stop-color="rgba(255,255,255,0.75)"/>
            </linearGradient>
            <polygon class='arrow-top' fill="url(#gradient)" points='37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3'/>
            <polygon class='arrow-middle' fill="url(#gradient)" points='37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7'/>
            <polygon class='arrow-bottom' fill="url(#gradient)" points='37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1'/>
          </svg>
        </div>
      </a>
    );
  }
}

let domContainer = document.querySelector('#home');
ReactDOM.render(<Home />, domContainer);
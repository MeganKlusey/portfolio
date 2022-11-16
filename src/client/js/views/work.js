'use strict'

class Work extends React.Component {
  render() {
    return (
      <>
        <div class='slideshowContainer'>
          <div class='mySlides fade'>
            <div class='thumbnailDiv' onClick="on()">
              <div class='box'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                  <line class='top' x1='-920' y1='0' x2='460' y2='0'/>
                  <line class='left' x1='0' y1='223.69' x2='0' y2='-447.38'/>
                  <line class='bottom' x1='460' y1='223.69' x2='-920' y2='223.69'/>
                  <line class='right' x1='460' y1='-447.38' x2='460' y2='671.07'/>
                  <img src='berlineastsidegalleryberlin.png' class='thumbnail' alt='Berlin East Side Gallery Berlin Thumbnail'/>
                </svg>
              </div>
            </div>
            <div class='workDescription'>
              <p>Berlin East Side Gallery Berlin</p>
              <a class='webLink' target='_blank' href="https://github.com/MeganKlusey/Berlin-East-Side-Gallery-Berlin">SOURCE CODE</a>
              <br/><br/>
              <p class='webOverview'>This project consisted of gathering website requirements, creating wireframes, developing site
              via source code editor, deploying website online and performing tests to ensure website optimisation.</p>
            </div>
          </div>
          <div class='mySlides fade'>
            <div class='thumbnailDiv' onClick="on2()">
              <div class='box'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                  <line class='top' x1='-920' y1='0' x2='460' y2='0'/>
                  <line class='left' x1='0' y1='223.69' x2='0' y2='-447.38'/>
                  <line class='bottom' x1='460' y1='223.69' x2='-920' y2='223.69'/>
                  <line class='right' x1='460' y1='-447.38' x2='460' y2='671.07'/>
                  <img src='netflix.png' class='thumbnail' alt='Netflix Thumbnail'/>
                </svg>
              </div>
            </div>
            <div class='workDescription'>
              <p>Netflix</p>
              <a class='webLink' target='_blank' href="https://github.com/MeganKlusey/Netflix">SOURCE CODE</a>
              <br/><br/>
              <p class='webOverview'>A recreation of the Netflix UK homepage using HTML, CSS, JavaScript and jQuery.
              The aim of the project was to pay attention to detail and appreciate different user-friendly techniques.</p>
            </div>
          </div>
          <div class='mySlides fade'>
            <div class='thumbnailDiv' onClick="on3()">
              <div class='box'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                  <line class='top' x1='-920' y1='0' x2='460' y2='0'/>
                  <line class='left' x1='0' y1='223.69' x2='0' y2='-447.38'/>
                  <line class='bottom' x1='460' y1='223.69' x2='-920' y2='223.69'/>
                  <line class='right' x1='460' y1='-447.38' x2='460' y2='671.07'/>
                  <img src='blossm.png' class='thumbnail' alt='Blossm Thumbnail'/>
                </svg>
              </div>
            </div>
            <div class='workDescription'>
              <p>Blossm</p>
              <br/><br/>
              <p class='webOverview'>This is a blog made using WordPress. This website makes use of several plugins and widgets. 
              This project focuses on writing SEO-friendly content.</p>
            </div>
          </div>
          <div class='mySlides fade'>
            <div class='thumbnailDiv' onClick="on4()">
              <div class='box'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                  <line class='top' x1='-920' y1='0' x2='460' y2='0'/>
                  <line class='left' x1='0' y1='223.69' x2='0' y2='-447.38'/>
                  <line class='bottom' x1='460' y1='223.69' x2='-920' y2='223.69'/>
                  <line class='right' x1='460' y1='-447.38' x2='460' y2='671.07'/>
                  <img src='todolist.png' class='thumbnail' alt='To-Do List App Thumbnail'/>
                </svg>
              </div>
            </div>
            <div class='workDescription'>
              <p>To-Do List App</p>
              <a class='webLink' target='_blank' href="https://github.com/MeganKlusey/To-Do">SOURCE CODE</a>
              <br/><br/>
              <p class='webOverview'>This project consisted of building a to-do list app using React.
              Users are able to add, complete and delete tasks.</p>
            </div>
          </div>
          <div class='mySlides fade'>
            <div class='thumbnailDiv' onClick="on5()">
              <div class='box'>
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                  <line class='top' x1='-920' y1='0' x2='460' y2='0'/>
                  <line class='left' x1='0' y1='223.69' x2='0' y2='-447.38'/>
                  <line class='bottom' x1='460' y1='223.69' x2='-920' y2='223.69'/>
                  <line class='right' x1='460' y1='-447.38' x2='460' y2='671.07'/>
                  <img src='elephant.png' class='thumbnail' alt='Elephant Thumbnail'/>
                </svg>
              </div>
            </div>
            <div class='workDescription'>
              <p>Elephant</p>
              <br/><br/>
              <p class='webOverview'>Photo manipulation of an elephant using a graphics editor (Krita).
              This project demonstrates merging of layers, glow effects and multiple brush techniques.</p>
            </div>
          </div>
        </div>
        <a class='prev' onClick='plusSlides(-1)'>
          <div class='prev'>
            <div class='prevTop'></div>
            <div class='prevBottom'></div>
          </div>
        </a>
        <a class='next' onClick='plusSlides(1)'>
          <div class='next'>
            <div class='nextTop'></div>
            <div class='nextBottom'></div>
          </div>
        </a>
      </> 
    );
  }
}

let domContainer = document.querySelector('#work');
ReactDOM.render(<Work />, domContainer);
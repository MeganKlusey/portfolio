'use strict'

class About extends React.Component {
  render() {
    return (
      <>
        <p class='aboutText'>
          I'm a web developer, and passionate about it as it provides the opportunity to combine the 
          analytic with the creative. With a degree in Business Management and Computer Science from Oxford Brookes University,
          I am now looking for a role in front-end development to take my skills to the next level. My knowledge of languages include:
          <br/><br/>
          <span class='green'>HTML</span>, <span class='green'>CSS</span>, 
          <span class='green'>JavaScript</span>, <span class='green'>jQuery</span>, <span class='green'>React</span>, <span class='green'>PHP</span>, 
          <span class='green'>Java</span>, <span class='green'>Python</span>, <span class='green'>XML</span> and <span class='green'>SVG</span>.
          <br/><br/>
          In addition to this, I have experience using <span class='green'>WordPress</span>
          and proficient in <span class='green'>Microsoft Office</span> software. Digital marketing
          also piques my interest, with a qualification in <span class='green'>Google Analytics</span> and 
          understanding of building <span class='green'>SEO-friendly</span> websites.
          <br/><br/>
          Please check out my work below and feel free to get in contact.
        </p>
      </>
    );
  }
}

let domContainer = document.querySelector('#about');
ReactDOM.render(<About />, domContainer);
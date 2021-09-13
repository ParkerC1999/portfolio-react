// import logo from './logo.svg';
import './style.css';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';

import { useState } from 'react';

function App() {
  const [pageRender, setPageRender] = useState('About Me');

  function navClickHandler(event) {
    console.log(event.target.textContent)
    setPageRender(event.target.textContent)
  }

  return (
    <div>
      {/*Header*/}
      <header>
        <h1><a href="./index.html">Parker Christiansen</a></h1>
        <nav>
          <ul>
            <li>
              <a onClick={navClickHandler}>About Me</a>
            </li>
            <li>
              <a onClick={navClickHandler}>My Work</a>
            </li>
            <li>
              <a onClick={navClickHandler}>Contact Me</a>
            </li>
            <li>
              <a onClick={navClickHandler}>Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      {/*Banner Jumbotron*/}
      <section className="jumbotron" style = {{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/picture-of-trees.jpg')`}}>
        <img src="./assets/images/picture-of-parker.jpg" />
      </section>
      {pageRender === 'About Me'? <About />: ""}
      {pageRender === 'My Work'? <Work />: ""}
      {pageRender === 'Contact Me'? <Contact />: ""}
      {pageRender === 'Resume'? <Resume />: ""}
      {/*Footer*/}
      <footer>
        Thank you for Visiting!
      </footer>
    </div>
  );
}

export default App;

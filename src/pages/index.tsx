import React from 'react';
import Helmet from 'react-helmet';

import app from '../../static/images/app.png';
import logo from '../../static/images/logo-black.svg';
import '../styles/index.scss';

const index: React.SFC = () => (
  <>
    <Helmet>
      <html lang="de-de" />

      <meta charSet="utf-8" />
      <title>Crisp Studio - Digital Product Studio</title>

      <meta
        name="description"
        content="We support companies in validating and developing new and innovative product ideas and
        bringing them to market quickly."
      />
      <meta property="og:locale" content="de-de" />

      <link rel="stylesheet" href="https://use.typekit.net/dmd4zek.css" />
    </Helmet>

    <div className="container">
      <main>
        <article>
          <h1>We are a Digital Product Studio</h1>
          <p>
            We support companies in validating and developing new and innovative product ideas and
            bringing them to market quickly.
          </p>
          <a className="btn" href="https://crispstudio.typeform.com/to/fYqiES" target="_blank">
            Contact us
          </a>
        </article>
        <aside>
          <img src={app} alt="Product Design" />
        </aside>
      </main>

      <footer>
        <img src={logo} alt="Crisp Studio Logo" />

        <nav>
          <a href="" target="_blank">
            Disclaimer
          </a>
          <a href="/pdf/privacy.pdf" target="_blank">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  </>
);

export default index;

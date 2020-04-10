import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => (
  <div className="container">
    <Head>
      <title>BeatCorona</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
    <main>
      <h1 className="title">
        Welcome to BeatCorona
      </h1>
      <img src="/images/beatCorona_logo_1a.webp" className="index-logo"></img>
      <p className="description">
        You're not alone.
      </p>

      <div className="grid">
        <a href="/api/test-centers" className="card help">
          <h3>Find a Test Center &rarr;</h3>
          <p>See a map of all COVID-19 testing centers in your current area.</p>
        </a>

        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
          >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with ZEIT Now.
          </p>
        </a>
      </div>
    </main>
    </Layout>
    <footer>
      <div className="emergency">
        <h5 className="emergency-notice">EMERGENCY</h5>
        <button><a href="tel:021-040-77oo">Call</a></button>
        <h5 className="emergency-notice">ONLY</h5>
      </div>
      <div className="left-footer">
        <p>BeatCorona</p>
      </div>
      <div className="right-footer">
        <p><a href="/help">
          Contact Us
          </a>
          </p>
      </div>
    </footer>

    <style jsx>{`
      footer {
        width: 90vw;
        margin: 0 auto;
      }
      .emergency {
        background: red;
        padding: 10px;
      }
      .emergency h5 {
        text-align: center;
        padding: 4px;
        margin: 0;
      }
      .emergency button {
        background: white;
        width: 100%;
        margin-top: 5px;
        border-radius: 12px;
        font-size: 1.2rem;
      }
      .left-footer {
        width: 40%;
      }
      .left-footer p {
        text-align: center;
      }
      .right-footer p {
        text-align: center;
      }
      .right-footer {
        width: 40%;
      }
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }
      
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      
      .title a {
        color: #0070f3;
        text-decoration: none;
      }
      
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
      
      .title,
      .description {
        text-align: center;
        color: #f7b403;
      }
      
      .description {
        line-height: 2;
        font-size: 3rem;
      }
      
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
        max-width: 800px;
        margin-top: 3rem;
      }
      
      .index-logo {
        padding: 50px;
        border-radius: 12px;
      }
      .index-logo img {
        border-radius: 12px;

      }
      .card {
        margin: 1rem;
        background: #fcf5e5;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #f7b403;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      
      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }
      
      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      
      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      
      .help {
        background: red;
        transition: ease-in 0.5s;
      }
      .help:hover {
        transition: ease-in 0.5s;
        color: black;
        border: solid 1px red;
        box-shadow: 0 0 2px red, inset 0 0 8px white;
      }
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        
        * {
          box-sizing: border-box;
        }
        `}</style>
  </div>
)

export default Home

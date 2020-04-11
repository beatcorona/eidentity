import Header from './Header';
import Footer from './Footer';


const layoutStyle = {
  padding: 20,
  width: '100vw',
}
const background = {
    width: '100vw',
    minWidth: '1000px',
    height: '110vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1000',
}


export default function Layout(props) {
  return (
    <div style={layoutStyle}>
        <div className="background-overlay"></div>
        <img src="/images/corona-background_1a.webp" className="background" style={background}></img>
    
      <Header />
      {props.children}
      <Footer />
      <style jsx>{`
        .background {
            margin: 0 auto;
            height: 110vh;
        }
        .background-overlay {
            width: 110vw;
            height: 110vh;
            position: fixed;
            top: 0;
            left: 0;
            background: #00444588;
            z-index: -999;
        }
    `}</style>
    </div>
  )
}
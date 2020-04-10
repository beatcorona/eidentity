import Header from './Header'

const layoutStyle = {
  margin: '0 auto',
  padding: 20,
  width: '95vw',
}
const background = {
    width: '100%',
    minWidth: '1000px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1000',

}
export default function Layout(props) {
  return (
    <div style={layoutStyle}>
        <img src="/images/corona-background_1a.webp" className="background" style={background}></img>
      <Header />
      {props.children}
      <style jsx>{`
        .background {
            margin: 0 auto;

        }
    `}</style>
    </div>
  )
}
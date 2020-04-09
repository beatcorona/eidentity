import Header from './Header'

const layoutStyle = {
  margin: '0 auto',
  padding: 20,
  border: '1px solid #DDD',
  background: '#DDD',
  width: '90vw',
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
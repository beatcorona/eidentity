import Link from 'next/link';

const linkStyle = {
  color: '#fff',
  fontSize: '1.2rem',
  textDecoration: 'none',
  fontFamily: 'Menlo, Monaco, DejaVu Sans Mono',
  textAlign: 'center',
  width: '20%'
}; 

const headerStyle = {
    border: '1px solid #111',
    padding: 10,
}

const Header = () => (
  <div style={headerStyle} className="header">
      
    <Link href="/">
      <a title="BeatCorona" style={linkStyle}>Home</a>
    </Link>
    <Link href="/doctors">
      <a title="COVID-19 Doctors" style={linkStyle}>Doctors</a>
    </Link>
    <Link href="/info">
      <a title="COVID-19 Information" style={linkStyle}>Info</a>
    </Link>
    <Link href="/help">
      <a title="BeatCorona Help" style={linkStyle}>Help</a>
    </Link>
    <Link href="/test-centers">
      <a title="COVID-19 Test Centers" style={linkStyle}>Get Tested</a>
    </Link>
  <style jsx>
      {`
        .header {
            width: 100%;
            background: #004445;
            display: flex;
            justify-content: center;
            align-items: center;
        }
          .headerStyle a {
              text-align: center;
        }
         a:hover {
            color: red;
        }
            `}
  </style>
</div>
);

export default Header;
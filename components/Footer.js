const footerStyle = {
    border: '1px solid #111',
    padding: 10,
}

const Header = () => (
  <div style={footerStyle} className="footer">
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
  <style jsx>
      {`
 .footer {
    width: 100%;
    background: #004445a2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
  .emergency {
    background: red;
    padding: 10px;
    width: 50%;
    border-radius: 12px;
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
  .emergency a {
      color: red;
      text-decoration: none;
      font-weight: bolder;
      font-size: 1.5rem;
  }
  .left-footer {
    width: 40%;
}
.left-footer p {
    text-align: center;
    color: #f7b403;
}

.right-footer p {
    text-align: center;
}
.right-footer a {
    color: #f7b403;
}
  .right-footer {
    width: 40%;
  }
            `}
  </style>
</div>
);

export default Header;
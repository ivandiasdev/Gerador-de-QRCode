import './qrcode.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { useState } from 'react';

function Gerador() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(Link_url: string) {
    QRCodeLink.toDataURL(Link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      if (err) {
        console.error(err);
      } else {
        setQrcodeLink(url);
      }
    });
  }

  function handleQrcode(e: React.ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className='container'>
      <h1>Gerador de QR Code</h1>
      <QRCode value={link} />

      <input
        className='input'
        placeholder='Digite seu link...'
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={'qrcode.png'}>
        BAIXAR QRCODE
      </a>
    </div>
  );
}

export default Gerador;
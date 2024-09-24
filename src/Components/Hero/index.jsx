import Button from 'react-bootstrap/Button';
import './Hero.css'


export default function Hero() {
  return (
    <>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>Your Cosy Era</h1>
            <p>Get peak comfy-chic with new winter essentials.</p>
            <Button variant="primary">Shop Now</Button>{' '}
          </div>
        </div>
    </>
  )
}

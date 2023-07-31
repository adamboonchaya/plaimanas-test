import React from 'react'
import dolce from './dolce.jpeg'
import square from './square.jpeg'
import square3 from './square3.png'
import square2 from './square2.png'
import rect from './rect.jpeg'
import collections from './collections.jpeg'

const Home = () => {
  return (
    <div className = 'container'>
        <div>
            <img className = 'dolce' src = {dolce} alt='dolce gabana collection' />
        </div>

        <div className = 'info-box'>
            <div className = 'square'>
                <img className = 'square-img' src={square} alt = 'dolce gabana square pic' />
                <div className = 'new-label'>NEW</div> 
            </div>
            <div className = 'text-box'>
                <h3>Sed egestas, nibh a condimentum imperdiet</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className = 'info-box'>
            <div className = 'rect'>
                <img className = 'rect-img' src={rect} alt = 'dolce gabana rect pic' />
                <div className = 'new-label'>THINGS</div> 
            </div>
            <div className = 'text-box'>
                <h3>Sed egestas, nibh a condimentum imperdiet</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className = 'info-box'>
            <div className = 'rect'>
                <img className = 'rect-img' src={collections} alt = 'collections pic' />
                <div className = 'new-label'>COLLECTION 01</div> 
            </div>
            <div className = 'image-box'>
                <div className = 'square-small'>
                    <img className = 'square-img' src={square3} alt = 'dolce gabana square pic' />
                    <div className = 'new-label'>COLLECTION 02</div> 
                </div>
                <div className = 'square-small'>
                    <img className = 'square-img' src={square2} alt = 'dolce gabana square pic' />
                    <div className = 'new-label'>COLLECTION 03</div> 
                </div>
            </div>
        </div>

        <div className = 'footer'>
            <div>
                <h5>WORLDWIDE SHIPPING AND RETURNS</h5>
                <p>Express or Free standard shipping <br/> Free returns withing 14 days <br/> Customs tax included</p>
            </div>
            <div>
                <h5>CUSTOMER SERVICE</h5>
                <p>Express or Free standard shipping <br/> Free returns withing 14 days <br/> Customs tax included</p>
            </div>
            <div>
                <h5>SECURED PAYMENTS</h5>
                <p>Express or Free standard shipping <br/> Free returns withing 14 days <br/> Customs tax included</p>
            </div>
        </div>
    </div>
  )
}

export default Home
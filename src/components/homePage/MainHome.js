import './homeMain.css';
import FeatureCorasel from './FeatureCorasel.js'
import pic1 from '../../resources/images/4ad2d34531cafb4f7c84c4ec2b129baf.jpg'
import pic2 from '../../resources/images/9c489b39932611cd9baefdd82797d640.jpg'
import pic3 from '../../resources/images/76e79872de852845da66971124605ab2.jpg'



export default function MainHome() {
    const slides = [
        {id: 0, url: pic1}, 
        {id: 1, url: pic2}, 
        {id: 2, url: pic3}, 
    ];
    return(
        <div className='home-con'>
            <div className='mainback'>
                <FeatureCorasel slides={slides} />
                <div className='home-title-con'>
                    <h4>Who We are</h4>
                    <div className='fill-div'></div>
                    <h1>Creative Architecture</h1>
                    <div className='home-titlr-button'>
                        <div className='home-ancher'></div>
                        <p>Discover our studio</p>
                    </div>
                </div>
            </div>
        </div>
    )    
}
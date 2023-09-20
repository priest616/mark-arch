import Slider from '../components/slideshowpage/Slider';
import pic1 from '../components/resources/images/20230507163246_IMG_8885.JPG'
import pic2 from '../components/resources/images/20230507163250_IMG_8886.JPG'
export default function SlideShow() {
    const data = [
        {id: 0, url: pic1,title:'slide1'}, 
        {id: 1, url: pic2,title:'slide2'}, 
    ]
    return(
            <Slider slides={data} />
    )    
}
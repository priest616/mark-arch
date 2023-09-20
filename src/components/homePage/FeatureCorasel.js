import { useCallback, useEffect, useRef, useState } from "react"
import "./reature.css"

export default function FeatureCorasel(prop) {
    const props = prop.slides;
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeref = useRef(null)
    const slidersStyleCon = {
        zIndex: '-1',
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
    const slidersStyle = {
        zIndex: '1',
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: '2s ease-in',
        backgroundBlendMode: 'darken',
        backgroundImage: `url(${props[currentIndex].url})`,

    };
    const goToNext = useCallback(() => {
        const isItlast = currentIndex === props.length - 1;
        const newIndex = isItlast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, props]);

    useEffect(() => {
        if (timeref.current) {
            clearTimeout(timeref.current);
        };
        timeref.current = setTimeout(() => {
            goToNext();
        },
            15000);
        return () => clearTimeout(timeref.current);
    }, [goToNext])
    return (
        <>
            <div style={slidersStyleCon}>
                <div style={slidersStyle } className="slider-style">
                </div>
            </div>
        </>
    )
}
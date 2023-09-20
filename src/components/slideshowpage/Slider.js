import { useState } from "react";

export default function Slider(prop) {
    const props = prop.slides;
    const [currentIndex, setCurrentIndex] = useState(0)
    const slidersStyleCon = {
        width: '100%',
        height: '100%',
        position: 'relative',
    }
    const slidersStyle = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: '2s ease-in',
        backgroundImage: `url(${props[currentIndex].url})`
    };
    const leftMove = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 2,
        padding: '10px',
        cursor: 'pointer',
    };
    const rightMove = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 2,
        cursor: 'pointer',
        padding: '10px'
    };
    const dotCon = {
        display : 'flex',
        justifyContent: 'center',
    };
    const dot = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '14px'
    }

    return(
        <div style={slidersStyleCon}>
            <div style={leftMove} onClick={() => {
                const isItFirst = currentIndex === 0;
                const newIndex = isItFirst ? props.length - 1 : currentIndex - 1;
                setCurrentIndex(newIndex);
            }}>-</div>
            <div style={rightMove} onClick={() => {
                const isItlast = currentIndex === props.length - 1;
                const newIndex = isItlast ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }}>+</div>
            <div style={slidersStyle}></div>
            <div style={dotCon}>
                {props.map((prop) => {
                    return (
                    <div
                    style={dot}
                    key={prop.id}
                    onClick={()=>{
                        setCurrentIndex(prop.id)
                    }}
                    >
                        o
                    </div>)
                })}

            </div>
        </div>
    )
}
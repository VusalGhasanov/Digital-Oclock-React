import React, { useEffect } from 'react';
import './DigitalOclock.css';

type SliderProps = {
    name : string;
};

const DigitalOclock: React.FC<SliderProps> = ({name}) => {

    const getDate = (ref : React.RefObject<HTMLDivElement>) : void => {
        const date    : Date    = new Date();
        const hours   : string  = String(date.getHours()).padStart(2, '0');
        const minutes : string  = String(date.getMinutes()).padStart(2, '0')
        const seconds : string  = String(date.getSeconds()).padStart(2, '0')
        const time    : string  = `${hours} : ${minutes} : ${seconds}`;
        const element : HTMLDivElement | null = ref.current;
        
        if (element) element.innerHTML = time;
    }

    const oclockRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        setInterval(getDate.bind(this, oclockRef), 1000);
       },[]);

    return (
        <div id="digital-oclock">
            <h1 className='title'>{ name }</h1>
            <div ref={oclockRef} className="clock"></div>
        </div>
    )
}

export default DigitalOclock;
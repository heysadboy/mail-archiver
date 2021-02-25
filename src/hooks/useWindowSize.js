import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onDeviceChange = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', onDeviceChange);
        return () => {
            window.removeEventListener('resize', onDeviceChange);
        }
    }, []);

    return width;
};

export default useWindowSize;
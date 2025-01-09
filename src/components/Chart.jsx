import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

const BarChart = () => {
    const [bars, setBars] = useState([30, 50, 70, 40, 60]);
    useEffect(() => {
        const interval = setInterval(() => {
            setBars(bars.map(() => Math.floor(Math.random() * 80) + 20)); 
        }, 1000); 
        return () => clearInterval(interval);
    }, [bars]);

    return (
        <div className="flex items-end justify-center h-64 w-full space-x-2 bg-gray-100 p-4">
            {bars.map((height, index) => (
                <AnimatedBar key={index} height={height} />
            ))}
        </div>
    );
};

const AnimatedBar = ({ height }) => {
    const styles = useSpring({
        height: `${height}%`,
        config: { tension: 200, friction: 20 }, 
    });

    return (
        <animated.div
            style={{
                ...styles,
                width: '20px',
                backgroundColor: 'blue',
                borderRadius: '5px',
            }}
        />
    );
};
AnimatedBar.propTypes = {
    height: PropTypes.number.isRequired,
};

export default BarChart;

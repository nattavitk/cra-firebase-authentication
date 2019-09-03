import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

class Card extends React.Component {
    render() {
        const { i, x, y, rot, scale, trans, bind, data } = this.props;
        const { name, age, distance, text, pics } = data[i];

        return (
            <animated.div
                className="animated-div"
                key={i}
                style={{
                    transform: interpolate(
                        [x, y],
                        (x, y) => `translate3d(${x}px,${y}px,0)`
                    )
                }}
            >
                <animated.div
                    {...bind(i)}
                    style={{
                        transform: interpolate([rot, scale], trans)
                    }}
                >
                    <div className="card">
                        <Carousel>
                            {pics.map((pic, index) => (
                                <img
                                    src={pic}
                                    key={index}
                                    alt="profilePicture"
                                    className="animated-img"
                                />
                            ))}
                        </Carousel>
                        <h2>{name},</h2>
                        <h2>{age}</h2>
                        <h5>{distance}</h5>
                        <h5>{text}</h5>
                    </div>
                </animated.div>
            </animated.div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    distance: PropTypes.string,
    text: PropTypes.string,
    pics: PropTypes.array
};

export default Card;

import PropTypes from 'prop-types';
import { Component } from 'react';
import Star from './Star';
import './star-rating.css';

class StarRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starsSelected: props.starsSelected || 0
        },
        this.change = this.change.bind(this);
    }

    componentWillMount() {
        const {starsSelected} = this.props;
        if (starsSelected) {
            this.setState({starsSelected});
        }
    }

    change(starsSelected) {
        this.setState({starsSelected});
    }

    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return (
            <div>
                <div className="star-rating">
                    {[...Array(totalStars)].map((n, i) =>
                        <Star key={i}
                            selected={i<starsSelected}
                            onClick={() => this.change(i+1)}
                        />
                    )}
                </div>
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        );
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number
};

StarRating.defaultProps = {
    totalStars: 5
};

export default StarRating;
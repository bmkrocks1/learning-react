import { Component } from 'react';
import { StatelessStarRating } from '../star-rating/';
import './color.css';

export default class Color extends Component {

    componentWillMount() {
        this.style = { backgroundColor: '#efefef' };
    }

    componentWillUpdate() {
        this.style = null;
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props;
        return rating !== nextProps.rating;
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        console.log(`${title} is getting ${status}`);
    }

    render() {
        const { title, rating, color, onRate, onRemove } = this.props;
        return (
            <section className="color" style={this.style}>
                <h1>{title}</h1>
                <button onClick={onRemove} className="remove">X</button>
                <div className="color-preview" style={{ backgroundColor: color }}></div>
                <StatelessStarRating starsSelected={rating} onRate={onRate} />
            </section>
        );
    }
}
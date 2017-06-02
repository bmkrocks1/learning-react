import Star from './Star';
import './star-rating.css';

const StatelessStarRating = ({ starsSelected=0, totalStars=5, onRate=f=>f }) =>
    <div className="star-rating-wrap">
        <div className="star-rating">
            {[...Array(totalStars)].map((n, i) =>
                <Star key={i} 
                    selected={i<starsSelected}
                    onClick={() => onRate(i+1)}
                />
            )}
        </div>
        <p>{starsSelected} of {totalStars} stars</p>
    </div>

export default StatelessStarRating;
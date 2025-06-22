import '../styles/Card.css';

const Card = ({
    title,
    imageSrc,
    imageAlt,
    description,
    buttonText,
    onButtonClick,
}) => {
    return (
        <>
            <div className="card">
                <h3 className="card-title"> {title} </h3>
                <img src={imageSrc} alt={imageAlt} className="card-image" />
                <p className="card-info">{description}</p>
                <button className="card-btn" onClick={onButtonClick}>
                    {buttonText}
                </button>
            </div>
        </>
    );
};

export default Card;

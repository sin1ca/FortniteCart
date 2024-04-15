function GoodsItem(props) {
    const { id, name, description, price, full_background, addToBasket = Function.prototype, } = props;

    const defaultImage = 'https://i.postimg.cc/2jXzHPcZ/placeholder.png';

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    };
    
    return (
        <div className="card" id = {id}>
            <div className="card-image">
                <img src={full_background} onError={handleImageError} alt={name} />
            </div>
            <div className="card-con-pos">
                <div className="card-content">
                <span className="card-title">{name}</span>
                    {
                        description ? <p>{description}</p> : 
                        <p>Описание отсутствует</p>
                    }
                </div>
                <div className="card-action">
                    <button 
                        className="btn" 
                        onClick={() => 
                            addToBasket({
                                id, 
                                name,
                                price,
                            })
                        }
                    >
                        Купить
                    </button>
                    <span className="right">{price}</span>
                </div>
            </div>
        </div>
    );
}

export { GoodsItem };
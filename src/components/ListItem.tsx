import '../App.css';

type Props = {
    listing_id: number,
    url: string,
    MainImage?: {
        url_570xN: string;
    },
    title?: string,
    currency_code: string,
    price: string,
    quantity: number,
}

type ItemProps = {
    item: Props;
}


function ListItem({ item }: ItemProps) {
    const currency = (price: string, currency: string): string => {
        if (currency === 'USD') {
            return `$${price}`;
        } else if (currency === 'EUR') {
            return `€${price}`;
        } else {
            return `${price} GBP`;
        }
    }

    const quantity = (quantity: number) => {
        if (quantity <= 10) {
            return "low";
        } else if (quantity <= 20) {
            return "medium";
        } else {
            return "high";
        }
    };

    return (
        <li className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN} alt={item.title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title && item.title.length > 50 ? `${item.title?.slice(0, 50).trim()}...` : item.title}</p>
                <p className="item-price">{currency(item.price, item.currency_code)}</p>
                <p className="item-quantity level-medium">{quantity(item.quantity)}</p>
            </div>
        </li >
    );
}

export default ListItem;

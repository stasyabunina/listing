import '../App.css';
import ListItem from './ListItem';

type Props = {
    listing_id: number,
    url: string,
    MainImage?: {
        url_570xN: string;
    };
    title?: string,
    currency_code: string,
    price: string,
    quantity: number,
}

type AppProps = {
    items: Props[],
}

function Listing({ items }: AppProps) {
    return (
        <ul className="item-list" >
            {items.map(item => (
                <ListItem key={item.listing_id} item={item} />
            ))}
        </ul>
    );
}

export default Listing;

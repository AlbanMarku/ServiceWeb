import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

type Props = {
  img: string;
  desc: string;
  price: string;
  title: string;
};

export default function CardComp({ img, desc, price, title }: Props) {
  return (
    <Card className="Card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="PriceArea">
          <p>{price}</p>
        </div>
        <Card.Text>{desc}</Card.Text>
        <div className="CardButtons">
          <Link className="Brand" to={`/form/${title}`}>
            <Button variant="primary" className="BookButton">
              Book Now
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

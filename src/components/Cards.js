import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=st=1677372250~exp=1677372850~hmac=56f457b12c8c6114af3e093e10b71fb4aaa4655b71624dea6db7434b74d58268" />
        <Card.Body>
          <Card.Title>Sara</Card.Title>
          <Card.Text>
            The Ceo of the company, Sara has worked hard to be in the position she is in right now.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=st=1677372250~exp=1677372850~hmac=56f457b12c8c6114af3e093e10b71fb4aaa4655b71624dea6db7434b74d58268" />
        <Card.Body>
          <Card.Title>Jenny</Card.Title>
          <Card.Text>
            Jenny the janator keeps our business spic and span!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=996&t=st=1677372250~exp=1677372850~hmac=56f457b12c8c6114af3e093e10b71fb4aaa4655b71624dea6db7434b74d58268" />
        <Card.Body>
          <Card.Title>Kyle</Card.Title>
          <Card.Text>
            Kyle?????
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;
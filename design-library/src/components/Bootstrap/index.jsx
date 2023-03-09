import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Bootstrap() {
  return (
    <>
      <h4>Bootstrap button</h4>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-dark">Dark</Button>
    </>
  );
}

export default Bootstrap;

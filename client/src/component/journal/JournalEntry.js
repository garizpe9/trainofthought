import React, { Component } from 'react';
import { withRouter} from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import '../journal/JournalEntry.css'

class JournalEntry extends Component {
    render() {
        return (
            <div id="container-fluid">
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>My Intention</Form.Label>
                    <Form.Control as="textarea" placeholder="Energy Flows Where Intention Goes" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>3 Things I Love About Myself</Form.Label>
                    <Form.Control type="text" placeholder="1" />
                    <br />                    
                    <Form.Control type="text" placeholder="2" />
                    <br />
                    <Form.Control type="text" placeholder="3" />
                    <br />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>What Went Well Today?</Form.Label>
                    <Form.Control type="text" placeholder="1" />
                    <br />                    
                    <Form.Control type="text" placeholder="2" />
                    <br />
                    <Form.Control type="text" placeholder="3" />
                    <br />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>What Didn't?</Form.Label>
                    <Form.Control type="text" placeholder="1" />
                    <br />                    
                    <Form.Control type="text" placeholder="2" />
                    <br />
                    <Form.Control type="text" placeholder="3" />
                    <br />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea4">
                    <Form.Label>Let's Vent!</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>To Nurture Myself Today I Will...</Form.Label>
                    <Form.Control as="textarea" placeholder="Take a bubble bath, get a massage, go for a walk" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(JournalEntry);

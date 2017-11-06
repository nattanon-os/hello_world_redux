import React, {Component} from 'react';
import {Button, Card} from 'semantic-ui-react'
class Template extends Component {
    render() {
        const {data, plusScore, minusScore} = this.props;
        return (
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            {data.name}
                        </Card.Header>
                        <Card.Description>
                            <strong>{data.score}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={() => plusScore(data.id)}>+</Button>
                            <Button basic color='red' onClick={() => minusScore(data.id)}>-</Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Template;

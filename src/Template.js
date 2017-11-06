import React, {Component} from 'react';
import {Button, Card} from 'semantic-ui-react'
/////////////////////////////////////////////
import {connect} from 'react-redux';
import {plusScore, minusScore} from './actions/productScore'

class Template extends Component {
    render() {
        const {data} = this.props;
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
                            <Button basic color='green' onClick={() => this.props.plusScore(data.id)}>+</Button>
                            <Button basic color='red' onClick={() => this.props.minusScore(data.id)}>-</Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, state) => {
    return {
        plusScore: (id) => {
            dispatch(plusScore(id))
        },
        minusScore: (id) => {
            dispatch(minusScore(id));
        }
    }
}

const mapStateToProps = (state) => {
    return {productScore: state.productScore}
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);

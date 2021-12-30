import React, {Component} from 'react';
import {Segment, Message} from 'semantic-ui-react';
import TableBox from "./TableBox";


interface Props {
    partners: any
}

interface State {
    partners: Array<any>,
}

class ResultBox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            partners: [],
        };
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            partners: nextProps.partners
        });
    }

    render() {
        const {partners} = this.state;

        return (
            <>
                <Segment className={partners.length > 0 ? "d-block" : "d-none"}>
                    <Message info>
                        <Message.Header>Information about your partners within the distance range you choose.</Message.Header>
                    </Message>
                    <TableBox partners={partners}/>
                </Segment>
            </>
        );
    };
};

export default ResultBox;

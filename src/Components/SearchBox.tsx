import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

interface Props {
    handlePartners: any
}

interface State {
    distance: number;
    sorting: string,
    partners: Array<any>,
}

class SearchBox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            distance: 0,
            sorting: 'a',
            partners: [],
        };

        this.handLeDistanceState = this.handLeDistanceState.bind(this);
        this.getAllByDistance = this.getAllByDistance.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handLeDistanceState(e: any) {
        this.setState({
            distance: Number(e.target.value)
        })
    }

    handleClick(e: any) {
        this.getAllByDistance();
    }

    getAllByDistance() {
        const endpoint = `http://localhost:3000/distances?distance=${this.state.distance}`;

        fetch(endpoint)
            .then(res => res.json())
            .then(
                (partners) => {
                    this.setState({
                        partners: partners
                    });
                    this.props.handlePartners(partners);
                },
                (err) => {
                    return this.setState({
                        partners: [],
                    });
                }
            )
    }


    render() {
        return (
            <>
                <Form className={'search-box-form'}>
                    <Form.Group>
                        <Form.Input className={'asd'} width={16} fluid label='Current Location'
                                    placeholder="51.5144636,-0.142571"
                                    readOnly/>

                        <Form.Input width={16} fluid label='Distance' placeholder='Please Enter Distance (KM)'
                                    onChange={this.handLeDistanceState}
                                    defaultValue={this.state.distance}/>

                        <Form.Button color='teal' label='&nbsp;' type="button"
                                     onClick={this.handleClick}>Calculate</Form.Button>
                    </Form.Group>
                </Form>
            </>
        );
    };
}

export default SearchBox;

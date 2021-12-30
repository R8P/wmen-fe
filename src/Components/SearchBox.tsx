import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import IPartner from "../interfaces/partner.interface";

interface Props {
    handlePartners: any
}

interface State {
    distance: number;
    sorting: string,
    partners: Array<any>,
    selectedPartner: IPartner | null,
    openModal: boolean
}

class SearchBox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            distance: 0,
            sorting: 'a',
            partners: [],
            selectedPartner: null,
            openModal: false
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
        const url = new URL(`http://localhost:1337/partners/distances`);
        url.searchParams.append("distance", this.state.distance.toString());

        fetch(url.href)
            .then(res => res.json())
            .then(
                (partners) => {
                    this.setState({
                        partners: partners
                    });
                    this.props.handlePartners(partners);
                    console.log(partners)
                },
                (error) => {
                    return this.setState({
                        partners: []
                    });
                }
            )
    }


    render() {
        return (
            <>
                <Form className={'search-box-form'}>
                    <Form.Group>
                        <Form.Input width={16} fluid label='Current Location' placeholder="51.5144636,-0.142571"
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

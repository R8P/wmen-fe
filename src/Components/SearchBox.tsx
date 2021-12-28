import React from 'react';
import {Form, Button} from 'semantic-ui-react';

const distanceType = [
    {key: 'km', value: 'Km', text: 'Kilometer'},
    {key: 'mi', value: 'Mi', text: 'Mile'}
];

const SearchBox = () => {
    return (
        <>
            <Form className={'search-box-form'}>
                <Form.Group>
                    <Form.Input width={14} fluid label='Distance' placeholder='Please Enter Distance (KM)'/>
                    {/*<Form.Select width={2}
                                 fluid
                                 label='Unit'
                                 options={distanceType}
                                 placeholder='Unit'
                    />*/}
                    <Form.Button color='teal' label='&nbsp;'>Calculate</Form.Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default SearchBox;

import React, {useState} from 'react'
import './App.css';
import {Container, Grid, Header} from 'semantic-ui-react';
import SearchBox from "./Components/SearchBox";
import ResultBox from "./Components/ResultBox";


function App() {
    const [partners, setPartners] = useState(null);

    return (
        <div className={'App'}>
            <Container fluid className={'app-container'}>
                <Header as='h3' textAlign='center'>
                    WMen Coding Exercise
                </Header>
                <Grid>
                    <Grid.Row centered columns={2}>
                        <Grid.Column computer={9} mobile={9} tablet={9}>
                            <SearchBox handlePartners={(partners: any) => {
                                setPartners(partners);
                            }}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered columns={2}>
                        <Grid.Column computer={9} mobile={9} tablet={9}>
                            <ResultBox partners={partners}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}

export default App;

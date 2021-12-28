import React from 'react';
import {Segment,Message} from 'semantic-ui-react';
import TableBox from "./TableBox";

const ResultBox = () => {
    return (
        <>
           <Segment>
               <Message warning>
                   <Message.Header>You must register before you can do that!</Message.Header>
                   <p>Visit our registration page, then try again.</p>
               </Message>
               <TableBox />
           </Segment>
        </>
    );
};

export default ResultBox;

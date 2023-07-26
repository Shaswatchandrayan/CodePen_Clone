
import { useContext } from 'react';

//components
import Editor from './Editor';

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
 
    background-color: #060606;
    height: 70vh;
    display: flex;
    
`

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container >
            <Editor
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor
                language="javascript"
                heading="JavaScript"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>

    )
};

export default Code;
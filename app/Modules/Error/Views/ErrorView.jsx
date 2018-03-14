import React from 'react';
import styled from 'styled-components';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const Error = styled.div`
    font-size: 5em;
    font-weight: 500;
    color: ${StyleCenter.mainColor};
    width: 24%;
    margin: auto;
    padding: 10% 0 1% 0;
`;

const ErrorView = () => {
    return (
        <Error>404 Not Found</Error>
    );
};

export default ErrorView;
import React from 'react';
import styled from 'styled-components';
import SigninFormContainer from '../Containers/SigninFormContainer';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';
import './Res/AuthView.css';

const Logo = styled.div`
    font-size: 5em;
    font-weight: 500;
    color: ${StyleCenter.mainColor};
    width: 15%;
    margin: auto;
    padding: 10% 0 1% 0;
`;

const AuthView = () => {
    return (
        <div>
            <Logo>W.Music</Logo>
            <SigninFormContainer/>
        </div>
    );
};

export default AuthView;
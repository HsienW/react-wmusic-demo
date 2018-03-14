import React from 'react';
import is from 'is_js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Menu} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';
import SearchBarContainer from '../../SearchBar/Containers/SearchBarContainer';

const LeftMenu = styled.div`  
    width: ${StyleCenter.leftMenuWidth};
    height: calc(100% - ${StyleCenter.playBarHeight});
    float: left;
`;

export default class LeftMenuView extends React.Component {
    constructor() {
        super();
        this.state = {
            key: '1'
        };
    }

    componentWillMount() {
        const currentKey = WebStorage.getSessionStorage(WebStorageKeys.LEFT_MENU_KEY);

        if (is.existy(currentKey)) {
            this.setState({key: currentKey});
        }
    }

    handleClick = (event) => {
        WebStorage.setSessionStorage(WebStorageKeys.LEFT_MENU_KEY, event.key);

        switch (event.key) {
            case '1':
                this.props.PortalActionsCreator.goToPage('featured');
                return;

            case '2':
                this.props.PortalActionsCreator.goToPage('genres');
                return;

            case '3':
                this.props.PortalActionsCreator.goToPage('newrelease');
                return;

            default:
                return;
        }
    };

    render() {
        return (
            <LeftMenu>
                <Menu
                    style={{height: '100%'}}
                    mode="inline"
                    defaultSelectedKeys={[this.state.key]}
                    onClick={this.handleClick}
                >
                    <SearchBarContainer />
                    <Menu.Item key='1'>Featured</Menu.Item>
                    <Menu.Item key='2'>Genres</Menu.Item>
                    <Menu.Item key='3'>New Releases</Menu.Item>
                </Menu>
            </LeftMenu>
        );

    }
}

LeftMenuView.propTypes = {
    PortalActionsCreator: PropTypes.object.isRequired,
};

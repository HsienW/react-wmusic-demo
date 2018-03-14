import React from 'react';
import PropTypes from 'prop-types';
import is from 'is_js';
import styled from 'styled-components';
import {Form, Button, Checkbox} from 'antd';
import SigninFormItem from './SigninFormItem';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const FormItem = Form.Item;

const authURL = 'https://accounts.spotify.com/authorize?client_id=1c74ad8d2483424ca84efade725329c1&redirect_uri=http://localhost:8080/auth&response_type=token';

const FormContent = styled.div`
    width: 15%;
    margin: 0 auto 20% auto;
`;

class SigninForm extends React.Component {
    handleClick = () => {
        const spotifyAuth = window.open(authURL, 'spotifyAuth', 'width=400,height=600,left=200,top=200');

        const getAuth = setInterval(() => {
            const token = spotifyAuth.window.location.hash.substring(15);

            if (is.not.empty(token)) {
                WebStorage.setSessionStorage(WebStorageKeys.TOKEN, token);
                spotifyAuth.close();
                this.props.PortalActionsCreator.goToPage('featured');
                clearInterval(getAuth);
            }
        }, 500);
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <FormContent>
                <Form className="login-form">
                    <SigninFormItem
                        form={FormItem}
                        itemName="userName"
                        itemMessage="Please input your username!"
                        iconType="user"
                        inputPlaceholder="Username"
                        getFieldDecorator={getFieldDecorator}
                    />
                    <SigninFormItem
                        form={FormItem}
                        itemName="password"
                        itemMessage="Please input your Password!"
                        iconType="lock"
                        inputType="password"
                        inputPlaceholder="Password"
                        getFieldDecorator={getFieldDecorator}
                    />
                    <FormItem>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)
                        }
                        <a className="login-form-forgot">Forgot password</a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={this.handleClick}
                        >
                            Log in
                        </Button>
                        <a>Or register now!</a>
                    </FormItem>
                </Form>
            </FormContent>
        );
    }
}

export default Form.create()(SigninForm);

SigninForm.propTypes = {
    form: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input} from 'antd';

const FormItem = Form.Item;

export default class SigninFormItem extends React.Component {
    render() {
        return (
            <FormItem>
                {
                    this.props.getFieldDecorator(
                        this.props.itemName, {rules: [{required: true, message: this.props.itemMessage}]}
                    )(<Input
                        prefix={
                            <Icon
                                type={this.props.iconType}
                                style={{color: 'rgba(0,0,0,.25)'}}
                            />
                        }
                        type={this.props.inputType}
                        placeholder={this.props.inputPlaceholder}
                    />)
                }
            </FormItem>
        );
    }
}

SigninFormItem.defaultProps = {
    inputType: ''
};

SigninFormItem.propTypes = {
    form: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    itemName: PropTypes.string.isRequired,
    itemMessage: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
};

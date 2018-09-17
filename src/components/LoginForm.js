import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends React.Component {
    constructor() {
        super();

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginPress = this.onLoginPress.bind(this);
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLoginPress() {
        const { email, password, navigation } = this.props;

        this.props.loginUser({ email, password, navigation });
    }

    renderError() {
        if (this.props.error) {
            return (
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            );
        }
    }

    renderLogin() {
        if (this.props.loading) {
            return (
                <Spinner></Spinner>
            )
        }

        return (
            <Button full primary style={styles.button}
                onPress={this.onLoginPress}
            >
                <Text>Log In</Text>
            </Button>
        );
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input 
                                onChangeText={this.onEmailChange} 
                                value={this.props.email}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input 
                                onChangeText={this.onPasswordChange}
                                secureTextEntry
                                value={this.props.password}
                            />
                        </Item>
                        {this.renderError()}
                        {this.renderLogin()}
                        <Button full bordered style={styles.button} onPress={() => navigate('Main')}>
                            <Text>Create an Account</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 25
    },
    errorTextStyle: {
        color: 'red',
        flex: 1,
        textAlign: 'center',
        marginTop: 15
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { 
        emailChanged, 
        passwordChanged, 
        loginUser
    })(LoginForm);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Context from 'Components/Context/Context';

import TopImage from 'Components/TopImage/TopImage';
import axios from '../../axios-orders';

import Input from 'Components/UI/Input/Input';
import withErrorHandler from 'Hoc/withErrorHandler/withErrorHandler';

import DatePicker from 'react-datepicker';
import 'Assets/css/react-datepicker.module.css';

import moment from 'moment';
import 'moment/locale/pl';

import text from 'Data/textDescription';

import { checkValidity } from 'Share/utility';

import styles from './Contact.css';

import * as actionCreators from 'Store/actions/index';

class ContactPage extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Imię i nazwisko'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
                error: 'To pole wymaga więcej niż 5 znaki'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Twój adres e-mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                error: 'Podałeś zły format emaila'
            },
            place: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Miejsce wydarzenia'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
                error: 'To pole wymaga więcej niż 5 znaki'
            },
            info: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Treść wiadomości'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                },
                valid: false,
                touched: false,
                error: 'To pole wymaga więcej niż 10 znaki'
            }
        },
        formIsValid: false,
        startDate: moment()
    };

    componentDidMount() {
        document.title = "O mnie - fotograf Warszawa, Lublin, Chełm, reportaż ślubny, chrzest, zdjęcia rodzinne";
    }

    orderHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const formatDateFromSubmit = {
            'date': this.state.startDate.format('DD/MM/YYYY')
        }
        const formDataToSend = { ...formData, ...formatDateFromSubmit }

        const order = {
            orderData: formDataToSend
        }
        axios.post('./mail.php', order)
            .then(response => {
                this.setState({ sendEmail: true });
            })
            .catch(error => {
                this.setState({ sendEmail: false });
            });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(inputIdentifier);
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    };

    handleChange = (date) => {
        this.setState({ startDate: date });
    }

    render() {
        moment.locale('pl');

        let form;
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        if (!this.state.sendEmail) {
            form = (
                <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            error={formElement.config.error}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                    ))}
                    <label className="label">Wybierz datę wydarzenia</label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        dateFormat="DD/MM/YYYY"
                        minDate={moment()}
                        maxDate={moment().add(24, "months")}
                        readOnly
                        withPortal
                    />
                    <button disabled={!this.state.formIsValid}>WYŚLIJ</button>
                </form>
            )
        } else {
            form = (
                <div className="center">
                    <div className={styles.send__email}>
                        <h2>Dziękuję <br/><br/>Mail został wysłany.</h2>
                    </div>
                </div>
            )
        }

        return (
            <Fragment>
                <TopImage paralax='IMG_4252.jpg'/>
                <Context>{text.contact.a}</Context>
                {this.state.sendEmail}
                <div className={styles.flex__container}>
                    <div className={styles.column}>
                        <div className="center" dangerouslySetInnerHTML={{ __html: text.contact.b }}/>
                    </div>
                    <div className={styles.column}>
                        {form}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        send: state.contact.sendEmail,
        date: state.contact.startDate
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStartDate: () => dispatch(actionCreators.startDate()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactPage, axios));
// export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

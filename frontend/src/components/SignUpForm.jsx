import { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const initForm = {
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "M",
    day: 1,
    month: 1,
    year: 2021,
    termsChecked: false
};

const validateForm = (form) => {
    let errors = {};
    //TODO: Colocar regex para nombre de usuario.
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexUsername = /^[a-z0-9_-]{3,16}$/igm;
    if (!form.name.trim()){
        errors.name = "The 'name' field is required.";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "The 'name' field only accepts letters and whitespace.";
    }
    if (!form.username.trim()){
        errors.username = "The 'username' field is required.";
    } else if (!regexUsername.test(form.username.trim())){
        errors.username = "The username does not accept special characters and must be between 3 and 16 characters.";
    }
    if (!form.email.trim()){
        errors.email = "The 'mail' field is required.";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "The 'mail' field is incorrect.";
    }
    if (!form.password.trim()){
        errors.password = "The 'password' field is required.";
    }
    return errors;
};


const SignUpForm = ({handleSubmit}) => {
    const [form, setForm] = useState(initForm);
    const [errors, setErrors] = useState({});
    const days = [];
    for (let i=1; i<=31; i++){
        days.push(i);
    }
    //const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const months = [];
    for (let i=1; i<=12; i++){
        months.push(i);
    }
    const years = [];
    for (let i=new Date().getFullYear(); i>=1905; i--){
        years.push(i);
    }
    const handleChange = (ev) => {
        if (ev.target.name === 'termsChecked'){
            setForm({...form, termsChecked: ev.target.checked});
        } else {
            setForm({...form, [ev.target.name]: ev.target.value});
        }
    };
    const handleBlur = (ev) => {
        handleChange(ev);
        setErrors(validateForm(form));
    };
    
    return(
        <Form onSubmit={(ev) => handleSubmit(ev, form)}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Introduce your name" name="name" onChange={handleChange} onBlur={handleBlur} isInvalid={errors.name}/>
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control 
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    required 
                    isInvalid={errors.username}
                    onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} onBlur={handleBlur} isInvalid={errors.email}/>
                <Form.Text className="text-muted">We will not share your email.</Form.Text>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Write your password here" name="password" onChange={handleChange} onBlur={handleBlur} isInvalid={errors.password}/>
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGender">
                <Form.Label>Sex: </Form.Label>
                <Form.Control as="select" custom name="gender" onChange={handleChange}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                </Form.Control>
            </Form.Group>
            <p>Your date of birth</p>
            <Form.Row>
                <Form.Group as={Col} className="mb-3" controlId="formBirthdayDay">
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select" custom name="day" onChange={handleChange}>
                        {days.map((day, index) => <option key={index} value={day}>{day}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formBirthdayMonth">
                    <Form.Label>Month</Form.Label>
                    <Form.Control as="select" custom name="month" onChange={handleChange}>
                        {months.map((month, index) => <option key={index} value={month}>{month}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formBirthdayYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select" custom name="year" onChange={handleChange}>
                        {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Group className="mb-3" controlId="formConfirmTerms">
                <Form.Check type="checkbox" label="I accept the terms and conditions" name="termsChecked" onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!form.termsChecked || Object.keys(errors).length > 1}>Send</Button>
        </Form>
    );
};

export default SignUpForm;
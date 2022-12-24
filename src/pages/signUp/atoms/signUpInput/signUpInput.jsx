import {useEffect, useState} from 'react';

import { StyledSignUpInput, StyledSignUpLabel }  from './styled';

import SignUpSpan from "@/pages/signup/atoms/signUpSpan/signUpSpan";

const SignUpInput = ({ 
    labelText, 
    htmlFor, 
    id, 
    type, 
    className,
    value, 
    values,
    readonly,
    setValues 
}) => {
    const [signUpAlert, setSignUpAlert] = useState({
        name:'',
        phoneNumber: '',
        address: '',
        detailAddress: '',
        email: '',
        password:'',
        passwordCheck:''
    });

    useEffect(() => {

    },[signUpAlert]);

    const handleContainerChange = (e) => {
        const korean = /^[ㄱ-ㅎ|가-힣]+$/;
        const phone = /^[0-9]+$/;
        const passCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const emailCheck = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if(e.target.value !== '' || e.target.id === 'address'){
            setSignUpAlert({
                ...signUpAlert,
                [e.target.id]: '',
            })
        }else{
            setSignUpAlert({
                ...signUpAlert,
                [e.target.id]: labelText + '를 입력해 주세요',
            })
        }
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        })

        if(e.target.id === 'name'){
            if(!korean.test(e.target.value)){
                setSignUpAlert({
                    ...signUpAlert,
                    'name': '한글만 입력 가능합니다.',
                })
                setValues({
                    ...values,
                    'name': '',
                })
            }else{
                setValues({
                    ...values,
                    'name': e.target.value,
                })
            }
        }
        if(e.target.id === 'phoneNumber'){
            if(!phone.test(e.target.value)){
                setSignUpAlert({
                    ...signUpAlert,
                    'phoneNumber': '숫자만 입력 가능합니다.',
                })
                setValues({
                    ...values,
                    'phoneNumber': '',
                })
            }else{
                setValues({
                    ...values,
                    'phoneNumber':  e.target.value,
                })
            }
        }
        if(e.target.id === 'password'){
            if(!passCheck.test(e.target.value)){
                setSignUpAlert({
                    ...signUpAlert,
                    'password': '숫자+영문자+특수문자 조합으로 8자리 이상 입력가능합니다.',
                })
                setValues({
                    ...values,
                    'password': '',
                })
            }else{
                setValues({
                    ...values,
                    'password':  e.target.value,
                })
            }
        }
        if(e.target.id === 'email'){
            if(!emailCheck.test(e.target.value)){
                setSignUpAlert({
                    ...signUpAlert,
                    'email': '이메일 형식이 다릅니다.',
                })
                setValues({
                    ...values,
                    'email': '',
                })
            }else{
                setValues({
                    ...values,
                    'email':  e.target.value,
                })
            }
        }
        if(values.password && e.target.id === 'passwordCheck'){
            if(values.password !== e.target.value){
                setSignUpAlert({
                    ...signUpAlert,
                    'passwordCheck': '비밀번호가 일치하지 않습니다.',
                })
                setValues({
                    ...values,
                    'passwordCheck': '',
                })
            }else{
                setValues({
                    ...values,
                    'passwordCheck': e.target.value,
                })
            }
        }
    };

    return (
        <>
            <StyledSignUpLabel htmlFor={htmlFor}>{labelText}</StyledSignUpLabel>
            <StyledSignUpInput readOnly={readonly} id={id}
                            className={className}
                            onBlur={handleContainerChange}
                            onChange={handleContainerChange}
                            defaultValue={value} name={id} type={type}/>
            {signUpAlert[`${id}`] && <SignUpSpan text ={signUpAlert[`${id}`]} />}
        </>
    );
};

export default SignUpInput;
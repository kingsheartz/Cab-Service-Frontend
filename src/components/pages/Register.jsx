import React, { useState } from 'react';
import '../../style.css'
import { MainDiv, ContainerDiv, RegisterDiv, ParentDiv, LeftChildDiv, RightChildDiv, FormHeading, RegisterForm, RegisterButton, InputDiv, InputText, InputLabel } from '../styled-components/Style'
import { Theme } from '../../assets/design/Theme';
import ThemePicker from '../tools/themePicker/ThemePicker';
import { registerCabUser } from '../../functions/RegisterValidations';

function Register() {

  // Declare state variable
  const [theme, setTheme] = useState(Theme['dark-theme']);
  const [data, setData] = useState({
    "id": "",
    "employeeName": "",
    "email": "",
    "phone": "",
    "route": "",
    "pickUp": "",
    "dropOff": ""
  });
  
  return (
    <>
      <MainDiv theme={theme}>
        <ThemePicker setTheme={setTheme}/>
        <ContainerDiv>
          <RegisterDiv>
            <ParentDiv className={"parent"}>
              <LeftChildDiv className={"child child1"}>
                <FormHeading theme={theme}>R E G I S T E R</FormHeading>
                <RegisterForm theme={theme}>
                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Employee ID</InputLabel>
                    <InputText
                      type="number"
                      onChange={e => { setData({ ...data, id: parseInt(e.target.value) }) }}
                      theme={theme} />
                  </InputDiv>

                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Employee Name</InputLabel>
                    <InputText
                      type="text"
                      onChange={e => setData({ ...data, employeeName: e.target.value })}
                      theme={theme} />
                  </InputDiv>

                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Email</InputLabel>
                    <InputText
                      type="email"
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      title="Invalid email address"
                      onChange={e => setData({ ...data, email: e.target.value })}
                      theme={theme} />
                  </InputDiv>

                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Phone</InputLabel>
                    <InputText
                      type="tel"
                      onChange={e => setData({ ...data, phone: e.target.value })}
                      theme={theme} />
                  </InputDiv>

                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Route</InputLabel>
                    <InputText
                      type="text"
                      onChange={e => setData({ ...data, route: e.target.value })}
                      theme={theme} />
                  </InputDiv>

                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Pick Up</InputLabel>
                    <InputText
                      type="text"
                      onChange={e => setData({ ...data, pickUp: e.target.value })}
                      theme={theme} />
                  </InputDiv>

                  <InputDiv>
                    <InputLabel
                      className={"label"}
                      theme={theme}>Drop Off</InputLabel>
                    <InputText
                      type="text"
                      onChange={e => setData({ ...data, dropOff: e.target.value })}
                      theme={theme} />
                  </InputDiv>

                  <RegisterButton
                    type='button'
                    onClick={() => { registerCabUser(data) }}
                    theme={theme}>CREATE ACCOUNT</RegisterButton>
                </RegisterForm>
              </LeftChildDiv>
              <RightChildDiv className={"child child2"} theme={theme}/>
            </ParentDiv>
          </RegisterDiv>
        </ContainerDiv>
      </MainDiv>

    </>
  )
}

export default Register;


// Stylesheet
import styled from "styled-components"
// Font
import { Font } from "../../assets/design/Font";
// Color
import { Color } from "../../assets/design/Color";

// Register.jsx 
export const MainDiv = styled.div`
background: url(${props => props.theme["bg-img"]}) repeat;
background-size: cover;
height: 100%;
width:100%;
`

// Minimum W x H 1300 x 650 (Register div)
export const ContainerDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height: 100%;
border-radius:8px;
`

export const RegisterDiv = styled.div`
width:50%;
`

export const ParentDiv = styled.div`
border-radius:8px;
height:100%;
width:100%;
overflow:hidden;
box-shadow:
inset 0 -3em 3em rgba(0,0,0,0.1),
      0 0  0 2px rgb(255,255,255),
      0.3em 0.3em 1em rgba(0,0,0,0.3);
`
export const LeftChildDiv = styled.div`
width:50%;
float:right;
`
export const RightChildDiv = styled.div`
width:50%;
background: lightblue url(${props => props.theme["tile-bg-img"]}) no-repeat center;
background-size: cover;
height:auto;
float:left;
`
export const FormHeading = styled.h2`
background: ${props => props.theme["bg-color"]};
color:${props => props.theme["form-heading"]};
padding:20px;
margin:auto;
width:100%;
box-sizing: border-box;
`

export const RegisterForm = styled.form`
background: ${props => props.theme["bg-color"]};
padding:20px;
width:100%;
box-sizing: border-box;
`

export const InputDiv = styled.div`
margin:5px, 
padding: 10px
width:auto;
position: relative;
box-sizing: border-box;
`

export const InputLabel = styled.label`
display: block;
color:${props => props.theme["input-label"]};
float:left;
font-size:14px;
box-sizing: border-box;
padding:8px;
padding-left:0px;
font-family:${Font["input-label"]};
`

export const InputText = styled.input`
right:10px !important;
padding:5px;
width:100%;
background-color:transparent;
border:none;
border-bottom: ${props => props.theme["input-text-border-bottom"]}};
box-sizing: border-box;
color:${props => props.theme["input-text-font"]}};
transistion: 0.2s;
&:focus{
    outline:none;
    border-bottom:${props => props.theme["input-text-border-bottom-on-focus"]}};
}
`

export const RegisterButton = styled.button`
padding:10px;
width:100%;
border-radius:3px;
border:none;
border:${props => props.theme["register-button-border"]};
background-color:${props => props.theme["register-button-bg-color"]};
color:${props => props.theme["register-button-font"]};
margin-top:40px;
margin-bottom:20px;
font-weight:bold;
transition: .3s;
&:hover{
    background-color:${props => props.theme["register-button-bg-color-on-hover"]};
    border-color:${props => props.theme["register-button-border-on-hover"]};
    color:${props => props.theme["register-button-font-on-hover"]};
}
`
// ThemePicker.jsx

// Theme Picker
export const ThemePickerDiv = styled.div`
position:fixed;
right:5px;
top:5px;
`
export const ThemePickerContainerDiv = styled.div`
height:30px;
width:30px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
color:white;
background-color: rgba(0,0,0,0.7);
`
export const ThemeSelecterDiv = styled.div`
position:fixed;
right:3px;
top:40px;
width:36px;
border-radius:5px;
background-color:rgba(0,0,0,0.2);
`

export const OptionDiv1 = styled.div`
background-color:black;
width:30px;
height:30px;
margin:2px;
border-radius:50%;
border:1px solid black;
&:hover{
    border:1px solid ${Color.common};
}
`

export const OptionDiv2 = styled.div`
background-color:white;
width:30px;
height:30px;
margin:2px;
border-radius:50%;
border:1px solid black;
&:hover{
    border:1px solid ${Color.common};
}
`
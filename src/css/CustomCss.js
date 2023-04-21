import styled from '@emotion/styled'

export const Button = styled.button`
    padding: 7px;
    background-color: ${p => p.bgColor?p.bgColor:"#12BD1B"};
    font-size: 16px;
    width: 120px;
    border-radius: 4px;
    border-color: ${p => p.borderColor?p.borderColor:"#12BD1B"};
    color: white;
    margin-inline: auto;
    margin: ${p => p.margin?p.margin:"20px"};
    &:hover {
      background-color: #12BD1B;
      border-color: #04A70D;
    }`

export const TextField = styled.input`
    font-size: 16px;
    color: black;
    padding: 7px;
    border-radius: 4px;
    margin: 5px 5px 5px 5px;`

export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    `

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0vw;
    width: 44vw;
    margin-inline: auto;
    margin-top: 50px;
    border: 1px solid;
    box-shadow: 5px 10px rgb(197, 194, 194);
    border-radius: 10px;
    padding: 5px 40px;
    `

export const FieldDiv = styled.div`
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 16px;
    `

export const RadioDiv = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 80px;
    margin-left: -34px
    `

export const HeadDiv = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const NavDiv = styled.div`
position: fixed;
top: 0;
width: 98vw;
padding: 0rem 1rem;
height: 7vh;
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
box-shadow: 0px 0px 30px 10px grey;
`

export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: black;
font-size: 1.5rem;
text-transform: uppercase;
font-weight: 600;
`

export const NavLinkContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
color: grey !important;
font-size: 1.2rem;
text-transform: uppercase;
font-weight: 500;
height: 100%;
// gap: 3rem;
`

export const NavLinkItem = styled.div`
height: 100%;
padding: 3px 1.5rem;
cursor: pointer;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    background-color: black;
    color: white;
    transition: all 1s;
  }`

export const SideNavbar = styled.div`
height: ${p => p.height?p.height:"100%"};
width: ${p => p.width?p.width:"100%"};
background:${p => p.background?p.background:"white"};
border: ${p => p.border?p.border:"none"};
display: ${p => p.display?p.display:"static"};
flex-direction: column;
align-items: center;
position: ${p => p.position?p.position:""};
margin-top: ${p => p.marginTop?p.marginTop:"0vh"};
padding: 30px 0px;
`

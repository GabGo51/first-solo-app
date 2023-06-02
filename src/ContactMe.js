import  styled  from "styled-components"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { ThemeContext } from "./Context"

const ContactMe = () => {

  const {light} = useContext(ThemeContext)

  const [formData, setFormData] = useState({
    name:'', 
    email:'',
    message:''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = (event) =>{

    event.preventDefault();

    window.alert("YOOOOOOOOOOO")
  }

return(

  <Container>
    <Title>Contact Me</Title>
    <InfoBox>
      <TextBox light = {light}>
        <h3>Get in touch</h3>
        <p><span>Email</span> : snow.gabo51@gmail.com</p>
        <p><span>Phone</span> : 450 712 7842</p>
        <p>Thanks for checking out my portfolio! If you're interested in collaborating on a project, I'd love to hear from you. Feel free to reach out through the contact information provided. Looking forward to the opportunity to work together!</p>
      </TextBox>
      <FormBox light={light}>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
            light = {light} 
            name="name"
            onChange={handleChange} 
            placeholder="Name"
            value={formData.name}
            />
            <Input 
            light = {light} 
            type="email"
            name="email"
            onChange={handleChange} 
            placeholder="Email"
            value={formData.email}
            />
          </div>
          
          <Message 
          light = {light} 
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
          />
          <button light = {light} type="submit">Send</button>
        </form>
      </FormBox>
    </InfoBox>

  </Container>
)
}

const Container = styled.div`
max-width: 1200px;
padding-bottom: 200px;
display: flex;
flex-direction: column;

`
const Title = styled.h2`
font-weight: 400;
font-size: 3em;
margin-bottom: 100px;
`

const InfoBox = styled.div`
display: flex;



`
const TextBox = styled.div`
margin-right: 150px;
font-size: 1.3em;

p{
  margin-top: 40px;
}

span{
  /* font-weight: bold; */
  color:${({light}) => light ? "#247A6A":'#69ffcf'};
  font-weight: 500;
}
`
const FormBox = styled.div`
margin-left: -80px;
margin-top: 20px;
form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

div{
  display: flex;
  flex-wrap: nowrap;
}

button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border: 1px solid #B3B3B3;
  background-color: ${({light}) => light?"white":"black"} ;
  padding: 5px 40px;
  transition: 200ms;
  font-size: 1.1em;
  font-weight: 500;
  color:${({light}) => light?"black":"white"}   ;

  &:hover{
    background-color: ${({light}) => light ? "#247A6A":'#69ffcf'};
    color:  ${({light}) => light ? "white":'black'};
    border: 1px solid black;
  }
}
`

const Input = styled.input`
width: 290px;
margin-right: 20px;
border: 1px solid #B3B3B3;
background-color: ${({light}) => light?"white":"#0F0F0F"} ;
padding: 10px ;
font-size: 1.1em;
transition: 200ms;
color: ${({light}) => light?"black":"white"};
&:hover{
    border:${({light}) => light?"1px solid black":"1px solid white"};
  }
`

const Message = styled.input`
padding: 10px;
padding-bottom: 150px;
width: 600px;
border: 1px solid #B3B3B3;
background-color: ${({light}) => light?"white":"#0F0F0F"};
font-size: 1.1em;
transition: 200ms;
vertical-align: top;
color: ${({light}) => light?"black":"white"};
margin: 5px 0px;
&:hover{
  border:${({light}) => light?"1px solid black":"1px solid white"};
  }

`
export default ContactMe
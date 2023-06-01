import  styled  from "styled-components"
import { useEffect, useState } from "react"

const ContactMe = () => {

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
      <TextBox>
        <h3>Get in touch</h3>
        <p><span>Email</span> : snow.gabo51@gmail.com</p>
        <p><span>Phone</span> : 450 712 7842</p>
        <p>sum dummy text</p>
      </TextBox>
      <FormBox>
        <form onSubmit={handleSubmit}>
          <div>
            <Input 
            name="name"
            onChange={handleChange} 
            placeholder="Name"
            value={formData.name}
            />
            <Input 
            type="email"
            name="email"
            onChange={handleChange} 
            placeholder="Email"
            value={formData.email}
            />
          </div>
          
          <Message 
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
          />
          <button type="submit">Send</button>
        </form>
      </FormBox>
    </InfoBox>

  </Container>
)
}

const Container = styled.div`
width: 1200px;
padding-bottom: 1000px;
display: flex;
flex-direction: column;
color: white;

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
  font-weight: bold;
}
`
const FormBox = styled.div`

form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border: 1px solid #B3B3B3;
  background-color: black;
  padding: 5px 40px;
  transition: 200ms;
  font-size: 1.1em;
  font-weight: 500;
  color: #B3B3B3   ;

  &:hover{
    background-color: white;
    color: black;
  }
}
`

const Input = styled.input`
width: 290px;
margin-right: 20px;
border: 1px solid #B3B3B3;
background-color: black;
padding: 10px ;
font-size: 1.1em;
transition: 200ms;
color: white;
&:hover{
    border: 1px solid white;
  }
`

const Message = styled.input`
padding: 10px;
padding-bottom: 150px;
width: 600px;
border: 1px solid #B3B3B3;
background-color: black;
font-size: 1.1em;
transition: 200ms;
vertical-align: top;
color: white;
&:hover{
    border: 1px solid white;
  }

`
export default ContactMe
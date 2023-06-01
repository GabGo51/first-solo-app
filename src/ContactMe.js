import  styled  from "styled-components"

const ContactMe = () => {


return(

  <Container>
    <Title>Contact Me</Title>
    <InfoBox>
      <TextBox>
        <h3>Get in touch</h3>
        <p>Email: snow.gabo51@gmail.com</p>
        <p>Phone: 450 712 7842</p>
        <p>sum dummy text</p>
      </TextBox>
      <FormBox>
        <form>
          <div>
            <Input placeholder="Name"/>
            <Input placeholder="Email"/>
          </div>
          
          <Message placeholder="Message"/>
          <button>Send</button>
        </form>
      </FormBox>
    </InfoBox>

  </Container>
)
}

const Container = styled.div`
width: 1000px;
padding-bottom: 1000px;
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
  width: 50px;
  border: 1px solid white;
  background-color: black;
  padding: 5px 40px;
  transition: 200ms;
  font-size: 1.3em;

  &:hover{
    background-color: white;
    color: black;
  }
}
`

const Input = styled.input`
width: 290px;
margin-right: 20px;
border: 1px solid white;
background-color: black;

`

const Message = styled.input`
height: 100px;
width: 600px;
border: 1px solid white;
background-color: black;
`
export default ContactMe
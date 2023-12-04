import styled from '@emotion/styled'


const Texto = styled.div`
    
    background-color: red;
    color: white;
    padding: 20px;
    text-transform: uppercase;
    border-radius: 5px;
    font-size: 22px;
    text-align: center;
    font-weight: 700;
    font-family: 'Lato', sans-serif;

`


const Error = ({children}) => {
  return (

    <Texto>{children}</Texto>

  )
}

export default Error
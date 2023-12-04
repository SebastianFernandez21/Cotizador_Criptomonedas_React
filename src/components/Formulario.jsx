import {useEffect,useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`

  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color .3s ease ;
  :hover{
      background-color: #7A7DFE;
      cursor: pointer;
  }
`


const Formulario = ({setMonedas}) => {

  const [criptos,setCriptos] = useState([])
  const [error,setError] = useState(false)

  const [moneda,SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
  const [criptomonedas,SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda',criptos)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arraysCriptos = resultado.Data.map( cripto => { 

        const objeto = {

          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName

        }

        return objeto
      })
  
      setCriptos(arraysCriptos)

    }

    consultarAPI()
  
  }, [])
  
  const handlerSubmit = e => {
    e.preventDefault()

    if ([moneda ,criptomonedas].includes('')) {
      
      setError(true)

      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomonedas
    })

  }


  return (
    <>
        {error && <Error> Todos los campos son Obligatorios </Error>}
        
        <form 
        onSubmit={handlerSubmit}
        
        >

            <SelectMonedas/>
            <SelectCriptomonedas/>

            <InputSubmit type='submit' value="Cotizar" />
        </form>
    </>
  )
}

export default Formulario
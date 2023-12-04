import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: white;
    font-family: "Lato", sans-serif;
    display: flex;
    margin-top: 30px;
    align-items: center;
`

const Texto = styled.p`
    font-size: 18px;
    span{

        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    margin-right: 20px;
`
const Precio = styled.p`
    font-size: 30px;
    span{

        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {

  const{ PRICE,HIGHDAY,LOWDAY,CHANGE24HOUR,IMAGEURL,LASTUPDATE }= resultado

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"></Imagen>
        <div>
        <Precio>Precio es de: <span> {PRICE} </span></Precio>
        <Texto>Precio mas alto del dia: <span> {HIGHDAY} </span></Texto>
        <Texto>Precio mas bajo del dia: <span> {LOWDAY} </span></Texto>
        <Texto>Variacion ultimas 24 horas: <span> {CHANGE24HOUR} </span></Texto>
        <Texto>Ultima actualizacion: <span> {LASTUPDATE} </span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
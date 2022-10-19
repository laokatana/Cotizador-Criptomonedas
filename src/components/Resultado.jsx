import styled from '@emotion/styled'

const Contenedor = styled.div`
color:#FFF;
font-family: 'Lato', sans-serif;
display:flex;
align-items: start;
gap: 3rem
`


const Imagen = styled.img`
display:block;
width:135px;
margin-top:12px



`

const Texto = styled.p`
font-size:18px;
span{
  font-weight:700;
  
}

`

const Precio = styled.p`
  font-size:30px;
  span{
    font-weight:700;

  }

`

const Resultado = ({resultado}) => {
  const { 
    PRICE,HIGHDAY, LOWDAY, 
    CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE
  } = resultado
  
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span> </Precio> 
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span> </Texto> 
        <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span> </Texto> 
        <Texto>variacion ultima 24hs: <span>{ CHANGEPCT24HOUR}</span> </Texto>  
        <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span> </Texto> 
      </div>
    </Contenedor>
  )
}

export default Resultado
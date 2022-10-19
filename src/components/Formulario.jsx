import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectorDeMonedas from './hooks/useSelectorDeMonedas.jsx'
import { monedas } from './data/monedas.js'
import Error from './Error.jsx'



const InputSubmit = styled.input `
   background-color:#9497FF;
   border:none;
   width:100%;
   padding: 10px;
   color:#FFF;
   font-weight: 700;
   text-transform: uppercase;
   font-size:20px;
   border-radius: 5px;
   margin-top: 30px;
   transition: background-color .3s ease;
   
   &:hover{
    background-color:#8807FF;
    cursor: pointer;
   }

`


const Formulario = ({ setMonedas }) => {


  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  
  const [ moneda,SelectMonedas ] = useSelectorDeMonedas('elige tu moneda',monedas);
  const [ criptoMoneda,SelectCriptoMonedas ] = useSelectorDeMonedas('elige tu Criptomoneda',criptos);
  
  useEffect(()=>{
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCripto = resultado.Data.map( cripto =>{
        
        const objeto = {
          id:cripto.CoinInfo.Name,
          nombre:cripto.CoinInfo.FullName
        }
        
        return objeto
        
      })

      setCriptos(arrayCripto)
      
    }
    consultarAPI();

  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    let cotizacion = [moneda, criptoMoneda]

    cotizacion.map(( valor )=>{

      if(valor === ""){
        setError(true)
      }else{
        setError(false)
        setMonedas({
          moneda,
          criptoMoneda


        })



      }     
    })

  }

  return (
    
    <>

      {error && <Error>Todos los campos son requeridos</Error>}

      <form
        onSubmit={handleSubmit}
      
      >
        <SelectMonedas/>
        <SelectCriptoMonedas/>
        <InputSubmit 
          type="submit" 
          value="Cotizar"/>
      </form>
    
    
    </>
    
  )
}

export default Formulario
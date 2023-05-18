import React,{useRef,useState} from 'react'
import styled from "styled-components"



const IpAdress = () => {
    const [durum,setDurum]=useState(true)
    const [toplamData,settoplamData]=useState([])

    const ip=useRef("")
    const Container=styled.div`
    margin-left:20%;
    margin-top:100px;
    
        
    `;
    const RandomIp=styled.div`

    margin-top:20px;
        
    `;



    const handleClick=async(e)=>{
        e.preventDefault();
        const a=ip.current.value 

        const b=ip.current.value.toString().split(".").length - 1;
        const four=a.toString().split(".")[3]
        const three=a.toString().split(".")[2].split(".")[0]
        const two=a.toString().split(".")[1].split(".")[0]
        const one=a.toString().split(".")[0]

        if(b===3 && /([0-9])$/.test(one) && /([0-9])$/.test(two) && /([0-9])$/.test(three) && /([0-9])$/.test(four)){
            if(four.length===3 || three.length===3 || two.length===3 || one.length===3){
                if(four>255){
                    setDurum(false)                  
                }else{
                    if(three.length===3){
                        if(three>255){

                            setDurum(false)
                        }else{
                         
                            if(two.length===3){
         
                                if(two>255){
            
                                    setDurum(false)
                                }else{
           
                                    if(one.length===3){
                                        if(one>255){                        
                                            setDurum(false)
                                        }else{
                                            setDurum(true)
                                        }                                        
                                    }else{
                                        setDurum(true)
                                    }
                                }                               
                            }else{
  
                                if(one.length===3){
                                    if(one>255){
                                        setDurum(false)
                                    }else{
                                        setDurum(true)
                                    }                                    
                                }else{
                                    setDurum(true)
                                }
                            }
                        }                        
                    }
                    else{

                        if(two.length===3){
                            if(two>255){
   
                                setDurum(false)
                            }else{
                                if(one.length===3){
                                    if(one>255){
                                        setDurum(false)
                                    }else{
                                        setDurum(true)
                                    }                                   
                                }else{
                                    setDurum(true)
                                }
                            }                           
                        }else{
                            if(one.length===3){
                                if(one>255){                
                                    setDurum(false)
                                }else{
                                    setDurum(true)
                                }                               
                            }else{
                                setDurum(true)
                            }
                        }
                    }
                }
                            
            }else{

                if(four.length>3 || three.length>3 || two.length>3 || one.length>3){
                    setDurum(false)
                }else{
                    setDurum(true)

                }
                
            }

            var i,toplam=[one+"."+two+"."+three+".1",one+"."+two+"."+three+".254"]
            for (i=50;i<=250;i=i+50){
                toplam.push(one+"."+two+"."+three+"."+i)
            }
            settoplamData(toplam)

         
        }
      
    
        else{
            setDurum(false)
        }
    
    }

    
  return (
    <Container>
        <span>Ip Adresi Giriniz:  </span>
        <input type="text" ref={ip} style={{width:"250px"}}/>
        <button className="loginRegisterButton" onClick={handleClick} style={{marginLeft:"5px"}}>Ip Oluştur</button>
        {!durum && <span style={{color:"red"}}>Lütfen geçerli bir ip adresi formatı giriniz</span>}
        <RandomIp>Random Ip Adresleri:</RandomIp>
        {durum && toplamData?.map((a)=>(
            <li>{a}</li>
        ))}
    </Container>
  )
}

export default IpAdress
import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import {cartaFondo,cartaSuperficie} from "../../cartaXY";

function Page(props) {
    
   
  
   const { cartasPozo,pozoId} = props;
   
    const pumpCard = cartasPozo.length ? cartaFondo(cartasPozo[0]) : {};
    const surfaceCard = cartasPozo.length ? cartaSuperficie(cartasPozo[0]) : {};
    debugger;
    const numeroCarta = cartasPozo.length ? JSON.parse(cartasPozo[0].cardNumber) : "";
    console.log(pumpCard)
    return (
        <Fragment>
            <CssBaseline />
            
            <div className='title' id='titlePozo'>
                WELL {pozoId} - CARD {numeroCarta} </div>     
             
            <div style={
                {marginRight:'auto',
                marginLeft:'auto',
                height:100+'%', 
                width:50+'%'}}>
                         
           
            <Paper elevation={0} className="paper-container"> 
 
                <Highchart options={({
                    title: {
                        style: {
                            fontSize: 15+'px',
                            fontFamily: 'barlow,sans-serif'
                        },
                        text: "PUMP CARD",
                    },
                    chart: {
                        type: 'scatter',
                        style: {
                            fontFamily: 'barlow,sans-serif'
                        }
                    },
                    plotOptions:
                    {   series: {lineWidth: 2.5}},  
                    series: 
                          [{data : pumpCard}],
                    updateArgs : [true,true,true]})
                }/>
                            
            </Paper>
                
            <br/> 
            <Paper elevation={0} className="paper-container"> 
 
                <Highchart oneToOne="false" options={({
                    title: {
                        style: {
                            fontSize: 15+'px',
                            fontFamily: 'barlow,sans-serif'
                        },
                        text: "SURFACE CARD",
                    },
                    chart: {
                        type: 'scatter',
                        style: {
                            fontFamily: 'barlow,sans-serif'
                        }
                    },   
                    plotOptions:
                    {   series: {lineWidth: 2.5}},                
                    series: 
                          [{data : surfaceCard}]
                    })
                }/>
                            
            </Paper>
                
          
              
            </div>
            

        </Fragment>
    );
}

export default Page;
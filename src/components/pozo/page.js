import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import {cartaFondo,cartaSuperficie} from "../../cartaXY";

function Page(props) {
    
   
  
   const { cartasPozo,pozoId} = props;
   
   const pumpCard = cartasPozo.length ? cartaFondo(cartasPozo[0]) : {};
    const surfaceCard = cartasPozo.length ? cartaSuperficie(cartasPozo[0]) : {};
    console.log(pumpCard)
    return (
        <Fragment>
            <CssBaseline />
            
                
            <Typography gutterBottom variant="h5" component="h2">
                              Pozo {pozoId}
            </Typography>
            
             
            
            <div style={{height:100+'%', width:50+'%'}}>
                         
           
            <Paper elevation={0} className="paper-container"> 
 
                <Highchart options={({title: {
                                         text: "Carta de fondo"
                                                }
                                        
                                                ,series: 
                          [{data : pumpCard}]})
                        }/>
                            
            </Paper>
                
          
              
            </div>
            
            <div style={{height:100+'%', width:50+'%'}}>
                         
           
            <Paper elevation={0} className="paper-container"> 
 
                <Highchart options={({title: {
                                         text: "Carta de superficie"
                                                }
                                        
                                                ,series: 
                          [{data : surfaceCard}]})
                        }/>
                            
            </Paper>
                
          
              
            </div>
            

        </Fragment>
    );
}

export default Page;
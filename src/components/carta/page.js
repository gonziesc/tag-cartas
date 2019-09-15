import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import './styles.css';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import Checkboxes from "../checkboxes";

function Page(props) {
    
   
   debugger;
   const {golpeFluido,golpeGas, cartas} = props;
  
   const cartasXy = cartas.map(c => JSON.parse(c.pumpCardxDots).map((dot,index)=>[dot,JSON.parse(c.pumpCardyDots)[index]]))

  
    return (
        <Fragment>
            
            
            <CssBaseline />
            
                
            <Typography gutterBottom variant="h5" component="h2">
                              Pozo X
                            </Typography>
            <Link to="/pozos">Pozos</Link>
             
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div style={{height:100+'%', width:50+'%'}}>
             <Slider >             
           
            {cartasXy.map((carta,index) => (<Paper
                    elevation={0}
                    className="paper-container"
                >
                      
                
                <div className="checks" align="center">
                    <Checkboxes  />
                </div>
                <div className="next" align="center">
                    <Button color="primary" onClick={()=> {golpeGas(cartas[index]);}}>Golpe de gas</Button>
                    <Button color="primary" onClick={()=> {golpeFluido(cartas[index]);}} >Golpe de fluido</Button>   
                </div>

                    {carta ?
                      
                            
                            
                        <Highchart options={({title: {
                                            text: 'Pump Cards'
                                                }
                                        
                                                ,series: 
                          [{data : carta}]})
                        }/>
                       
                           
                        
                      

                        :
                        <CircularProgress className="item-loader" />
                    }
                  
                    
                </Paper>))}
                
          
            </Slider>   
            </div>
            </div>

        </Fragment>
    );
}

export default Page;
/*
<div classname="botones" align="center">
                       
                    
                </div>*/
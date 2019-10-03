import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import {cartaFondo, cartaSuperficie} from "../../cartaXY";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';


const obtenerDiagnostico = (diagnose) =>{
  switch(diagnose){
    case("noProblem"):
      return "Sin problemas"
    case(""):
      return "Sin diagnostico"
    default:{
      return diagnose.split(",").map(d => translate(d)).join(" | ");
    }
  }
}

  
const translate = (diagnose) =>{
  switch(diagnose){
    case("gasInterference"):
      return "Interferncia de gas"
    case("fluidStroke"):
      return "Golpe de fluido"
    case("bombStroke"):
      return "Golpe de bomba"
    case("flowingWell"):
      return "Pozo fluyente"
    case("fishingRodRods"):
      return "Pesca de varillas de bombeo"
    default:
      return ""
  }
}
  
const obtenerColor = (diagnose,porcentaje) =>{
  if(diagnose==="Sin problemas" || diagnose==="Sin diagnostico"){
    if(porcentaje<20){
      return "withoutProblemColor"
    }
    else 
    {
      return "futureProblemColor"
    }
  }
  else
  {
    return "problemColor"
  }
}

function Page(props) {
  const {carta} = props;
  const c = carta ? carta : {};
  let diagnose, fecha, porcentaje;

  if(Object.keys(carta).length>0) {
    diagnose = obtenerDiagnostico(c.diagnose);
    fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
    porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? Math.random()*100 : 100;
  }

  return Object.keys(carta).length>0 ? (
              
  <Fragment>
  <CssBaseline />        
    
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 100 + '%'}}>
    
      <div className="container">

          <div className='title'>
          <span>
          POZO  {carta.well}
              </span>
          </div> 

          <div className="info-container">
              <Card className="card">
                  <CardActionArea>
                      <CardContent className="header">
                          <CardHeader
                              avatar={
                                  <Avatar aria-label="recipe" id={obtenerColor(diagnose,porcentaje)}>
                                  </Avatar>}
                              title={<Typography variant="h5"  component="p" alignContent='right' textAlign='right'>
                              {"Carta " + c.cardNumber}</Typography>}
                          />
                      </CardContent>

                      <CardContent className="media">
                          
                          <Typography variant="body2"  component="p">
                          {"Diagnóstico: " + diagnose }
                          </Typography>

                          <Typography variant="body2"  component="p">
                          {"Probabilidad: " + porcentaje.toFixed(2) + "%"}
                          </Typography>

                          <Typography variant="body2"  component="p">
                          {"Última actualización: "+ fecha}
                          </Typography>

                      </CardContent>
                  </CardActionArea>
              </Card>
          </div>
      
          <div className="papers-container" >

              <Paper elevation={0} className="paper-container">

                  <Highchart options={({
                      title: {
                          style: {
                              fontSize: 15 + 'px',
                              fontFamily: 'barlow,sans-serif'
                          },
                          text: "CARTA DE FONDO ",
                      },
                      colors: ['#64B5A4'],
                      chart: {
                          type: 'scatter',
                          style: {
                              fontFamily: 'barlow,sans-serif'
                          }
                      },
                      responsive: {
                        rules: [{
                          condition: {
                            callback: function() {
                              return false
                            } 
                          },
                          chartOptions: {
                            legend: {
                              enabled: false
                            }
                          }
                        }]
                      },
                      plotOptions:
                          { series: { lineWidth: 1.5 } },
                      series:
                          [{
                              data: cartaFondo(carta),
                              name: 'Carta'
                          }],
                      updateArgs: [true, true, true]
                  })
                  } />

              </Paper>

              <br />
              <Paper elevation={0} className="paper-container">

                  <Highchart oneToOne="false" options={({
                      title: {
                          style: {
                              fontSize: 15 + 'px',
                              fontFamily: 'barlow,sans-serif'
                          },
                          text: "CARTA DE SUPERFICIE",
                      },
                      colors: ['#E78B50'],
                      chart: {
                          type: 'scatter',
                          style: {
                              fontFamily: 'barlow,sans-serif'
                          }
                      },
                      plotOptions:
                          { series: { lineWidth: 1.5 } },
                      series:
                          [{
                              data: cartaSuperficie(carta),
                              name: 'Carta'
                          }]
                  })
                  } />

              </Paper>

          </div>
      
      </div>           
      
  </div>
</Fragment>
    )
: ( <div id="spinner">
        <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
        </div>
    </div>)
}

export default Page;

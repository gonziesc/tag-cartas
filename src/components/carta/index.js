import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCartas from "../../redux/cartas/actions/getCartas";
import updateState from "../../redux/cartas/actions/updateState";

class Carta extends Component{
    
    componentDidMount(){
        const {getCartas} = this.props;
        getCartas();
    }
    
    render(){
        
       const pozoId = this.props.match.params.pozoId;
        
        const{ cartas, updateState} = this.props;
        debugger;
        return(
            <Page 
                cartas={cartas}
                updateState={updateState}
                pozoId={pozoId}
            />
        );
    }
}


const mapStateToProps = state => ({
    cartas : state.carta.cartas
});

const mapDispatchToProps  = dispatch =>( {
   getCartas : () => dispatch(getCartas()),
   updateState : (carta,state) => dispatch(updateState(carta,state))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Carta))
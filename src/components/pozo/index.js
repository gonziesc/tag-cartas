import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCartasPozo from "../../redux/pozo/actions/getCartasPozo";

class Pozo extends Component{
    
    componentDidMount(){
       debugger
        const {getCartasPozo} = this.props;
        getCartasPozo();
    }
    
    render(){
        debugger;
       const pozoId = this.props.match.params.pozoId;
        
        const {cartasPozo} = this.props;

       
        return(
            <Page 
                cartasPozo={cartasPozo}
                pozoId={pozoId}
            />
        );
    }
}


const mapStateToProps = state => ({
    cartasPozo : state.pozo.cartasPozo
});

const mapDispatchToProps  = dispatch =>( {
   getCartasPozo : () => dispatch(getCartasPozo())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pozo))
import React, { Component } from 'react';
import ReactMap,{Layer,Feature} from 'react-mapbox-gl';

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w";
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken
});

const mapStyle = {
  height: '100vh',
  width: '100vw'
};

class App extends Component {
    constructor(props){
        super(props);
        this.state=
            {
                updateInterval:null,
                time: 0
            }
    }
    componentDidMount(){
        this.setState({updateInterval:setInterval(this.updateTime,1000)})
    }
    componentWillUnmount(){
        clearInterval(this.state.updateInterval)
    }
    updateTime=()=>{
        console.log("Time updated")
        //let time=Date.now();
        this.setState({time:Date.now()})
    }
  render() {
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
      >
        <Layer type="symbol" layout={{"icon-image":"airport-15","icon-size":10}} paint={{"icon-color":"#00FF00"}}>
            <Feature coordinates={[25,60]} onClick={()=>{console.log("Clicked")}}/>
        </Layer>
      </Map>
    );
  }
}


export default App;

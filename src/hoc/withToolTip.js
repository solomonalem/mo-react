
import React  from 'react';

function withToolTip (Component){

    return class withToolTip extends React.Component{

        state = {showTool : false }

        mouseOver = () => {
            this.setState({showTool:true})
        }
        mouseOut = () => {
            this.setState({showTool:false})
        }
        render(){
            
            return(
                    <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>

                    <Component showTool={this.state.showTool}/>
                    </div>
                )
            

        }
    }
}
export default withToolTip;
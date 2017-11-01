import * as React from "react";
import PropTypes from 'prop-types';
import { Button } from "reactstrap";
import ReactMarkdown from 'react-markdown-editor-hybrid';
import objectAssign from 'object-assign';

require("./styles.css");

class NewTicket extends React.Component<any,any>  {
    constructor(){
        super()
        this.state = {value:""};
}
    render(){ 
        
return (
        <div className="formNewTicket">
        <input className="inputTitleTopic" type="text" placeholder="Enter your topic title here..."/>
        <ReactMarkdown value={this.state.value} onChange={(e)=>this.setState({value: e})} />
        <Button outline color="success">create</Button>
        
        </div>
        
        )}
};

    
export default NewTicket;
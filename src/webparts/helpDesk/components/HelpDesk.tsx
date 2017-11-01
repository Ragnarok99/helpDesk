import * as React from 'react';
import styles from './HelpDesk.module.scss'; 
import { IHelpDeskProps } from './IHelpDeskProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HashRouter, Switch, Route } from "react-router-dom";
import Dashboard from './dashboard/';
import Category from './category/';
import Ticket from './ticketDescription/';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default class HelpDesk extends React.Component<any, any> {
  constructor() {
    super();
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  public render() {
    return ( 
      <div className="container">
          <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            HelpDesk
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

 <HashRouter>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/category/1/announcements/ticketName' component={Ticket}/> 
          <Route path='/category/1/announcements' component={Category}/>
          </Switch>
     </HashRouter>
      </div>
    
    );
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
}

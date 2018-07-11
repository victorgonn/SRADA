import React, { Component } from "react";
import { inject } from 'mobx-react'
import { Popover, PopoverContent } from "reactstrap";

@inject("store")
export default class Separator extends React.Component {
    constructor (props) {
        super(props);
        this.store = this.props.store; 
        this.labelIcon = props.labelIcon;
        this.label = props.label;
        this.sideItensGroup = props.sideItensGroup;

        this.click = this.click.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            accountMenuOpen: false
        };
    }
  
    click(){
        this.store.appStore.toggleSideBarGroup(this.label);
    }

    open() {
        if(this.store.appStore.sidebarFechado){
            if (this.pendingClose) {
                clearTimeout(this.pendingClose);
                this.pendingClose = null;
            }
            this.setState({
                accountMenuOpen: true
            });
        }
    }
  
    componentWillUnmount(){
        if (this.pendingClose) {
            clearTimeout(this.pendingClose);
        }
    }

    close() {
        this.pendingClose = setTimeout(() =>
        this.setState({
            accountMenuOpen: false
        }), 75); 
    }

    toggle() {
        this.setState({
            accountMenuOpen : !this.accountMenuOpen
        });
    }
  
  render() {
    const id = this.label.replace(/\s/g,'');
    return (   
        <span id={'Popover-' + id} onMouseEnter={this.open} onMouseLeave={this.close} 
            onClick={this.click} className="separator"  title={this.label} 
        >
            {this.labelIcon}
            <span className={this.store.appStore.sidebarFechado ? "sidebar-label hidden" : "sidebar-label"}>{this.label}</span>
            <Popover placement="right" isOpen={this.state.accountMenuOpen} target={'Popover-' + id} toggle={this.toggle} onMouseEnter={this.open} onMouseLeave={this.close}>
                <PopoverContent>
                    {this.sideItensGroup}
                </PopoverContent>
            </Popover>
        </span>
        
    );
  }
}

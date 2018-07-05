import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import SideItem from './SideItem';
import Separator from './Separador';
import FontAwesome  from "react-fontawesome"
import { ListGroup } from 'reactstrap';

@inject("store") @inject("routes") @observer
export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.routes = this.props.routes;
        this.loginStore = this.props.store.loginStore;
    }

    render() {
        const sideItens = [];
        
        for (let i=0; i < this.routes.length; i++) {
            const menuCategory = this.routes[i];
            const sideItensGroup = [];
                
           let key = 0;
           if(typeof menuCategory.itens !== 'undefined'){
                for (let j=0; j < menuCategory.itens.length; j++) {
                    const menuCategoryItem = menuCategory.itens[j];
                        const space = <span className="space"/>
                        const listCount = menuCategoryItem.listCount ? <span className={this.store.appStore.sidebarFechado ? "inbox-count minimized" : "inbox-count"}>{menuCategoryItem.listCount}</span> : "";

                        if(menuCategoryItem.onSideBar && menuCategoryItem.onSideBar == true){
                            const item = <SideItem title={menuCategoryItem.label} key={key} to={menuCategoryItem.path}>{space}{listCount}<span className={this.store.appStore.sidebarFechado ? "sidebar-label hidden" : "sidebar-label"}>{menuCategoryItem.label}</span></SideItem>
                            sideItensGroup.push(item);
                            key++;
                        }
                }
            }
            
            const labelIcon = menuCategory.icon ? <FontAwesome className="sidebar-icon" flip={menuCategory.flip ? sideItensGroup.flip : null} name={menuCategory.icon} /> : "";
            const separator = <Separator label={menuCategory.label} labelIcon={labelIcon} sideItensGroup={sideItensGroup} />;
                sideItens.push(
                    <div key={i} className="menu-category">
                        {separator}
                        <div
                            className={menuCategory.label === this.store.appStore.expandirGrupoSidebar ? "item-group" : "item-group collapsed"}>
                            {sideItensGroup}
                        </div>
                    </div>);
        }

        return (
            <div className={this.store.appStore.sidebarFechado ? "side-bar minimized" : "side-bar"}>
                <ListGroup >
                    {sideItens}
                </ListGroup>
            </div>
        )
    }
}
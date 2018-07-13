import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Navbar, NavbarBrand } from 'reactstrap';
import FontAwesome  from "react-fontawesome";
import loading from '../../assets/images/dots-loading.gif';
import lscache from "lscache";

@inject("store") @observer
export default class TopBar extends Component {
	constructor(props) {
    super(props);
    this.appStore = this.props.store.appStore;
    this.loginStore = this.props.store.loginStore;
  }

  quit() {
      //TODO: FAZER LOGOUT
    //window.location.href = '/sgtmot/saml/logout'
      lscache.remove('token');
      window.location.href ='/'
      console.log("deslogou!");
  }

  render() {
    return (
      <div className="topbar">
        <Navbar>
          <div className="header-left">
            <NavbarBrand href="/app/login"><text style={{fontFamily: "open_sansextrabold,Open Sans,Arial,Helvetica,sans-serif", fontWeight: "500", color: "white"}} >IFES - SERRA</text></NavbarBrand>
          </div>
          <a onClick={() => this.appStore.toggleSideBar()} className="collapse-sidebar-button"><FontAwesome name="bars" /></a>
          <a onClick={this.quit.bind(this)} title="Sair" className="logout-icon">
              {(!this.loginStore.usuarioLogado) && this.loginStore.loadingUsuarioLogado ? (
                  <div className="topbar-loading">
                      <img src={loading} alt="loading" className="loading"/>
                  </div>
                  ) : (
                  <span className="navbar-text">{this.loginStore.usuarioLogado.nome}</span>
                  )
              }
              <FontAwesome name="sign-out" />
          </a>
        </Navbar>
      </div>
    );
  }
}
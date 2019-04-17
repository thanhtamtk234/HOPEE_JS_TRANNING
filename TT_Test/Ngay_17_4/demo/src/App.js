import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Content from './Component/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <div className="container">
        <div className="row pt-5">
        <Content tieude="Cách sử dụng JSX" vitri1="order-lg-2"anh="img/01.jpg" trichdan="Ví dụ 1"/>
        <Content tieude="Cách sử dụng Map" anh="img/02.jpg"  trichdan="Ví dụ 2"/>
        <Content tieude="Cách sử dụng props" vitri1="order-lg-2"anh="img/03.jpg"  trichdan="Ví dụ 3"/>
        <Content tieude="Cách sử dụng Component" vitri1="order-lg-2"anh="img/01.jpg" trichdan="Ví dụ 1"/>
        <Content tieude="Cách sử dụng Map" anh="img/02.jpg"  trichdan="Ví dụ 2"/>
        <Content tieude="Cách sử dụng props" vitri1="order-lg-2"anh="img/03.jpg"  trichdan="Ví dụ 3"/>
        <Content tieude="Cách sử dụng Component" vitri1="order-lg-2"anh="img/01.jpg" trichdan="Ví dụ 1"/>
        <Content tieude="Cách sử dụng Map" anh="img/02.jpg"  trichdan="Ví dụ 2"/>
        <Content tieude="Cách sử dụng props" vitri1="order-lg-2"anh="img/03.jpg"  trichdan="Ví dụ 3"/>
        </div>
       </div>
        <Footer/>
        
        </div>
    );
  }
}

export default App;

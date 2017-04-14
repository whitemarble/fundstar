import React, { Component } from 'react';
import './App.css';
import '../public/assets/css/font-awesome.css'
import MainMenu from './header/MainMenu';
import PriceBox from './content/PriceBox'
import HomeSlider from './content/HomeSlider';
import MyFooter from './footer/MyFooter'
import { Layout ,Affix} from 'antd';
const { Header, Footer, Content } = Layout;
import mylogo from '../public/assets/img/logo-formax-subpage.svg';
import mylogolight from '../public/assets/img/logo-formax.svg';
import Banner from './content/Banner'

class App extends Component {
  state = {
    menuclass:'mainmenu',
    logo:mylogolight
  }
  affixscroll = (affixed)=>{
    if(affixed)
      this.setState({
          menuclass : 'mainmenu mainmenu-scroll',
          logo:mylogo
      });
    else
      this.setState({
          menuclass : 'mainmenu',
          logo:mylogolight
      });
  }
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Affix className="header" onChange={affixed => this.affixscroll(affixed)}>
            <Header className="header">
              <MainMenu menuclass={this.state.menuclass} logo={this.state.logo}/>
              
            </Header>
          </Affix>
          <Content className="content">
            <HomeSlider />
            <PriceBox />
            <Banner />
           
          </Content>
          <Footer className="footer">
            <MyFooter />
          </Footer>
        </Layout>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import '../public/assets/css/font-awesome.css'
import MainMenu from './header/MainMenu';
import HomeSlider from './content/HomeSlider';
import { Layout ,Affix} from 'antd';
const { Header, Footer, Content } = Layout;

class App extends Component {
  state = {
    menuclass:'mainmenu',
    logo:'https://www.formaxcredit.co.uk/client/formax/i/logo-formax.svg'
  }
  affixscroll = (affixed)=>{
    if(affixed)
      this.setState({
          menuclass : 'mainmenu mainmenu-scroll',
          logo:'https://www.formaxcredit.co.uk/client/formax/i/logo-formax-subpage.svg'
      });
    else
      this.setState({
          menuclass : 'mainmenu',
          logo:'https://www.formaxcredit.co.uk/client/formax/i/logo-formax.svg'
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
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            v
            Content<br/>
            Content<br/>
            v
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            divv

            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>
            Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>Content<br/>

          </Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
        
      </div>
    );
  }
}

export default App;

import React from 'react';
// import {Tab, Tabs} from 'react-toolbox';
import TorrentItem from '../Torrent/torrent';
import style from './style.scss';
import {List, ListDivider} from 'material-ui/lib/lists';
import {Tab, Tabs} from 'material-ui/lib/tabs';

import DefaultRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

const TorrentList = React.createClass({

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  
  getInitialState () {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
    };
  },

  componentWillMount () {
    this.state = this.state || this.getInitialState();
    let newMuiTheme = this.state.muiTheme;
    newMuiTheme.tabs.selectedTextColor = '#000';
    newMuiTheme.tabs.textColor = 'rgba(0, 0, 0, 0.7)';
  
    this.setState({
      muiTheme: newMuiTheme,
    });
  },
  
  //pass down updated theme to children
  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  render () {
    return (
      <Tabs className={style.mainView} tabItemContainerStyle={{ backgroundColor: '#fff', 
                                                                color: '#000',
                                                                boxShadow: '0px -1px #EEE inset'}}>
        <Tab label='All'>
          <List subheader="Downloading">
            <TorrentItem torrentName="Game.Of.Thrones.Season.05.Complete.1080p" status="downloading" />
          </List>
          <List subheader="Seeding">
            <TorrentItem torrentName="Game.Of.Thrones.Season.04.Complete-720p" status="seeding" />
            <TorrentItem torrentName="Game.Of.Thrones.Season.03.Complete-1080p" status="seeding" />
          </List>
          <List subheader="Done">
            <TorrentItem torrentName="Game.Of.Thrones.Season.02.Complete.720p" status="done" />
            <TorrentItem torrentName="Game.Of.Thrones.Season.01.Complete-1080p" status="done" />
          </List>  
        </Tab>
        <Tab label='Games' ><small>Secondary content</small></Tab>
        <Tab label='Movies' ><small>Disabled content</small></Tab>
        <Tab label='Books' ><small>Fourth content hidden</small></Tab>
        <Tab label='Music'><small>Fifth content</small></Tab>
      </Tabs>
    );
  }
});
//  this.state.muiTheme.tabs.selectedTextColor : this.state.muiTheme.tabs.textColor

export default TorrentList;

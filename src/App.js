import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import { Theme } from './Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchForm from './components/SearchForm';
import './App.css';
import { HomePage } from './HomePage';
import Empty from './components/Empty';
import { formatDate } from './shared/util';

class App extends Component {
  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768) return <HomePage />;
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchForm
          selectedRadio="round-trip"
          onChangeRadio={() => console.log('change trip type')}
          onClickTraveller={() => console.log('Clicked Traveller')}
          totalTravellers="1"
          fromDate={formatDate(new Date())}
          toDate={formatDate(new Date())}
        />
        <Empty />
      </MuiThemeProvider>
    );
  }
}
export default App;

import React from 'react';
import AutoCompleteExampleFilters from './forms/form1'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <AutoCompleteExampleFilters />
    </MuiThemeProvider>
  );
}

export default App;

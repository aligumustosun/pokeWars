import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import { Grid } from 'semantic-ui-react';
import Getter from './Getter.jsx';
import Sender from './Sender.jsx';


const App = () => (
  <div>
    <Grid celled style={{marginTop:'0px'}}>
      <Grid.Column style={{overflowY:'scroll', height:'98vh'}} width={4}>
    <Hello />
      </Grid.Column>
      <Grid.Column width={8}>
        <Sender/>
      </Grid.Column>
    <Grid.Column width={4}>
    </Grid.Column>
    </Grid>

  </div>
);


export default App;

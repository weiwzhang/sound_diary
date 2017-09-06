import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
// import trackCreate from './components/trackCreate';    TODO: migrate component from old repo

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={Login} title="Unlock Page" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.trackCreate()}
          rightTitle="Add"
          key="trackList"
          component={TrackList}
          title="Tracks"
          initial
        />
        // <Scene key="trackCreate" component={TrackCreate} title="Create New Track" />. TODO: migrate component from old repo
      </Scene>
    </Router>
  );
};

export default RouterComponent;

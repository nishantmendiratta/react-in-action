import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MsgComponent from './messageComponent.js';
import VacancySignComponent from './vacancySignComponent.js';
import BannerAd from './bannerAdWithEventsComponent.js';
import EventsExerciseComponent from './eventsExerciseComponent.js';

class App extends Component {
  render() {
    return (
	<div>
		<MsgComponent message="hello" />
		<VacancySignComponent hasvacancy="true" />
		<BannerAd />
		<EventsExerciseComponent />
	</div>
    );
  }
}

export default App;

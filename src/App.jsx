import { Component } from 'react';
import Section from 'components/Section/Section';

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback)" />
      </div>
    );
  }
}

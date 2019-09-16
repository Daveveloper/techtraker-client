import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Container, Header, Icon, Button, Statistic, Grid } from 'semantic-ui-react';
import './css/statistics.css';
import Statistics from './Statistics/Statistics';
import StatisticsBar from './Statistics/StatisticsBar';

class StatisticsContainer extends Component {
  constructor() {
    super();
    this.state ={}
  }

  goBack = () => (this.props.history.goBack());

  render() {
    return (
      <div className='statisticContainer'>

        <div className='backButton'>
          <Button circular icon='arrow left' floated='left' color='black' content='Dashboard' onClick={this.goBack}/>
        </div>

        <div className='header'>
          <Header as='h1' icon textAlign='center'>
            <Icon name='line graph' circular/>
            <Header.Content>Statistics</Header.Content>
            <Header.Subheader>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet!</Header.Subheader>
          </Header>
        </div>

        <div className='numbers'>
          <Statistic size='small'>
            <Statistic.Value>
              <Icon name='code' color='teal'/> 7
            </Statistic.Value>
            <Statistic.Label>
              Programming languages
            </Statistic.Label>
          </Statistic>

          <Statistic size='small'>
            <Statistic.Value>
              <Icon name='box' color='teal'/> 4
            </Statistic.Value>
            <Statistic.Label>
              Frameworks
            </Statistic.Label>
          </Statistic>

          <Statistic size='small'>
            <Statistic.Value>
              <Icon name='cogs' color='teal'/> 8
            </Statistic.Value>
            <Statistic.Label>
              Others
            </Statistic.Label>
          </Statistic>
        </div>

        <div className="frameChart">
          <Container>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column><Statistics/></Grid.Column>
                <Grid.Column><StatisticsBar/></Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

      </div>
    )
  }
}

export default StatisticsContainer;

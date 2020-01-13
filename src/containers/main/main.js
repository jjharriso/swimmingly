import React from 'react';
import {withStyles} from '@material-ui/styles';
import {ButtonGroup, Button, Paper, Tooltip} from '@material-ui/core';

import {styles} from './main.styles';

import data from '../../data/flatFile.example';
import moment from 'moment';

class Main extends React.Component {
    state = {
        filterButtons: [],
        swimlanes: [],
        papers: data || []
    };

    componentDidMount() {
        const colors = [];
        let swimlanes = data.reduce((accum, curr) => {
            const {swimlane} = curr;
            if (!accum.includes(swimlane)) {
                accum.push(swimlane);
            }
            return accum;
        }, []);
        swimlanes = swimlanes.sort();
        const filterButtons = data.reduce((accum, curr) => {
            const {color} = curr;
            if (!colors.includes(color)) {
                accum.push({color, selected: false});
                colors.push(color);
            }
            return accum;
        }, []);
        this.setState({swimlanes, filterButtons});
    }

    handleFilterClick = (index) => {
        const {filterButtons} = this.state;
        const currentlySelectedButton = filterButtons.findIndex(button => button.selected);
        if (currentlySelectedButton >= 0) {
            filterButtons[currentlySelectedButton].selected = false;
        }
        filterButtons[index].selected = true;
        this.setState({filterButtons});
    };

    getMarkers = (swimlane) => {
        const {classes} = this.props;
        const limit = 52;
        let index = 0;
        const markers = [];
        while (index <= limit) {
            const weekNumber = index + 1;
            markers.push(
                <div className={classes.week}>
                    <h3 className={classes.weekLabel}>{`WW${weekNumber}`}</h3>
                        {this.state.papers.reduce((accum, curr) => {
                        if (curr.swimlane === swimlane && weekNumber === moment(curr.placementDate).week()) {
                            accum.push(
                                <Tooltip key={index} title={`${curr.placementDate}: ${curr.comment}`} aria-label={curr.comment} placement="right">
                                    <Paper className={`${classes.paper} ${classes[curr.color]}`} elevation={3}>{curr.name}</Paper>
                                </Tooltip>
                            );
                        }
                        return accum;
                    }, [])}
                </div>
            )
            index++;
        }

        return markers;
    };

    render() {
        const {classes} = this.props;
        const {filterButtons, swimlanes, papers} = this.state;

        return (
            <main role="main" className={classes.root}>
                <ButtonGroup className={classes.filters}>
                    {filterButtons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={() => this.handleFilterClick(index)}
                            variant="contained"
                            color={`${button.selected ? "primary" : "default"}`}
                        >
                            {button.color}
                        </Button>
                    ))}
                </ButtonGroup>
                <section className={classes.swimlanes}>
                    {swimlanes.map((swimlane, index) => (
                        <div key={index} className={classes.swimlane}>
                            <h2 className={classes.label}>{swimlane}</h2>
                            <div className={classes.weeks}>
                                {this.getMarkers(swimlane)}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        )
    }

}

export default withStyles(styles)(Main);
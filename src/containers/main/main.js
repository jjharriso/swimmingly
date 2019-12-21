import React from 'react';
import {withStyles} from '@material-ui/styles';
import {ButtonGroup, Button} from '@material-ui/core';


import {styles} from './main.styles';

import data from '../../data/flatFile.example';

class Main extends React.Component {
    state = {};

    componentDidMount() {
        const colors = [];
        let swimlanes = data.reduce((accum, curr) => {
            const {swimlane} = curr;
            if (!accum.includes(swimlane)) {
                console.log(swimlane);
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

    render() {
        const {classes} = this.props;
        const {filterButtons = [], swimlanes = []} = this.state;

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
                <section className={classes.pool}>
                    {swimlanes.map((swimlane, index) => (
                        <div
                            key={index}
                            className={classes.swimlane}
                        >
                            <h2 className={classes.label}>{swimlane}</h2>
                        </div>
                    ))}
                </section>
            </main>
        )
    }

}

export default withStyles(styles)(Main);
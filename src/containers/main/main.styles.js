export const styles = {
    root: {
        display: "flex",
        flexDirection: "column"
    },

    filters: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "1em"
    },

    pool: {
        display: "flex",
        flex: "1 0 auto",
        flexDirection: "column"
    },

    swimlanes: {
        display: "flex",
        flexDirection: "column",
        flex: "1 0 auto",
        overflow: "scroll"
    },

    swimlane: {
        display: "flex",
        flexDirection: "row",
        flex: "1 0 auto",
        marginBottom: "1em"
    },

    weeks: {
        display: "flex",
        flexDirection: "row",
    },

    week: {
        border: "1px solid black",
        borderRight: "none",
        position: "relative",
        width: "5em",
        display: "flex",
        flexDirection: "column"
    },

    weekLabel: {
        margin: ".2em .1em",
        fontSize: ".8em",
        fontWeight: "normal"
    },

    label: {
        padding: "1em",
    },

    paper: {
        padding: ".2em",
        whiteSpace: "nowrap",
        "&:hover": {
            cursor: "pointer"
        }
    },

    red: {
        backgroundColor: "rgba(255,0,0,1)",
        color: "white"
    },
    yellow: {
        backgroundColor: "rgba(255,255,0,1)"
    },
    blue: {
        backgroundColor: "rgba(0,0,255,1)",
        color: "white"
    },
    purple: {
        backgroundColor: "rgba(128,0,128,1)",
        color: "white"
    }

};
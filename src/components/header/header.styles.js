export const styles = {
    root: {
        backgroundColor: "#282c34",
        display: "flex",
        flexDirection: "row",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "flex-start",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        marginBottom: "1em",
    },

    name: {
        fontSize: "1em",
    },

    logo: {
        pointerEvents: "none",
        width: "3em",
        height: "3em",
        margin: ".1em"
    },


    link: {
        color: "white",
        marginLeft: "1em",
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer"
        }
    }
};
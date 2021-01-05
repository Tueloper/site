import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: 0,
    },
    semiBold: {
        fontWeight: '500',
    },
    hintTextAlt: {
        fontFamily: 'Gothic A1',
        color: theme.palette.text.primary,
        boxShadow: 'none',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.875rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '.975rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    hintText: {
        fontFamily: 'Gothic A1',
        // color: theme.palette.text.secondary,
        boxShadow: 'none',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.875rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '.975rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
    roundedButton: {
        background: 'transparent',
        borderRadius: '32px',
        border: '1.5px solid rgba(49, 45, 44, 0.6)',
        width: '100%',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            padding: '2px 15px',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '4px 24px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '8px 30px',
        },
    },
    submitButton: {
        backgroundColor: '#B11F24',
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '100%',
        textTransform: 'none',
        borderRadius: '32px',
        padding: 0,

        '&:hover': {
            backgroundColor: '#B11F24',
        }
    },
    mainText: {
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.0rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.375rem',
        },
    },
    secondaryText: {
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem',
        },
    },
    regularText: {
        // color: theme.palette.text.secondary,
        fontSize: '0.9375rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.05rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        },

    },
    smallText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.5rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '.6rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '.75rem',
        },
    },
    labelText: {
        color: theme.palette.text.primary,
        textTransform: 'none',

        [theme.breakpoints.down('sm')]: {
            fontSize: '0.75rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '.825rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '.875rem',
        },
    },
    labelTextAlt: {
        color: theme.palette.text.secondary,
        textTransform: 'none',

        [theme.breakpoints.down('sm')]: {
            fontSize: '0.75rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '.825rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '.875rem',
        },
    },
    errorText: {
        display: 'block',
        marginTop: theme.spacing(.5),
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.625rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '.68rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '.75rem',
        },

    },
    errorColor: {
        color: theme.palette.text.error,
    },
    emphasizedText: {
        color: theme.palette.text.hint,
    },
    // textBox: {
    //     borderRadius: '4px',
    //     width: '100%',
    //     border: '1px solid rgba(49, 45, 44, 0.6)',
    //     backgroundColor: 'transparent',
    //     outline: 'none !important',
    //     fontWeight: '500',
    //     fontSize: '1rem',

    //     padding: theme.spacing(3, 3, 5),
    // },
    input: {
        border: 'none',
        backgroundColor: 'transparent',
        height: '100%',
        outline: 'none',
        '&:focus': {
            border: "none",
            backgroundColor: 'transparent'
        },
    },
    inputBox: {
        borderRadius: '4px',
        width: '100%',
        border: '1px solid rgba(49, 45, 44, 0.6)',
        backgroundColor: 'transparent',
        outline: 'none !important',
        height: theme.spacing(6),
        fontWeight: '500',
        fontSize: '1rem',
        padding: theme.spacing(2),

        '&:focus': {
            borderColor: "#F49C00",
            backgroundColor: 'transparent'
        },

        '&:not(:focus):valid': {
            backgroundColor: '#EFECE9',
        },
        '&:disabled': {
            backgroundColor: '#EFECE9',
            color: theme.palette.text.secondary,
        }

    },
    textBox: {
        borderRadius: '4px',
        width: '100%',
        border: '1px solid rgba(49, 45, 44, 0.6)',
        backgroundColor: 'transparent',
        outline: 'none !important',
        lineHeight: '24px',
        letterSspacing: '0em',


        // height: theme.spacing(6),
        padding: theme.spacing(2),
    },

    errorInput: {
        borderColor: '#FF1C1C',
    },
    textPass: {
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '32px',
        fontFamily: 'Gothic A1',
        letterSpacing: '0em'
    },
    dMainText: {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '32px',
    },
    dMainText2: {
        fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '32px',
    },
    largeText: {
        fontSize: '42px',
        lineHeight: '48px',
    },
    dInputBox: {
        borderRadius: '4px',
        width: '100%',
        border: '1px solid rgba(49, 45, 44, 0.6)',
        backgroundColor: 'transparent',
        outline: 'none !important',
        height: theme.spacing(4),
        padding: theme.spacing(4 / 3),


        '&:focus': {
            borderColor: theme.palette.secondary.main,
            backgroundColor: 'transparent'
        },

        '&:not(:focus):valid': {
            backgroundColor: '#EFECE9',
        },

    },
    linedText: {
        width: '40%',
        textAlign: 'center',
        borderBottom: '1px solid #000',
        lineHeight: '0.1em',

        '& > span': {
            background: '#F6EFF0',
            padding: '0 10px',
        },
    },
    selectBox: {
        '&:hover': {
            borderColor: theme.palette.secondary.main,
            backgroundColor: 'transparent'
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    tabBar: {
        transition: "background-color 0.3s",
        transitionTimingFunction: "ease-in",
        borderRadius: "4px",
        backgroundColor: "#ffffff",
        '&:hover': {
            backgroundColor: "#F6EFF0",
        }
    },
    activeTabBar: {
        backgroundColor: "#F6EFF0",
    },

    shadow1: {
        boxShadow: "0px 2px 8px rgba(49, 45, 44, 0.2)",
        borderRadius: "8px",
    },
    text24: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
    },
    text22: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '.9em',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.1em',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.375em',
        },
    },
    simpleButton: {
        backgroundColor: 'white',
        padding: theme.spacing(1.5, 3.5),
        border: '1px solid rgba(90, 86, 85, 0.6)',
        borderRadius: '4px',
        transition: "background-color 0.3s",
        transitionTimingFunction: "ease-out",
        '&:hover': {
            backgroundColor: '#B11F24',
            border: 'none',
            color: '#ffffff',
        },
    },
    text1: {
        fontSize: '1em',
        fontFamily: 'Gothic A1',
    },
    text2: {
        fontSize: '1.5rem',
        fontFamily: 'Gothic A1',
    },
    text3: {
        fontSize: '.875em',
        fontFamily: 'Gothic A1',
        [theme.breakpoints.down("md")]: {
            fontSize: '.7em',
        }
    },
    text7: {
        fontSize: '1.125rem',
        fontFamily: 'Gothic A1',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9375rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.75rem',
        },

    },
    text4: {
        fontSize: '1.5rem',
        fontFamily: 'Gothic A1',
    },
    text6: {
        fontSize: '.75rem',
        fontFamily: 'Gothic A1',
    },
    statusBoxA: {
        backgroundColor: "#D7FFD0",
        textAlign: "center",
        color: "#2AD21B",
        fontWeight: "800",
        lineHeight: "24px",
        borderRadius: '4px',
    },
    statusBoxB: {
        backgroundColor: "#FFF5D0",
        textAlign: "center",
        color: "#D2891B",
        fontWeight: "800",
        lineHeight: "24px",
        borderRadius: '4px',
    },
    statusBoxC: {
        backgroundColor: "#FF2E00",
        textAlign: "center",
        color: "#FFF6F3",
        fontWeight: "800",
        lineHeight: "24px",
        borderRadius: '4px',
    },
    roundBoxA: {
        background: 'rgba(177, 31, 36, 0.1)',
        borderRadius: '24px',
        fontWeight: 500,
        color: theme.palette.text.error,
    },
    ellipse: {
        backgroundColor: '#C4C4C4',
        height: '4px',
        width: '4px',
        borderRadius: '50%',
    },
    activePageItem: {
        backgroundColor: theme.palette.error.main,
        color: 'white',
    },
    imageBox: {
        background: '#FFFFFF',
        border: '0.5px solid rgba(90, 86, 85, 0.6)',
        boxSizing: 'border-box',
        borderRadius: '8px'
    },
    imageUploadBox: {
        background: '#F6EFF0',
        border: '1px dashed rgba(49, 45, 44, 0.6)',
        boxSizing: 'border-box',
        borderRadius: '8px'
    },
    imageButtonBox: {
        background: '#FFFFFF',
        border: '1px solid #B11F24',
        borderRadius: '4px',
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "space-between",
        alignItems: "center",
        color: '#B11F24',
        fontFamily: 'Gothic A1',
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        cursor: 'pointer',
        width: '62%'
    },
    horizontalLine: {
        height: '2px',
        width: '120px',
        margin: ' 0 2px',
        borderWidth: 0,
        color: 'rgba(49, 45, 44, 0.6)',
        backgroundColor: 'rgba(49, 45, 44, 0.6)'
    },
    uploadOverlay: {
        cursor: 'pointer',
        '& > input': {
            display: 'none'
        }
    },
    tableRow: {
        borderBottom: ".8px solid #C4C4C4",
        '&:hover': {
            backgroundColor: '#fafafa',
        },
    },
    buttonBox: {
        cursor: 'pointer',
    },
    deleteButton: {
        cursor: "pointer",
        textAlign: "right",
        display: "inline-block",
        lineHeight: 0,
        // '&:hover>*': {
        //     fill: "#B11F24",
        // },
    },
    deleteIcon: {
        fill: "#5A5655",
        '&:hover': {
            fill: "#B11F24",
        }
    }
}));

export default useStyles;
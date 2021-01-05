import React from 'react';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    CssBaseline,
    Box,
    Grid,
} from '@material-ui/core';

import qs from "qs";

import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles';

import axios from '../../utils/axios';

import {
    SearchIcon,
    BrandSample,
    Illustration,
    ClearIcon,
    BusinessCategoryIcon,
    EnergyCategoryIcon,
    MaintenanceCategoryIcon,
    MarketingCategoryIcon,
    PeopleCategoryIcon,
    LogisticsCategoryIcon,
} from '../../assets/images';

import useStyles from '../../theme/styles';
import setAuthToken from '../../utils/setToken';

const popularCategories = [
    {
        id: 1,
        label: 'Business Services',
        icon: <BusinessCategoryIcon />,
    },
    {
        id: 3,
        label: 'Energy & Fluids',
        icon: <EnergyCategoryIcon />,
    },
    {
        id: 6,
        label: 'Logistics Support',
        icon: <LogisticsCategoryIcon />,
    },
    {
        id: 7,
        label: 'Maintenance',
        icon: <MaintenanceCategoryIcon />,
    },
    {
        id: 8,
        label: 'Marketing & Advertising',
        icon: <MarketingCategoryIcon />,
    },
    {
        id: 11,
        label: 'People',
        icon: <PeopleCategoryIcon />,
    },
]

const { REACT_APP_API_URL } = process.env;

const useSubStyles = makeStyles((theme) => ({
    section1: {
        height: 'calc(100vh - 88px)',
        minHeight: '600px',
        backgroundColor: 'rgba(255,221,221,1)',
        padding: theme.spacing(6, 10),
    },
    categoryBox: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F9F6F6',
        boxShadow: '0px 4px 4px rgba(49, 45, 44, 0.2)',
        borderRadius: '8px',
        transition: "box-shadow 0.3s",
        transitionTimingFunction: "ease-out",
        '&:hover': {
            boxShadow: '0px 8px 8px rgba(49, 45, 44, 0.2)',
        },
    },
    simpleButton: {
        backgroundColor: 'white',
        // display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(1.5, 8),
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
}))

const HomePage = (props) => {
    const classes = useStyles();
    const subClasses = useSubStyles();

    const [term, setTerm] = React.useState("");
    const [vendorResults, setVendorResults] = React.useState([]);
    const [categoryResults, setCategoryResults] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);

    let token = qs.parse(props.location.search, { ignoreQueryPrefix: true }).token;

    if (token) {
        localStorage.setItem("token", token);
        setAuthToken(token);
    }

   
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Grid container justify="center" alignItems="center" className={subClasses.section1}>
                <Grid item xs={6}>
                    <Box fontWeight={900} fontSize="32px">
                        Discover suppliers. Connect with them.
                    </Box>
                    <Box mt={7} p={2} style={{
                        boxShadow: '0px 4px 4px rgba(90, 86, 85, 0.25)',
                        backgroundColor: '#ffffff',
                        position: 'relative',
                    }}>
                        <Box display="flex" alignItems="center" width={1}>
                            <Box lineHeight={0} p={1} mr={2}>
                                <SearchIcon stroke="#5A5655" />
                            </Box>
                            <input
                                name="search"
                                placeholder="Search for a category or supplier..."
                                className={classes.hintText}
                                value={term}
                                onChange={e => {
                                    setTerm(e.target.value)
                                    if (showResults) {
                                        setShowResults(false);
                                    }
                                }}
                                style={{
                                    backgroundColor: 'white',
                                    border: 'none',
                                    outline: 'none',
                                    flex: 1
                                }}
                            />
                            <Box lineHeight={0} mx={2}
                                display={term ? "block" : 'none'}
                                onClick={() => {
                                    setTerm("")
                                    setShowResults(false);
                                }}
                                style={{
                                    cursor: 'pointer'
                                }}
                            >
                                <ClearIcon />
                            </Box>
                            <Box px={3.5} py={1.5}
                                fontWeight={700}
                                color="white"
                                className={classes.text1}
                                onClick={() => handleSearch()}
                                style={{
                                    opacity: term ? 1 : .3,
                                    backgroundColor: '#B11F24',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}>
                                Search
                            </Box>
                        </Box>
                        <Box px={3} width={1} position="absolute" top="100%" left="0"
                            display={showResults ? "block" : 'none'}
                            style={{
                                backgroundColor: '#ffffff',
                                boxShadow: '0px 4px 4px rgba(90, 86, 85, 0.25)',
                                overflow: 'scroll',
                                maxHeight: '192px',
                            }}
                        >
                            {/* <Box mt={2} fontWeight={600} className={classes.labelTextAlt}>
                                Categories
                            </Box>
                            <Box mt={1}>
                                {categoryResults.length > 0 ? categoryResults.map((cat, index) => (
                                    <Box mb={2} fontWeight={800} className={classes.hintText}>{cat.name}</Box>
                                ))
                                    :
                                    <Box mb={2} fontWeight={800} className={classes.text6}>
                                        No categories found
                                    </Box>
                                }
                            </Box> */}
                            <Box mt={2} fontWeight={600} className={classes.labelTextAlt}>
                                Vendors
                            </Box>
                            <Box mt={2}>
                                {vendorResults.length > 0 ? vendorResults.map((vendor, index) => (
                                    <Box key={`vendorResults-${vendor.id}`} mb={2}>
                                        <Link to={"/staff/vendors/" + vendor.id}>
                                            <Box fontWeight={800} color="text.secondary" className={classes.text1}>{vendor.companyName}</Box>
                                        </Link>
                                    </Box>
                                ))
                                    :
                                    <Box mb={2} fontWeight={800} className={classes.text6}>
                                        No vendors found
                                    </Box>
                                }
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Illustration />
                </Grid>
            </Grid>
            <Box py={9} px={13}>
                <Box color="text.primary" fontWeight={700} textAlign="center" className={classes.text24}>Popular Categories</Box>
                <Box my={6}>
                    <Grid container spacing={3}>
                        {popularCategories.map((category, i) => (
                            <Grid key={`brand-item-${i}`} item xs={4}>
                                <Link to={`/staff/categories?cat=${category.id}`}>
                                    <Box px={3} py={5} className={subClasses.categoryBox}>
                                        <Box lineHeight={0}>
                                            {category.icon}
                                        </Box>
                                        <Box
                                            ml={2}
                                            display="inline"
                                            fontWeight={600}
                                            color="text.secondary"
                                            className={classes.hintText}>
                                            {category.label}
                                        </Box>
                                    </Box>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box textAlign="center">
                    <Link to="/staff/categories">
                        <Box display="inline"
                            fontWeight={700}
                            color="text.secondary"
                            className={clsx(subClasses.simpleButton, classes.text1)}>
                            View all
                        </Box>
                    </Link>
                </Box>
            </Box>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    auth: state.Auth,
});

export default connect(mapStateToProps, {})(HomePage);
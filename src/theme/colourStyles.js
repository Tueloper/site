const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isDisabled
                ? '#EFECE9'
                : isSelected
                    ? '#B11F24'
                    : isFocused
                        ? '#EFECE9'
                        : 'null',
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? '#fff'
                        ? 'white'
                        : 'black'
                    : '#B11F24',
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: '#B11F24',
                color: '#fff',
            },
        };
    },
    multiValue: (styles, { data }) => {
        return {
            ...styles,
            backgroundColor: '#B11F24',
            color: '#fff'
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: '#fff',
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: '#fff',
        ':hover': {
            backgroundColor: '#fff',
            color: '#B11F24',
        },
    }),
};

export default colourStyles;
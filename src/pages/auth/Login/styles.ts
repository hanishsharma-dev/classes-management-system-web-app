const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        padding: { xs: 2, sm: 4, md: 6 }, // Padding for different screen sizes
    },
    centerBoxContainer: {
        width: { xs: '80vw', sm: '60vw', md: '40vw' }, // Responsive width
        borderWidth: '1px',
        borderColor: 'black',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: { xs: 6, sm: 8, md: 10 }, // Padding for different screen sizes
    },
    loginLabel: {
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
        color: 'black'
    },
    textField: {
        width: { xs: '70vw', sm: '50vw', md: '30vw' }, // Responsive width
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
        borderColor: 'white'
    },
    forgotPasswordContainer: {
        width: { xs: '70vw', sm: '50vw', md: '30vw' }, // Responsive width
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
        display: 'flex',
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: { xs: '70vw', sm: '50vw', md: '30vw' }, // Responsive width
        marginTop: { xs: '32px', sm: '24px', md: '16px' }
    },
    bottomLineContainer: {
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: { xs: '48px', sm: '40px', md: '32px' },
    },
    dontHaveAnAccount: {
        color: 'black',
        whiteSpace: 'nowrap', // Prevent the text from breaking into multiple lines
        flexShrink: 1, // Allow text to shrink if necessary
        fontSize: '12px'
    },
    link: {
        textUnderlineOffset: '4px',
        marginLeft: '2px',
        whiteSpace: 'nowrap', // Prevent the link from breaking into multiple lines
        flexShrink: 1, // Allow link to shrink if necessary
        fontSize: '12px'
    },
};

export default styles;
const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',  // Make sure the container takes at least full screen height
        width: '100vw',
        backgroundColor: 'black',
        boxSizing: 'border-box',  // Ensure padding and borders are included in the dimensions
        overflowY: 'auto',  // Allow scrolling when necessary
        padding: { xs: 2, sm: 4, md: 6 }, // Padding for different screen sizes
    },
    centerBoxContainer: {
        width: { xs: '90vw', sm: '70vw', md: '50vw' },
        borderWidth: '1px',
        borderColor: 'black',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: { xs: 2, sm: 4, md: 6 }, // Use consistent padding
        boxSizing: 'border-box',  // Ensure padding does not cause overflow
        overflow: 'hidden',
        height: 'auto', // Allow the height to adjust based on content
        maxHeight: '100%', // Prevent the box from exceeding the height of the screen
    },
    loginLabel: {
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
        color: 'black',
    },
    textField: {
        width: { xs: '80vw', sm: '60vw', md: '40vw' },
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
        borderColor: 'white',
    },
    termsAndConditionContainer: {
        width: { xs: '80vw', sm: '60vw', md: '40vw' },
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '2px', // Reduce the gap between checkbox and text
        flexWrap: 'nowrap',
        overflow: 'hidden',
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
    loginButton: {
        width: { xs: '80vw', sm: '60vw', md: '40vw' },
        marginTop: { xs: '32px', sm: '24px', md: '16px' },
    },
    bottomLineContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: { xs: '48px', sm: '40px', md: '32px' },
    },
};

export default styles;

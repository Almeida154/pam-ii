import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#054A91',
    },
    header: {
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 38,
        color: '#183153',
        fontFamily: 'Poppins-Bold',
    },
    search: {
        alignSelf: 'center',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#183153',
        borderRadius: 10,
    },
    containerPicker: {
        alignSelf: 'center',
        backgroundColor: '#183153',
        width: '80%',
        marginBottom: 10,
        height: 50,
        borderRadius: 10
    },
    pickerItem: {
        backgroundColor: 'red',
        color: 'black',
        borderRadius: 100,
    },
    cardsContainer: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 20,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        elevation: 6,
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 8
    },
    titleCard: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#000',
        textTransform: 'uppercase'
    },
    descriptionCard: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000',
        opacity: .6
    },
    tagsCard: {
        paddingLeft: 10,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#254A7E',
    },
    tagsContainer: {
        marginTop: 8,
        flexDirection: 'row'
    },
    containerLoader: {
        alignSelf: 'center',
        height: '100%',
        justifyContent: 'center',
    },
    loadingText: {
        color: '#183153',
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        marginTop: 20
    },
    iconNotFound: {
        alignSelf: 'center',
        marginTop: 180,
    },
    headerCards: {
        opacity: .1,
        fontSize: 30,
        fontFamily: 'Poppins-Light',
        paddingTop: 20,
        marginHorizontal: 25,
    },
    footerCards: {
        height: 22,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFA046'
    }
})
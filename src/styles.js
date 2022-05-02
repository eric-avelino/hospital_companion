import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 500,
        height: 500,
        resizeMode: 'stretch',
    },
    textCadastro: {
        marginTop: '1%',
        marginBottom: '1%',
        fontWeight: 'bold',
        alignText: 'left',
    },
    inputCadastro: {
    	marginTop: '1%',
        marginBottom: '1%',
        borderWidth: 1,
        padding: 10,
        alignText: 'center',
    },
    textTitulo: {
    	fontWeight: 'bold',
	fontSize: 40,
        color: '#1aa',
    },
    textLink: {
        color: '#888',
    },
    funcaoContainer: {
        flex: 1,
    },
    funcaoParent: {
        flex: 1,
        flexDirection: "row",
        marginTop: '5%',
        justifyContent: "space-around",
    },
    funcaoButton: {
        backgroundColor: "#ddd",
        padding: 18,
        borderWidth: 5,
        alignItems: 'center',
        padding: 10,
        width: "80%",
        height: 50,
    },
  });
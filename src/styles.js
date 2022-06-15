import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eefffd',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        fontFamily: "Arial"
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
    item: {
        width: "300px",
        color: "white",
        marginTop: "10px",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10
    },
    sidebarHeader: {
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    sidebar: {
        backgroundColor: "#4ABDAE",
        fontFamily: "Arial",
        textAlign: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    profilePic: {
        width: 100,
        height: 100,
        backgroundColor: "#6dd",
        borderRadius: "50%"
    },
    picFeed: {
        width: 50,
        height: 50
    },
    feedPreview: {
        width: 200,
        height: 100,
        backgroundColor: "#6dd"
    },
    textName: {
        fontSize: 20
    },
    textFuncao: {
        fontSize: 15,
        color: "#6da",
        fontWeight: "normal"
    },
    feedButtons: {
        display: "flex",
        backgroundColor: "#eefffd",
        flexDirection: "row",
    },
    caixaRecom: {
        borderStyle: "solid",
        borderColor: "black",
        width: "100%",
        borderWidth: 3
    },
    caixaRecomCabecalho: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 5
    },
    feedHeaderInfo: {
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    appTela: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        padding: "5px"
    },
    recButton: {
        backgroundColor: "eefffd",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    agendarButton: {
        backgroundColor: "#4ABDAE",
        marginHorizontal: "10%",
        alignItems: "center",
        color: "white",
        width: 500,
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 30
    }
  });
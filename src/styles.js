import { StyleSheet } from 'react-native';

const palette = {
    background: '#eefffd',
    borders: "#CCC",
}

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        // fontFamily: "Arial"
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
        alignItems: 'flex-start',
    },
    inputCadastro: {
    	marginTop: '1%',
        marginBottom: '1%',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
    },
    textTitulo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#1aa',
    },
    textLink: {
        color: '#888',
        marginBottom: 20
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
        borderWidth: 5,
        justifyContent: 'center',
        marginHorizontal: 5,
        alignItems: 'center',
        width: "30%",
        height: 70,
    },
    navItem: {
        width: "100%",
        color: "white",
        fontWeight: "bold",
        marginTop: 5,
        paddingTop: 20,
        // paddingBottom: 20,
        // paddingLeft: 10
    },
    navButtons: {
        
    },
    sidebarHeader: {
        color: "white",
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 10,
    },
    sidebar: {
        backgroundColor: "#4ABDAE",
        width: "40%",
        // fontFamily: "Arial",
        textAlign: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    profilePic: {
        width: 100,
        height: 100,
        backgroundColor: "#6dd",
        borderRadius: 50
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
        fontSize: 15,
        width: "100%"
    },
    textFuncao: {
        fontSize: 10,
        color: "#6da",
        fontWeight: "normal",
        width: "100%"
    },
    feedButtons: {
        display: "flex",
        backgroundColor: palette.background,
        width: "95%",
        alignSelf: "flex-start",
        flexDirection: "row",
    },
    caixaRecom: {
        borderStyle: "solid",
        borderBottomWidth: 3,
        borderColor: palette.borders,
        width: "100%",
        paddingLeft: 5
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
        // padding: 5
    },
    recButton: {
        backgroundColor: palette.background,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    agendarButton: {
        backgroundColor: "#4ABDAE",
        marginHorizontal: "10%",
        marginTop: 5,
        alignItems: "center",
        width: '35%',
        alignSelf: "center",
        paddingHorizontal: 3,
        paddingVertical: 25
    },
    map : {
        width: 300,
        height: 300
    },
    dadosPessoais: {
        display: "flex",
        borderBottomColor: palette.borders,
        borderBottomWidth: 2,
        borderStyle: "solid",
        flexDirection: "column"
    },
  });
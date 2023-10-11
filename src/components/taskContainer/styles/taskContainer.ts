import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        maxWidth: '90%',
        minHeight: 46,
        backgroundColor: 'whitesmoke',
        marginTop: 5,
        marginRight: '5%',
        marginBottom: 10,
        marginLeft: '5%',
        borderRadius:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:0,
        paddingRight:10
    },
    containerCheckBox: {
        flexDirection:'row',
        alignItems:'center'

    },
    taskDone:{
        textDecorationLine: 'line-through',
        color:'green'
        
    }
}); 

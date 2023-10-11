import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'auto',
        height:130,
        backgroundColor:'rgb(131, 87, 229)',
        padding:20,
        marginBottom: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative'
        
    },
    logo:{
        color:'white',
        fontSize:26,
        fontWeight:'600'
    },
    taskNumber:{
        color:'white',
        fontSize:16,
        fontWeight:'400'

    },
    highlightedText:{
        fontWeight:'600'

    },
   

})
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        height:'auto',
        flexDirection:'column',
        backgroundColor:'rgb(229, 229, 229)',
        padding:0,
        margin:0
        

    },
    inputTask:{
        width:'auto',
        height:55,
        marginLeft:'10%',
        marginRight:'10%',
        backgroundColor:'white',
        paddingLeft:10,
        borderRadius:6,
        flex:1
        
    },
    inputContainer:{
        width:'100%',
        height:'auto',
        position:'absolute',
        top: 100,
        flexDirection:'row'

    },
    inputIcon:{ 
        width:50,
        height:55,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
        position:'relative',
        right:50,
        borderLeftWidth: 1.5,
        borderLeftColor: 'rgb(229, 229, 229)',
        paddingVertical: 10,
        
    },
    taskList:{
        marginTop:30
    },

})
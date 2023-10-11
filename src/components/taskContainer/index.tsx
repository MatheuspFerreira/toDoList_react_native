import React, { useState } from "react";
import { View,Text } from "react-native";
import {styles} from './styles/taskContainer'
import { CheckBox } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";
import { TaskContainerProps } from "./interface/TaskContainerProps";





export function TaskContainer ({ task, onDelete }:TaskContainerProps) {
    const [checked, setChecked]= useState<boolean>(false);
    const taskDone = checked ? styles.taskDone : null;

    return(
        <View style={styles.container}>
            <View style={styles.containerCheckBox}>
                <CheckBox
                    size={18} 
                    checked={checked}
                    onPress={()=>setChecked(current => !current)}
                
                />
                <Text style={taskDone}>{task.description}</Text>

            </View>
           
            <AntIcon 
                name="delete" 
                color='grey'
                size={18} 
                onPress={()=>onDelete(task.id)}
                
            />
            
        </View>
    )
}
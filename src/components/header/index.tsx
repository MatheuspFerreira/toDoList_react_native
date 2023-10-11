import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles/header";

type HeaderProps = {
  tasksLength:number
  
}

export function Header({ tasksLength }:HeaderProps) {
    
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>
            To.Do
        </Text>
        <Text style={styles.taskNumber}>
            Você tem<Text style={styles.highlightedText}> {tasksLength} tarefas </Text>
            
        </Text>
        

    </View>
    
  )
}

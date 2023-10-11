import React, { useMemo, useState } from "react";
import { Header } from "../../components/header";
import { InputTask } from "../../components/input";
import { Alert, FlatList, View } from "react-native";
import { styles } from "./styles/homeStyles";
import AntIcon from "react-native-vector-icons/AntDesign";
import { TaskContainer } from "../../components/taskContainer";
import { ITask } from "../../components/taskContainer/interface/TaskContainerProps";
import { StatusBar } from "react-native";

export function Home() {
  const [description, setDescription] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, description: "Lavar a louça" },
    { id: 2, description: "Aspirar a sala" },
    { id: 3, description: "Limpar o banheiro" },
    { id: 4, description: "Fazer compras de supermercado" },
    { id: 5, description: "Estudar matemática" },
    { id: 6, description: "Ler um livro para a aula de literatura" },
    { id: 7, description: "Resolver exercícios de física" },
    { id: 8, description: "Preparar apresentação de história" },
    { id: 9, description: "Fazer anotações de química" },
    { id: 10, description: "Estudar para o exame de biologia" },
    { id: 11, description: "Revisar o trabalho de história" },
    { id: 12, description: "Escrever um ensaio para a aula de inglês" },
  ]);
  const filtredTasks = useMemo(() => {
    return tasks.filter((current) => description.includes(current.description));
  }, [description, tasks]);

  const handleDelete = (id: number) => {
    const filtredTask = tasks.filter((current) => current.id !== id);
    setTasks(filtredTask);
  };

  const handleNewTask = () => {
    if (!description) {
      Alert.alert("Atenção", "Digite um nome para a tarefa.", [
        {
          text: "Ok",
        },
      ]);

      return;
    }

    if (filtredTasks.length !== 0) {
      Alert.alert("Atenção", "Você já adicionou essa tarefa.", [
        {
          text: "Ok",
        },
      ]);
      return;
    }

    setTasks((current) => [
      ...current,
      { description, id: current.length + 2 },
    ]);
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Header tasksLength={tasks.length} />
      <View style={styles.inputContainer}>
        <InputTask
          style={styles.inputTask}
          placeholder="Adicione uma tarefa"
          value={description}
          onChangeText={(e) => setDescription(e)}
        />
        <View style={styles.inputIcon}>
          <AntIcon
            name="right"
            color="grey"
            size={30}
            onPress={handleNewTask}
          />
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => `${item.id}-${item.description}`}
        renderItem={({ item }) => (
          <TaskContainer task={item} onDelete={handleDelete} />
        )}
        style={styles.taskList}
      />
    </View>
  );
}

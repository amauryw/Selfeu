import React, { useEffect } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import theme from "../../theme";
import { Task } from "./components/Task";
import { useTaskStore } from "../../module/task";

export const Tasks = props => {
  const { tasks, loadTasks, isLoading } = useTaskStore();

  useEffect(() => {
    loadTasks();
  }, []);

  const navToTask = task => {
    props.navigation.navigate("taskDescription", {
      task
    });
  };

  return (
    <Container>
      <TasksContainer>
        {isLoading && <Loader color={theme.lightDarkBackground} size={40} />}
        {tasks.map(task => (
          <Task
            label={task.name}
            key={task.id}
            onPress={() => navToTask(task)}
          />
        ))}
      </TasksContainer>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.darkBackground};
`;

const TasksContainer = styled.View`
  flex: 1;
  align-items: center;
`;
const Loader = styled(ActivityIndicator)`
  flex: 1;
`;

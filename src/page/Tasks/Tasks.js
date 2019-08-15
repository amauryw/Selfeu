import React from "react";
import styled from "styled-components";
import { getAvailableTasks } from "../../api/api";
import theme from "../../theme";
import { Task } from "./components/Task";

export const Tasks = props => {
  const tasks = getAvailableTasks();

  const navToTask = task => {
    props.navigation.navigate("addNewTask", {
      task
    });
  };

  return (
    <Container>
      <TasksContainer>
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

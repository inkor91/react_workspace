import { TodoInsert } from "./components/TodoInsert";
import { TodoList } from "./components/TodoList";
import { TodoTemplate } from "./components/TodoTemplate";

export const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  );
};


export default App;

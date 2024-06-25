import axios, { AxiosResponse } from "axios";

const baseurl: string = "http://locahost:5173";
//getTodos to get data from the server
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseurl + "todos"
    );

    return todos;
  } catch (error) {
    throw new Error("error");
  }
};
//add Todo fn
export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    //create aN object of Todos || You can also create the object inside the axios
    //omit the id because mongodb when generate a id for us
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    //variable to return the todo added
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseurl + "add-todo",
      todo
    );
    return saveTodo;
  } catch (error) {
    throw new Error("error");
  }
};
//update todos
export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    //object for updating todo
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseurl}/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw new Error("error");
  }
};
//delete Todo
export const deleteTodo = async (
  _id: string 

): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseurl}/delete-todo/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    throw new Error("error");
  }
};

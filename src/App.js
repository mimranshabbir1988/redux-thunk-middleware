import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import UsersData from "./components/UsersData";
import { useEffect } from "react";
import userAction from "./redux/action";

function App() {
  const dispatch = useDispatch();
  let userslist = useSelector((state) => state.userList);
  const { loading, users, error } = userslist;
  console.log(userslist);

  useEffect(()=>{
    dispatch(userAction())
  },[dispatch])

  return (
    <div className="App">
      <h1 className="text-primary text-center fs-1 my-5 fw-bolder">React Redux with Thunk Middleware</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>Error in Data</h1>
      ) : (
        <UsersData data={users} />
      )}
    </div>
  );
}

export default App;

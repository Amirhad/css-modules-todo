import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/actions";
import { Routes,Route } from "react-router-dom";
import { Todos } from "./todo/Todos";
import { Users } from "./user/users/Users";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <Routes>
      <Route path="/:id?" element={
          <div className="container">
          <div className="row">
            <div className="col-3">
              <Users />
            </div>
            <div className="col-7"><Todos /></div>
          </div>
        </div>
      }/>
    
     
    </Routes>
  );
};

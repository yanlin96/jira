import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject } from "../../util";
import * as qs from "qs";
import { useDebounce } from "../../hooks";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const deboucedParam = useDebounce(param, 2000);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(deboucedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        const projects = await response.json();
        setList(projects);
      }
    });
  }, [deboucedParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        const users = await response.json();
        setUsers(users);
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

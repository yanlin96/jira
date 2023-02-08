import { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const login = (params: { username: string; password: string }) => {
    return fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  // HTMLFormElement extends Element:类型兼容，鸭子，面向接口编程
  // 鸭子类型
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    console.log(evt);
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username"></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id="password"></input>
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
    </form>
  );
};

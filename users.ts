export interface IUser {
  id: string;
  name: string;
}

const users: { [id: string]: IUser } = {};

export const getUsers = async () => Promise.resolve(users);

export const addUser = async (name = "Foo") => {
  const newUser: IUser = {
    id: String(Date.now()),
    name
  };

  users[newUser.id] = newUser;

  return newUser;
};

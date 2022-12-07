import { Users } from '../../../../src/components/usersComponent/users/models/users.model';

export const usersStub = (): Users => {
  return <Users>{
    id: expect.any(String),
    email: expect.any(String),
    password: expect.any(String),
    avatar: expect.any(String),
    roles: expect.any(Array),
    usersDetail: null,
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  };
};

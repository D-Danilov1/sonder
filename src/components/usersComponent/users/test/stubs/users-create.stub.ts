import { CreateUsersDto } from '../../dto/create-users.dto';

export const usersCreateStub = (): CreateUsersDto => {
  return <CreateUsersDto>{
    email: 'test@example.com',
    password: 'Qwerty12345!',
  };
};

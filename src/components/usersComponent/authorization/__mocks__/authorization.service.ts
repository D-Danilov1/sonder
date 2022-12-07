import { usersStub } from '../../users/test/stubs/users.stub';
import { tokenStub } from '../test/stubs/token.stub';

export const AuthorizationService = jest.fn().mockReturnValue({
  authorization: jest.fn().mockResolvedValue(tokenStub()),
  registration: jest.fn().mockReturnValue(usersStub()),
});

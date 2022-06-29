import {FakeMongo} from "../helpers";
import {User, UserModelClass, UserStatus, UserType} from "../../src";

const mongo = new FakeMongo();


beforeAll(async () => await mongo.connect());

afterAll(async () => await mongo.disconnect());

const fakeUser: UserModelClass = {
  fullName: 'Andreas Iniesta',
  status: UserStatus.ACTIVE,
  email: 'iniesta@gmail.com',
  password: 'queerly',
  phone: '998912345678',
  type: UserType.STUDENT,
  twoStepAuthorizationEnabled: true,
  tokenExpireMinutes: 30,
}

describe('Test UserEntity', () => {
  test('UserEntity test 1', async () => {
    const user = new User();
    const createdNewUser = await user
      .buildFullName(fakeUser.fullName)
      .buildStatus(fakeUser.status)
      .buildPhone(fakeUser.phone)
      .buildEmail(fakeUser.email)
      .buildPassword(fakeUser.password)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)

    expect(createdNewUser.getFullName()).toEqual(fakeUser.fullName);
    expect(createdNewUser.getEmail()).toEqual(fakeUser.email);
    expect(createdNewUser.getPhone()).toEqual(fakeUser.phone);
    expect(createdNewUser.getTwoStepAuthorizationEnabled()).toEqual(fakeUser.twoStepAuthorizationEnabled);

  });

  test('UserEntity test 2', async () => {
    const createdNewUser = await new User()
      .buildFullName(fakeUser.fullName)
      .buildStatus(fakeUser.status)
      .buildPhone(fakeUser.phone)
      .buildEmail(fakeUser.email)
      .buildPassword(fakeUser.password)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)

    const NEW_PHONE = '998901923456';
    const NEW_PASSWORD = 'new_password_pattern';
    let updatedUser = await new User()
        .buildId(createdNewUser.getId())
        .buildPhone(NEW_PHONE);
    expect(updatedUser.getPhone()).toEqual(NEW_PHONE);
    expect(updatedUser.getPhone()).not.toEqual(fakeUser.phone);

    await updatedUser.buildPassword(NEW_PASSWORD);
    expect(updatedUser.getPassword()).not.toEqual(fakeUser.password);
  });
});

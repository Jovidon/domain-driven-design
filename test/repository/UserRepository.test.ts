import {FakeMongo} from "../helpers";
import {Repository, RequirementError, User, UserModelClass, UserStatus, UserType,} from "../../src";
import {Types} from "mongoose";

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

describe('UserRepository test', () => {
  test('Create user', async () => {
    const userRepository = Repository.User();

    const userEntity = new User()
      .buildFullName(fakeUser.fullName)
      .buildPhone(fakeUser.phone)
      .buildStatus(fakeUser.status)
      .buildEmail(fakeUser.email)
      .buildType(fakeUser.type)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)
      .buildPassword(fakeUser.password);

    const createdUser = await userRepository.create(userEntity);
    expect(createdUser).toBeInstanceOf(User);
    expect(createdUser.getFullName()).toEqual(fakeUser.fullName)
    expect(createdUser.getPhone()).toEqual(fakeUser.phone)
    expect(createdUser.getEmail()).toEqual(fakeUser.email)
  });

  test('Create user from entity', async () => {
    const userRepository = Repository.User();
    const user: User = new User()
      .buildId(new Types.ObjectId())
      .buildPassword(fakeUser.password)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)
      .buildStatus(fakeUser.status)

    let hasError: boolean = false;
    try {
      await userRepository.create(user);
    } catch (e) {
      // Should throw error during user creation due to lack of user data;
      hasError = true;
      expect(1).toEqual(1);
      expect(e).toBeInstanceOf(RequirementError);
      expect(e.code).toEqual(1000)
    }
    expect(hasError).toBeTruthy();
  });

  test('Update user', async () => {
    const userRepository = Repository.User();
    const userEntity = new User()
      .buildFullName(fakeUser.fullName)
      .buildPhone(fakeUser.phone)
      .buildStatus(fakeUser.status)
      .buildEmail(fakeUser.email)
      .buildType(fakeUser.type)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)
      .buildPassword(fakeUser.password);

    const createdUser = await userRepository.create(userEntity);

    const PHONE = "993312312351";
    const _user: User = await userRepository.getById(createdUser.getId())
    _user.buildPhone(PHONE);
    const updatedUser = await userRepository.update(_user);

    expect(updatedUser.getPhone()).toEqual(PHONE);
    expect(updatedUser.getPhone()).not.toEqual(fakeUser.phone);
  });

  test('Get user', async () => {
    const userRepository = Repository.User();

    const userEntity = new User()
      .buildFullName(fakeUser.fullName)
      .buildPhone(fakeUser.phone)
      .buildStatus(fakeUser.status)
      .buildType(fakeUser.type)
      .buildEmail(fakeUser.email)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)
      .buildPassword(fakeUser.password).convertToEntity(fakeUser);

    const createdUser = await userRepository.create(userEntity);
    const syncedUserById = await userRepository.getById(createdUser.getId());

    expect(syncedUserById.getFullName()).toEqual(createdUser.getFullName());
    expect(syncedUserById.getPhone()).toEqual(createdUser.getPhone());

    const syncedUserByEmail = await userRepository.getByEmail(fakeUser.email);

    expect(syncedUserByEmail.getFullName()).toEqual(fakeUser.fullName);
    expect(syncedUserByEmail.getPhone()).toEqual(fakeUser.phone);
  });

  test('Get all users', async () => {
    const userRepository = Repository.User();

    const userEntity = new User()
      .buildFullName(fakeUser.fullName)
      .buildPhone(fakeUser.phone)
      .buildStatus(fakeUser.status)
      .buildType(fakeUser.type)
      .buildTwoStepAuthorizationEnabled(fakeUser.twoStepAuthorizationEnabled)
      .buildTokenExpireMinutes(fakeUser.tokenExpireMinutes)
      .buildPassword(fakeUser.password);

    await userRepository.create(userEntity);
    const newUsers = await userRepository.getAll();
    expect(newUsers[0]).toBeInstanceOf(User);
  });

})

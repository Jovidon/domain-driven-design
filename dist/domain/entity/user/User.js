"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    buildId(id) {
        this._id = id;
        return this;
    }
    buildFullName(fullName) {
        this._fullName = fullName;
        return this;
    }
    buildEmail(email) {
        this._email = email;
        return this;
    }
    buildPassword(password) {
        this._password = password;
        return this;
    }
    buildTwoStepAuthorizationEnabled(twoStepAuthorizationEnabled) {
        this._twoStepAuthorizationEnabled = twoStepAuthorizationEnabled;
        return this;
    }
    buildPhone(phone) {
        this._phone = phone;
        return this;
    }
    buildTokenExpireMinutes(tokenExpireMinutes) {
        this._tokenExpireMinutes = tokenExpireMinutes;
        return this;
    }
    buildStatus(status) {
        this._status = status;
        return this;
    }
    buildType(type) {
        this._type = type;
        return this;
    }
    getId() {
        return this._id;
    }
    getFullName() {
        return this._fullName;
    }
    getEmail() {
        return this._email;
    }
    getPassword() {
        return this._password;
    }
    getTwoStepAuthorizationEnabled() {
        return this._twoStepAuthorizationEnabled;
    }
    getPhone() {
        return this._phone;
    }
    getTokenExpireMinutes() {
        return this._tokenExpireMinutes;
    }
    getStatus() {
        return this._status;
    }
    getType() {
        return this._type;
    }
    convertToEntity(user) {
        if (!user)
            return null;
        this.buildId(user._id)
            .buildEmail(user.email)
            .buildFullName(user.fullName)
            .buildPassword(user.password)
            .buildPhone(user.phone)
            .buildStatus(user.status)
            .buildType(user.type)
            .buildTwoStepAuthorizationEnabled(user.twoStepAuthorizationEnabled)
            .buildTokenExpireMinutes(user.tokenExpireMinutes);
        return this;
    }
    convertToModelClass() {
        return this
            ? {
                _id: this.getId(),
                status: this.getStatus(),
                email: this.getEmail(),
                fullName: this.getFullName(),
                password: this.getPassword(),
                phone: this.getPhone(),
                type: this.getType(),
                tokenExpireMinutes: this.getTokenExpireMinutes(),
                twoStepAuthorizationEnabled: this.getTwoStepAuthorizationEnabled(),
            }
            : null;
    }
}
exports.User = User;

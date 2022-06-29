"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partner = void 0;
class Partner {
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
    buildTokenExpireMinutes(tokenExpireMinutes) {
        this._tokenExpireMinutes = tokenExpireMinutes;
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
    getTokenExpireMinutes() {
        return this._tokenExpireMinutes;
    }
    convertToEntity(partner) {
        if (!partner)
            return null;
        this.buildId(partner._id)
            .buildEmail(partner.email)
            .buildFullName(partner.fullName)
            .buildPassword(partner.password)
            .buildTokenExpireMinutes(partner.tokenExpireMinutes);
        return this;
    }
    convertToModelClass() {
        return this
            ? {
                _id: this.getId(),
                fullName: this.getFullName(),
                email: this.getEmail(),
                password: this.getPassword(),
                tokenExpireMinutes: this.getTokenExpireMinutes(),
            }
            : null;
    }
}
exports.Partner = Partner;

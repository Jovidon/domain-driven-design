"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
class Session {
    buildId(id) {
        this._id = id;
        return this;
    }
    buildOwnerId(ownerId) {
        this._ownerId = ownerId;
        return this;
    }
    buildType(type) {
        this._type = type;
        return this;
    }
    buildAccessToken(accessToken) {
        this._accessToken = accessToken;
        return this;
    }
    buildUseragent(useragent) {
        this._useragent = useragent;
        return this;
    }
    buildExpires(expires) {
        this._expires = expires;
        return this;
    }
    buildStatus(status) {
        this._status = status;
        return this;
    }
    buildUsedAt(usedAt) {
        this._usedAt = usedAt;
        return this;
    }
    buildExpiresAt(expiresAt) {
        this._expiresAt = expiresAt;
        return this;
    }
    buildUpdatedAt(updatedAt) {
        this._updatedAt = updatedAt;
        return this;
    }
    buildCreatedAt(createdAt) {
        this._createdAt = createdAt;
        return this;
    }
    getOwnerId() {
        return this._ownerId;
    }
    getType() {
        return this._type;
    }
    getAccessToken() {
        return this._accessToken;
    }
    getUseragent() {
        return this._useragent;
    }
    getExpires() {
        return this._expires;
    }
    getStatus() {
        return this._status;
    }
    getId() {
        return this._id;
    }
    getUsedAt() {
        return this._usedAt;
    }
    getExpiresAt() {
        return this._expiresAt;
    }
    getCreatedAt() {
        return this._createdAt;
    }
    getUpdatedAt() {
        return this._updatedAt;
    }
    convertToEntity(session) {
        return session
            ? this.buildId(session._id)
                .buildCreatedAt(session.createdAt)
                .buildUpdatedAt(session.updatedAt)
                .buildOwnerId(session.ownerId)
                .buildType(session.type)
                .buildAccessToken(session.accessToken)
                .buildUseragent(session.useragent)
                .buildExpires(session.expires)
                .buildUsedAt(session.usedAt)
                .buildExpiresAt(session.expiresAt)
                .buildStatus(session.status)
            : null;
    }
    convertToModelClass() {
        return this
            ? {
                _id: this.getId(),
                accessToken: this.getAccessToken(),
                status: this.getStatus(),
                type: this.getType(),
                expires: this.getExpires(),
                expiresAt: this.getExpiresAt(),
                ownerId: this.getOwnerId(),
                usedAt: this.getUsedAt(),
                useragent: this.getUseragent(),
            }
            : null;
    }
}
exports.Session = Session;

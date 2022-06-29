export interface IBaseEntity<T, K> {
    convertToEntity(arg: K): T;
    convertToModelClass(): K;
}

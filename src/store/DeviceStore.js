import { makeAutoObservable } from "mobx";
import devices from './devices.json';
import types from './types.json';
import brands from './brands.json';

export default class DeviceStore {
    constructor() {
        this._types = types;
        this._brands = brands;
        this._devices = devices;
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
    // Это не используется, нашли с помощью CRLT+F. Подумать, нужны ли
    // setTypes(types) {
    //     this._types = types;
    // }
    // setBrands(brands) {
    //     this._brands = brands;
    // }
    // setDevices(devices) {
    //     this._devices = devices;
    // }
    addBrand(brand) {
        this._brands.push(brand);
    }
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
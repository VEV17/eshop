import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name:'Смартфоны'}, 
            {id: 2, name:'Роутеры'}, 
            {id: 3, name:'Мониторы'}, 
            {id: 4, name:'Телевизоры'}, 
        ];
        this._brands = [
            {id: 1, name:'Samsung'}, 
            {id: 2, name:'Telefunket'}, 
            {id: 3, name:'TP-Link'}, 
            {id: 4, name:'Xiaomi'}, 
        ];
        this._devices = [
            {id: 1, name:'Redmi Note 10Pro', price:20300, rating:4.8, img:'' }, 
            {id: 2, name:'Galaxy 5', price:21200, rating:4.8, img:'' }, 
            {id: 3, name:'SmartTV Telefunken 52400 4K4500', price:35200, rating:4.4, img:'' }, 
            {id: 4, name:'TPLink 100/4g-Pro', price:2830, rating:4.9, img:'' }, 
            {id: 5, name:'TPLiink 100/4ap', price:1900, rating:4.1, img:'' }, 
            {id: 6, name:'Galaxy 6 Pro', price:25000, rating:4.9, img:'' }, 
            {id: 7, name:'Apple 4', price:120000, rating:3.9, img:'' }, 
            {id: 8, name:'Apple 5', price:200000, rating:3.4, img:'' },
            {id: 9, name:'Apple 6', price:220000, rating:3.2, img:'' }, 
            {id:10, name:'Apple 7', price:240000, rating:3.1, img:'' },
        ];
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
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
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
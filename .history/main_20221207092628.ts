import {GirlFriend} from './model/GirlFriend'
import { GfManager } from './service/GFManager'

let input = require('readline-sync');
let gFManager = new GfManager;

function main() {
    let choice = -1;
    do {
        console.log(`---------------------------Menu-----------------------------
        1. Hiển thị danh sách
        2. Tìm kiếm theo tên gần đúng
        3. Thêm ny mới
        0. Thoát`);
        choice = input.question(`Enter choice:`);
        switch (choice) {
            case 1:
                showALlGf();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    } while (choice !== 0)
}

function display(arr: GirlFriend[]) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${i+1}, ${i.toString()}`;
    }
    return str;
}

function showALlGf() {
    let choice = -1;
    if (gFManager)
    do {
        choice = input.question(`Enter choice: ');

    } while (choice !== 0);
}
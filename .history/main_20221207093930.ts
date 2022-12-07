import {GirlFriend} from './model/GirlFriend'
import { GfManager } from './service/GFManager'

let input = require('readline-sync');
let gFManager = new GfManager;
let listZodiac = ['Bạch Dương', 'Kim Ngưu', 'Song Tử', 'Cự Giải', 'Sư Tử'];

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
                searchByName();
                break;
            case 3:
                addGf();
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
    if (gFManager.showALl().length <= 0) {
        console.log(`Không có người yêu`);
    }
    else {
        display(gFManager.showALl());
    }
}

function searchByName() {
    let name = input.question(`Enter name: `);
    display(gFManager.findByNameContaining(name));
}

function addGf() {
    let name = input.question(`Enter name: `);
    let choice = -1;
    do {
        console.log(`---------Chọn cung hoàng đạo--------
        1. Bạch Dương
        2. Kim Ngưu
        3. Song Tử
        4. Cự Giải
        5. Sư Tử
        0. Thoát`);
        if (choice === 0) {
            break;
        }
        else {
            let zodiac = listZodiac[choice-1];
        }
    } while (choice !== 0);
    let homeTown = input.question(`Enter homeTown: `);
    let year = input.question
}
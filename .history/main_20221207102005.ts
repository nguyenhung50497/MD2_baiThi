import {GirlFriend} from './model/GirlFriend'
import { GfManager } from './service/GFManager'

let input = require('readline-sync');
let gFManager = new GfManager;
let listZodiac = ['Bạch Dương', 'Kim Ngưu', 'Song Tử', 'Cự Giải', 'Sư Tử'];

let ny1 = new GirlFriend(1, 'Han', 'Nam Định', 'Bạch Dương', 1997, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
let ny2 = new GirlFriend(2, 'Thuong', 'Nam Định', 'Bạch Dương', 1997, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
let ny3 = new GirlFriend(3, 'Linh', 'Nam Định', 'Bạch Dương', 1997, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
let ny4 = new GirlFriend(4, 'Hoa', 'Nam Định', 'Bạch Dương', 1997, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');

gFManager.add(ny1);
gFManager.add(ny2);
gFManager.add(ny3);
gFManager.add(ny4);

main();
function main() {
    let choice = -1;
    do {
        console.log(`---------------------------Menu-----------------------------
        1. Hiển thị danh sách
        2. Tìm kiếm theo tên gần đúng
        3. Thêm ny mới
        4. Xóa ny cũ
        5. Sửa
        0. Thoát`);
        choice = +input.question(`Enter choice: `);
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
                deleteGF();
                break;
            case 5:
                editGF();
                break;
        }
    } while (choice !== 0);
}



function display(arr: GirlFriend[]) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${i+1}, ${arr[i].toString()}\n`;
    }
    return str;
}

function showALlGf() {
    if (gFManager.showALl().length <= 0) {
        console.log(`Không có người yêu`);
    }
    else {
        console.log(display(gFManager.showALl()));
    }
}

function searchByName() {
    let name = input.question(`Enter name: `);
    console.log(display(gFManager.findByNameContaining(name)));
}

function addGf() {
    let id = gFManager.showALl().length;
    let flag = true;
    let name = '';
    do {
        name = input.question(`Enter name: `);
        if (name.length > 15 || name.length < 1) {
            console.log(`--------Yêu cầu nhập lại-----------`);
            flag = false;
        }
        else {
            flag = true;
        }
    } while (flag !== true);
    let choice = -1;
    let zodiac = '';
    console.log(`---------Chọn cung hoàng đạo--------
    1. Bạch Dương
    2. Kim Ngưu
    3. Song Tử
    4. Cự Giải
    5. Sư Tử
    0. Thoát`);
    choice = +input.question(`Enter choice: `);
    zodiac = listZodiac[choice-1];
    let homeTown = '';
    do {
        homeTown = input.question(`Enter homeTown: `);
        if (name.length > 15 || name.length < 1) {
            console.log(`--------Yêu cầu nhập lại-----------`);
            flag = false;
        }
        else {
            flag = true;
        }
    } while (flag !== true);
    let year: number;
    do {
        year = +input.question(`Enter year: `);
        if (name.length <= 0) {
            console.log(`--------Yêu cầu nhập lại-----------`);
            flag = false;
        }
        else {
            flag = true;
        }
    } while (flag !== true);
    let hobby = '';
    do {
        hobby = input.question(`Enter hobby: `);
        if (name.length < 20) {
            console.log(`--------Yêu cầu nhập lại-----------`);
            flag = false;
        }
        else {
            flag = true;
        }
    } while (flag !== true);
    let newGF = new GirlFriend(id, name, zodiac, homeTown, year, hobby);
    gFManager.add(newGF);
}

function deleteGF() {
    let choice = -1;
    do {
        console.log(display(gFManager.showALl()));
        console.log(`0. Thoát`);
        choice = +input.question(`Enter choice: `);
        if (choice === 0) {
            break;
        }
        else {
            gFManager.remove(choice-1);
            deleteGF();
            break;
        }
    } while (choice !== 0);
}

function editGF() {
    let choice = -1;
    do {
        console.log(display(gFManager.showALl()));
        console.log(`0. Thoát`);
        choice = +input.question(`Enter choice: `);
        if (choice === 0) {
            break;
        }
        else {
            console.log(`Ny cần sửa tt:
            ${choice}, ID`);
            
        }
    } while (choice !== 0);
}
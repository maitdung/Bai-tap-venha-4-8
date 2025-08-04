function giaiPhuongtrinhbac1(a, b) {
    console.log(`phương trình có dạng : ${a}x+${b}=0`);

    if (a == 0) {
        if (b == 0)
            console.log(`Phương trình vô số nghiệm`)
        else {
            console.log(`Phương trình vô nghiệm`)
        }
    } else {
        const result = -b / a;
        console.log(`Phương trình có 1 nghiệm duy nhất x=${-b}/${a}= ${result}`);
    }

}
giaiPhuongtrinhbac1(1, 2)

function giaiPhuongtrinhbac2(a, b, c) {
    console.log(`Phương trình có dạng: ${a}x^2 + ${b}x + ${c} = 0`);
    if (a === 0) {
        giaiPhuongtrinhbac1(b, c);
    } else {
        const delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log('Phương trình vô nghiệm thực');
        } else if (delta === 0) {
            const x = -b / (2 * a);
            console.log(`Phương trình có nghiệm kép x = ${-b}/(2*${a}) = ${x}`); //Phương trình có nghiệm kép x = -2/(2*1) = ${x} 
        } else {
            const sqrtDelta = Math.sqrt(delta);
            const x1 = (-b + sqrtDelta) / (2 * a);
            const x2 = (-b - sqrtDelta) / (2 * a);
            console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
        }
    }
}



function tinhNamNhuan(a) {
    if (a % 4 == 0) {
        if (a % 100 != 0 && a % 400 == 0) {
            console.log('no la nam nhuan');
        } else {
            console.log('deo phai nam nhuan');
        }
    }
}

let a = ['a', 'b', 'c']

let c = a[2]

console.log(c);


function tinhCanChi(nam) {
    const can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];


    let layTrongCan = can[nam % 10]
    let layTrongChi = chi[nam % 12]


    console.log(`can: ${layTrongCan}`);
    console.log(`chi: ${layTrongChi}`);

    return `${layTrongCan} ${layTrongChi}`

}
console.log(tinhCanChi(2004));


function tinhThuTrongTuan(ngay, thang, nam) {
    const date = new Date(nam, thang - 1, ngay); // Tháng tính từ 0
    const thu = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

    if (isNaN(date)) {
        console.log("Ngày không hợp lệ!");
    } else {
        const ketqua = thu[date.getDay()];
        console.log(`Ngày ${ngay}/${thang}/${nam} là: ${ketqua}`);
        return ketqua;
    }
}

tinhThuTrongTuan(4, 8, 2025);

function uocchunglonnhat(a,b){
    let x =a ;
    let y = b;
    while(y !==0){
        let temp = y;
        y= x%y;
        x= temp;

    }
    console.log(`Ước Chung lớn nhất của ${a}và ${b}là : ${x}`);
    return x;
}
uocchunglonnhat(12,16)

function timUCLN(a, b) {
  let ucln = 1;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      ucln = i;
    }
  }
  return ucln;
}

function timBCNN(a, b) {
  let ucln = timUCLN(a, b);
  let bcnn = (a * b) / ucln;
  console.log(`Bội chung nhỏ nhất của ${a} và ${b} là: ${bcnn}`);
  return bcnn;
}

// Gọi thử
timBCNN(12, 18); // Kết quả: 36


function laSoNguyenTo(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function inDaySoNguyenTo(n) {
  let day = "";

  for (let i = 2; i <= n; i++) {
    if (laSoNguyenTo(i)) {
      day += i + " ";
    }
  }

  console.log(`Các số nguyên tố từ 2 đến ${n} là: ${day}`);
}


inDaySoNguyenTo(20);















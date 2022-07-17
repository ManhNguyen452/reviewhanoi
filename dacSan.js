var products = [
  {
    id: "1",
    name: "PHỞ HÀ NỘI",
    img: "img/anh1..jpg",
    price: 300000,
    status: true,
  },
  {
    id: "2",
    name: "Cháo Sườn HÀ NỘI",
    img: "img/chaosuon.jpg",
    price: 300000,
    status: true,
  },
  {
    id: "3",
    name: "Miến Trộn HÀ NỘI",
    img: "img/mientron.jpg",
    price: 150000,
    status: true,
  },
  {
    id: "4",
    name: "Miến Ngan HÀ NỘI",
    img: "img/mienngan.jpg",
    price: 250000,
    status: true,
  },
  {
    id: "5",
    name: "Bún Ốc Hà Nội",
    img: "img/bunoc.jpg",
    price: 450000,
    status: true,
  },
  {
    id: "6",
    name: "Bún Đậu Mắm Tôm",
    img: "img/bundaumantom.jpg",
    price: 600000,
    status: true,
  },
  {
    id: "7",
    name: "Bún Thang Hà Nội",
    img: "img/bunthang.jpg",
    price: 550000,
    status: true,
  },
  {
    id: "8",
    name: "Bún Chả Hà Nội",
    img: "img/buncha.jpg",
    price: 300000,
    status: true,
  },
  {
    id: "9",
    name: "Phở Cuốn Hà Nội",
    img: "img/phocuon.jpg",
    price: 450000,
    status: true,
  },
  {
    id: "10",
    name: "Chả Lá Vọng Hà Nội",
    img: "img/chalavong.jpg",
    price: 350000,
    status: true,
  },
  {
    id: "11",
    name: "Chả Rươi Cuốn Hà Nội",
    img: "img/charuoi.jpg",
    price: 350000,
    status: true,
  },

  {
    id: "12",
    name: "Bánh Cuốn Thanh Trì",
    img: "img/banhcuonthanhtri.jpg",
    price: 450000,
    status: true,
  },
  {
    id: "13",
    name: "Bánh Đa Cua",
    img: "img/banhdacua.jpg",
    price: 750000,
    status: true,
  },
  {
    id: "14",
    name: "Bánh Giò Đông Các",
    img: "img/banhgiodongcac.jpg",
    price: 50000,
    status: true,
  },
  {
    id: "15",
    name: "Bánh Khúc",
    img: "img/banhkhuchanoi.jpg",
    price: 50000,
    status: true,
  },
  {
    id: "16",
    name: "Bánh Tôm Hồ Tây",
    img: "img/banhtomhotay.jpg",
    price: 10000,
    status: true,
  },

  {
    id: "17",
    name: "Xôi Xéo",
    img: "img/xoixeo.jpg",
    price: 15000,
    status: true,
  },
  {
    id: "18",
    name: "Kem Tràng Tiền",
    img: "img/kemtrangtien.jpg",
    price: 10000,
    status: true,
  },
  {
    id: "19",
    name: "Nem Nướng Rán",
    img: "img/nemran.jpg",
    price: 12000,
    status: true,
  },
  {
    id: "20",
    name: "Tào Phớ",
    img: "img/taopho.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "21",
    name: "Bánh MÌ",
    img: "img/banhmi.jpg",
    price: 45000,
    status: true,
  }
];
function showProduct() {
  var productDiv = document.getElementById('content')

  for (var i = 0; i < products.length; i++) {
    productDiv.innerHTML += `
        <div class="box">
          <div class="imgBx">
              <img src="${products[i].img}" alt="">
          </div>
        <div class="text">
              <h3>${products[i].name}</h3>
              <span>${products[i].price} VND</span>
  
        </div>
          <button class="buy" onclick="addToCart(${products[i].id})">Đặt hàng</button>
      </div>
        `;
  }
}


showProduct()

var cartData = []

function addToCart(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      var newProduct = {
        id: products[i].id,
        name: products[i].name,
        img: products[i].img,
        price: products[i].price,
        status: products[i].status,
      };
    }
  }


  console.log(cartData);
  cartData.push(newProduct);
  console.log(cartData);
  alert("Bạn Đã Thêm Vào Giỏ Hàng Thành Công");
  showCart()
}

function showCart() {
  var tableData = document.getElementById("table-data");
  tableData.innerHTML = "";
  var total = 0;
  for (var i = 0; i < cartData.length; i++) {
    tableData.innerHTML += `
              <tr>
                  <td><p>${i + 1}</p></td>
                  <td><p>${cartData[i].name}</p></td>
                  <td><img src="${cartData[i].img}"></td>
                  <td><p>${cartData[i].price} VND</p></td>
                  <td><p>${cartData[i].status ? "Còn Hàng" : "Hết Hàng"}</p></td>
              </tr>
          `;
    total += cartData[i].price;
  }
  document.getElementById("table-total").innerHTML = `
          <tr>
               <td colspan="2"><b>Tổng Tiền</b></td>
              <td colspan="3"><p>${total} VND</p></td>
          </tr>
      `;
}

var cartDiv = document.getElementById("cart");
// tìm phần tử
var btnShowCart = document.getElementById("btn-show-cart");
btnShowCart.onclick = function () {
  if (cartData == "") {
    alert("Giỏ Hàng Trống");
  } else {
    cartDiv.classList.toggle("show");
    productDiv.classList.toggle("hide");
  }
};

var btnRemove = document.getElementById("btn-remove");
btnRemove.onclick = function () {
  alert("Xóa Giỏ Hàng Thành Công");
  cartData.splice(0, cartData.length);
  showCart();
  cartDiv.classList.toggle("show");
  productDiv.classList.toggle("hide");
};

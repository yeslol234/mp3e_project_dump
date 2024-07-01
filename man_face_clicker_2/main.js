let manfacesdisplay = document.getElementById("manfaces")
let lmlpd = document.getElementById("lmlprice")
function updatePrice(id, price) {
  document.getElementById(id).innerText = ntoab(price);
}
function ntoab(number) {
    const suffixes = [
      ['', 1],
      ['k', 1000],
      ['M', 1000000],
      ['B', 1000000000],
      ['T', 1000000000000],
      ['Qa', 1000000000000000],
      ['Qi', 1000000000000000000],
      ['Sx', 1000000000000000000000],
      ['Sp', 1000000000000000000000000],
      ['Oc', 1000000000000000000000000000],
      ['No', 1000000000000000000000000000000],
      ['De', 1000000000000000000000000000000000],
      // forgor
    ];
  
    for (let i = suffixes.length - 1; i >= 0; i--) {
      const [suffix, value] = suffixes[i];
      if (Math.abs(number) >= value) {
        const result = (number / value).toFixed(2);
        return result.endsWith('.00') ? result.slice(0, -3) + suffix : result + suffix;
      }
    }
  
    return number.toString();
}
const datastore = {
  // Function to save data to localStorage
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  },

  // Function to load data from localStorage
  loadData: function (key) {
    const savedData = localStorage.getItem(key);
    return savedData
  },

  // Function to compare two values stored in localStorage
  compareData: function (key1,key2,op) {
    const data1 = localStorage.getItem(key1);
    const data2 = localStorage.getItem(key2);

    switch (op) {
      case "add":
        return (parseInt(data1) + parseInt(data2))
      case "sub":
        return (parseInt(data1) - parseInt(data2))
      case "mul":
        return (parseInt(data1) * parseInt(data2))
      case "div":
        return (parseInt(data1) / parseInt(data2))
      case "lt":
        return parseInt(data1) < parseInt(data2)
      case "gt":
        return parseInt(data1) > parseInt(data2)
      default:
        if (data1 === data2) {
          return "same"
        } else {
          return "different"
        }
    }
  }
};
let data = {
  manfaces: 0,
  manfacesperclick: 1,
  manfacespersecond: 0,
  upgrades: {
    left_man_leg: {
      price: 10,
      normal_price: 10,
      count: 0,
      purchase: () => {
        if (data.manfaces > data.upgrades.left_man_leg.price || data.manfaces == data.upgrades.left_man_leg.price) {
          data.manfaces -= data.upgrades.left_man_leg.price
          data.manfacesperclick += 1;
          data.upgrades.left_man_leg.price += Math.floor((data.upgrades.left_man_leg.price/2)) // javascript, why do i have to name it out and the only other way is going through js object hell?
          updatePrice("lmlprice", data.upgrades.left_man_leg.price)
        } else if (data.manfaces < data.upgrades.left_man_leg.price) {
          console.error("Insufficient currency")
        }
      },
      id: 'left_man_leg'
    },
    left_man_arm: {
      price: 20,
      normal_price: 20,
      count: 0,
      purchase: () => {
        if (data.manfaces > data.upgrades.left_man_arm.price || data.manfaces == data.upgrades.left_man_arm.price) {
          data.manfaces -= data.upgrades.left_man_arm.price
          data.manfacesperclick += 1;
          data.upgrades[id].price += Math.floor((data.upgrades.left_man_arm.price/2))
        } else if (data.manfaces < data.upgrades.left_man_arm.price) {
          console.error("Insufficient currency")
        }
      },
      id: 'left_man_arm'
    },
    right_man_leg: {
      price: 30,
      normal_price: 30,
      count: 0,
      purchase: () => {
        if (data.manfaces > data.upgrades.right_man_leg.price || data.manfaces == data.upgrades.right_man_leg.price) {
          data.manfaces -= data.upgrades.right_man_leg.price
          data.manfacesperclick += 1;
          data.upgrades.right_man_leg.price += Math.floor((data.upgrades.right_man_leg.price/2))
        } else if (data.manfaces < data.upgrades.right_man_leg.price) {
          console.error("Insufficient currency")
        }
      },
      id: 'right_man_leg'
    }
  }
}
window.onbeforeunload = () => {
  alert("A")
  datastore.saveData("manfaces", data.manfaces.toString())
  datastore.saveData("manfacesperclick", data.manfacesperclick.toString())
  datastore.saveData("manfacespersecond", data.manfacespersecond.toString())
  
}
function updateCount() {
  manfacesdisplay.innerText = ntoab(data.manfaces)
}
window.onload = () => {
  data.manfaces = parseInt(datastore.loadData("manfaces"))
  data.manfacesperclick = parseInt(datastore.loadData("manfacesperclick"))
  data.manfacespersecond = parseInt(datastore.loadData("manfacespersecond"))
  updateCount()
}
// E
let btn = document.getElementById("btn")
let buyleftlegbtn = document.getElementById("buy-left-legbtn")
btn.addEventListener("click", () => {
  console.log(data.manfacesperclick)
  data.manfaces += data.manfacesperclick
  console.log(data.manfaces)
  updateCount()
})
let update = setInterval(() => {
  data.manfaces += data.manfacespersecond
  updateCount()
  updatePrice("lmlprice", data.upgrades.left_man_leg.price)
})
function clear() {
  data.manfaces = 0
  data.manfacesperclick = 1
  data.manfacespersecond = 0
  updateCount()
  Object.keys(data.upgrades).forEach((v, i) => {
    v.price = v.normal_price
    v.count = 0
    console.log("E")
  })
  console.warn("Cleared Data")
  updateCount()
}
buyleftlegbtn.addEventListener('click', () => {
  data.upgrades.left_man_leg.purchase();
})
// a
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

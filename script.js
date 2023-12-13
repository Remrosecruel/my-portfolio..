let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts =[
    {
      id: 1,
      name: 'Uniqlo T-shirt',
      category: 'Clothing',
      brand: 'Uniqlo',
      quantity: 1,
      price: 10.00,
      image: 'Uniqlo.jpg'
    },
    {
      id: 2,
      name: 'Levi s Jeans',
      category: 'Clothing',
      brand: 'Levi s',
      quantity: 1,
      price: 50.00,
      image: 'Levi s.jpg'
    },
    {
      id: 3,
      name: 'Nike Sneakers',
      category: 'Shoes',
      brand: 'Nike',
      quantity: 1,
      price: 60.00,
      image: 'nikee.jpg'
    },
    {
      id: 4,
      name: 'Adidas Sandals',
      category: 'Shoes',
      brand: 'Adidas',
      quantity: 1,
      price: 40.00,
      image: 'sandall.jpg'
    },
    {
      id: 5,
      name: 'Zara Dress',
      category: 'Clothing',
      brand: 'Zara',
      quantity: 1,
      price: 30.00,
      image: 'Zara.jpg'
    },
    {
      id: 6,
      name: 'H&M Skirt',
      category: 'Clothing',
      brand: 'H&M',
      quantity: 1,
      price: 20.00,
      image: 'H&M skirt.jpg'
    },
    {
      id: 7,
      name: 'Mango Blouse',
      category: 'Clothing',
      brand: 'Mango',
      quantity: 1,
      price: 15.00,
      image: 'Mango.jpg'
    },
    {
      id: 8,
      name: 'Christian Louboutin Heels',
      category: 'Shoes',
      brand: 'Christian Louboutin',
      quantity: 1,
      price: 70.00,
      image: 'Christian Louboutin.jpg'
    },
    {
      id: 9,
      name: 'The North Face Jacket',
      category: 'Clothing',
       brand : 'The North Face',
      quantity: 1,
      price: 40.00,
      image: 'jackett.jpg'
    },
    {
      id: 10,
      name: 'Gucci Hat',
      category: 'Accessories',
      brand: 'Gucci',
      quantity: 1,
      price: 10.00,
      image: 'gucci.jpg'
    },
    {
      id: 11,
      name: 'Nike Sneakers',
      category: 'Shoes',
      brand: 'Nike',
      quantity: 1,
      price: 60.00,
      image: 'nike3.jpg'
    },
    {
      id: 12,
      name: 'Nike Sneakers',
      category: 'Shoes',
      brand: 'Nike',
      quantity: 1,
      price: 60.00,
      image: 'Nike4.jpg'
    },
    {
      id: 13,
      name: 'Nike Sneakers',
      category: 'Shoes',
      brand: 'Nike',
      quantity: 1,
      price: 60.00,
      image: 'Nike5.jpg'
    },
    {
      id: 14,
      name: 'Nike Sneakers',
      category: 'Shoes',
      brand: 'Nike',
      quantity: 1,
      price: 60.00,
      image: 'Nike2.jpg'
    },
    {
      id: 15,
      name: 'Nike Sneakers',
      category: 'Shoes',
      brand: 'Nike',
      quantity: 1,
      price: 60.00,
      image: 'Nike6.jpg'
    },
    {
      id: 16,
      name: 'Uniqlo T-shirt',
      category: 'Clothing',
      brand: 'Uniqlo',
      quantity: 1,
      price: 10.00,
      image: 'Uniqlo1.jpg'
    },
    {
      id: 17,
      name: 'Uniqlo T-shirt',
      category: 'Clothing',
      brand: 'Uniqlo',
      quantity: 1,
      price: 10.00,
      image: 'Uniqlo2.jpg'
    },
    {
      id: 18,
      name: 'Uniqlo T-shirt',
      category: 'Clothing',
      brand: 'Uniqlo',
      quantity: 1,
      price: 10.00,
      image: 'Uniqlo3.jpg'
    },
    {
      id: 19,
      name: 'Uniqlo T-shirt',
      category: 'Clothing',
      brand: 'Uniqlo',
      quantity: 1,
      price: 10.00,
      image: 'Uniqlo4.jpg'
    },
    {
      id: 20,
      name: 'Uniqlo T-shirt',
      category: 'Clothing',
      brand: 'Uniqlo',
      quantity: 1,
      price: 10.00,
      image: 'Uniqlo5.jpg'
    },
    {
      id: 21,
      name: 'Levi s Jeans',
      category: 'Clothing',
      brand: 'Levi s',
      quantity: 1,
      price: 50.00,
      image: 'Jeans1.jpg'
    },
    {
      id: 22,
      name: 'Levi s Jeans',
      category: 'Clothing',
      brand: 'Levi s',
      quantity: 1,
      price: 50.00,
      image: 'Jeans2.jpg'
    },
    {
      id: 23,
      name: 'Levi s Jeans',
      category: 'Clothing',
      brand: 'Levi s',
      quantity: 1,
      price: 50.00,
      image: 'Jeans3.jpg'
    },
    {
      id: 24,
      name: 'Levi s Jeans',
      category: 'Clothing',
      brand: 'Levi s',
      quantity: 1,
      price: 50.00,
      image: 'Jeans4.jpg'
    },
    {
      id: 25,
      name: 'Levi s Jeans',
      category: 'Clothing',
      brand: 'Levi s',
      quantity: 1,
      price: 50.00,
      image: 'Jeans5.jpg'
    },
    {
      id: 26,
      name: 'Adidas Sandals',
      category: 'Shoes',
      brand: 'Adidas',
      quantity: 1,
      price: 40.00,
      image: 'adidas1.jpg'
    },
    {
      id: 27,
      name: 'Adidas Sandals',
      category: 'Shoes',
      brand: 'Adidas',
      quantity: 1,
      price: 40.00,
      image: 'adidas2.jpg'
    },
    {
      id: 28,
      name: 'Adidas Sandals',
      category: 'Shoes',
      brand: 'Adidas',
      quantity: 1,
      price: 40.00,
      image: 'adidas4.jpg'
    },
    {
      id: 29,
      name: 'Zara Dress',
      category: 'Clothing',
      brand: 'Zara',
      quantity: 1,
      price: 30.00,
      image: 'Zara1.jpg'
    },
    {
      id: 30,
      name: 'Zara Dress',
      category: 'Clothing',
      brand: 'Zara',
      quantity: 1,
      price: 30.00,
      image: 'Zara5.jpg'
    },
    {
      id: 31,
      name: 'Zara Dress',
      category: 'Clothing',
      brand: 'Zara',
      quantity: 1,
      price: 30.00,
      image: 'Zara3.jpg'
    },
    {
      id: 32,
      name: 'H&M Skirt',
      category: 'Clothing',
      brand: 'H&M',
      quantity: 1,
      price: 20.00,
      image: 'skirt1.jpg'
    },
    {
      id: 33,
      name: 'H&M Skirt',
      category: 'Clothing',
      brand: 'H&M',
      quantity: 1,
      price: 20.00,
      image: 'skirt2.jpg'
    },
    {
      id: 34,
      name: 'H&M Skirt',
      category: 'Clothing',
      brand: 'H&M',
      quantity: 1,
      price: 20.00,
      image: 'skirt4.jpg'
    },
    {
      id: 35,
      name: 'Mango Blouse',
      category: 'Clothing',
      brand: 'Mango',
      quantity: 1,
      price: 15.00,
      image: 'blouse1.jpg'
    },
    {
      id: 36,
      name: 'Mango Blouse',
      category: 'Clothing',
      brand: 'Mango',
      quantity: 1,
      price: 15.00,
      image: 'blouse2.jpg'
    },
    {
      id: 37,
      name: 'Mango Blouse',
      category: 'Clothing',
      brand: 'Mango',
      quantity: 1,
      price: 15.00,
      image: 'blouse3.jpg'
    },
    {
      id: 38,
      name: 'Christian Louboutin Heels',
      category: 'Shoes',
      brand: 'Christian Louboutin',
      quantity: 1,
      price: 70.00,
      image: 'Heels1.jpg'
    },
    {
      id: 39,
      name: 'Christian Louboutin Heels',
      category: 'Shoes',
      brand: 'Christian Louboutin',
      quantity: 1,
      price: 70.00,
      image: 'Heels2.jpg'
    },
    {
      id: 40,
      name: 'Christian Louboutin Heels',
      category: 'Shoes',
      brand: 'Christian Louboutin',
      quantity: 1,
      price: 70.00,
      image: 'Heels3.jpg'
    },
    {
      id: 41,
      name: 'The North Face Jacket',
      category: 'Clothing',
       brand : 'The North Face',
      quantity: 1,
      price: 40.00,
      image: 'jacket1.jpg'
    },
    {
      id: 42,
      name: 'The North Face Jacket',
      category: 'Clothing',
       brand : 'The North Face',
      quantity: 1,
      price: 40.00,
      image: 'jacket2.jpg'
    },
    {
      id: 43,
      name: 'The North Face Jacket',
      category: 'Clothing',
       brand : 'The North Face',
      quantity: 1,
      price: 40.00,
      image: 'jacket3.jpg'
    },
    {
      id: 44,
      name: 'Gucci Hat',
      category: 'Accessories',
      brand: 'Gucci',
      quantity: 1,
      price: 10.00,
      image: 'hat1.jpg'
    },
    {
      id: 45,
      name: 'Gucci Hat',
      category: 'Accessories',
      brand: 'Gucci',
      quantity: 1,
      price: 10.00,
      image: 'hat2.jpg'
    },
    {
      id: 46,
      name: 'Gucci Hat',
      category: 'Accessories',
      brand: 'Gucci',
      quantity: 1,
      price: 10.00,
      image: 'hat4.jpg'
    },

  ];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + 'dollars' + '\n' + item.quantity + ' piece' ;
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    })
}

document.getElementById('clearButton').addEventListener('click', function () {
  
  filter.reset();

  
  productFilter = listProducts;

 
  showProduct(productFilter);
});

filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        if (valueFilter.category.value !== '') {
            if (item.category !== valueFilter.category.value) {
                return false;
            }
        }
        if (valueFilter.brand.value !== '') {
            if (!item.brand.includes(valueFilter.brand.value)) {
                return false;
            }
        }
        if (valueFilter.name.value !== '') {
            if (!item.name.toLowerCase().includes(valueFilter.name.value.toLowerCase())) {
                return false;
            }
        }
        if (valueFilter.minPrice.value !== '') {
            if (item.price < parseFloat(valueFilter.minPrice.value)) {
                return false;
            }
        }
        if (valueFilter.maxPrice.value !== '') {
            if (item.price > parseFloat(valueFilter.maxPrice.value)) {
                return false;
            }
        }
        return true;
    });
    showProduct(productFilter);
    document.getElementById('haha').style.display ="block";
});

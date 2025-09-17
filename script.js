// Smooth scroll for all pages
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    if(this.getAttribute('href').startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Contact form submit alert
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thank you for contacting EcoSip! We will get back to you soon.');
    contactForm.reset();
  });
}

// Products data for shop page
const products = [
  {name:"Minimal Bamboo Bottle", price:250, size:"500ml", img:"images/hero.png"},
  {name:"Patterned Bamboo Bottle", price:300, size:"750ml", img:"images/patterned.jpg"},
  {name:"Eco Chic Bamboo Bottle", price:280, size:"500ml", img:"images/chic.jpg"},
  {name:"Stylish Bamboo Bottle", price:320, size:"750ml", img:"images/stylish.jpg"},
];


// Render shop products
const shopGrid = document.getElementById('shopGrid');
if(shopGrid){
  function displayProducts(list){
    shopGrid.innerHTML = '';
    list.forEach(p=>{
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="product-content">
          <h4>${p.name}</h4>
          <p>₹${p.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
      shopGrid.appendChild(div);
    });
  }
  displayProducts(products);

  // Filter functionality
  const filterBtn = document.getElementById('filterBtn');
  if(filterBtn){
    filterBtn.addEventListener('click',()=>{
      const size = document.getElementById('size').value;
      const price = parseFloat(document.getElementById('price').value) || Infinity;
      const filtered = products.filter(p=> (size==='all'||p.size===size) && p.price<=price);
      displayProducts(filtered);
    });
  }
}

localStorage.setItem('products', JSON.stringify([
    {id: 1,
      name: 'Hollow Block',
      shortDesc: 'All big things start from small. This fragile piece of construction material when put atop of other blocks will eventually make one strong building.  add text add text add text',
      longDesc: 'A testament to the grandeur of construction, the Hollow Block embodies the adage that all great endeavors commence from humble origins. This delicate yet sturdy piece of construction material holds the promise of forming the bedrock of monumental structures. When stacked upon one another, these blocks coalesce to forge edifices that stand as bastions of strength and resilience. With each layer meticulously laid, a narrative of progress unfolds, paving the way for the realization of architectural marvels. Embark on your journey towards building greatness, starting with the Hollow Block.',
      price: 0.19,
      imageUrl: 'img/productimg/product1.png'},

    {id: 2,
      name: 'Cement',
      shortDesc: 'Is used for solidifying a surface, may it be horizontal or vertical. Made from heating limestone, this bad boy will make any uneven surface even. add text add text',
      longDesc: 'Cement, the quintessential binder of civilizations, stands as a testament to human ingenuity and resilience. Crafted through the transformation of limestone under intense heat, this versatile material serves as the cornerstone for solidifying surfaces, be they horizontal or vertical. Its transformative properties ensure the cohesion of disparate elements, seamlessly melding them into a unified whole. As the foundation upon which progress is built, cement bestows upon every structure the strength to withstand the tests of time. Embrace the solidity and permanence that cement affords, as you embark on your journey towards architectural mastery.',
      price: 3.99,
      imageUrl: 'img/productimg/product2.png'},

    {id: 3,
      name: 'Steel Rod',
      shortDesc: 'Used for creating a solid foundation. You know what makes a man really strong? That iron in him, and I am anemic. I am struggling to even see as I write this.',
      longDesc: 'The Steel Rod, a stalwart guardian of structural integrity, epitomizes the unwavering fortitude required to erect enduring foundations. Composed of iron, the very essence of strength, it serves as the backbone upon which structures rise to prominence. Like the indomitable spirit that courses through the veins of mankind, this resilient alloy imparts a sense of solidity and resolve to every edifice it fortifies. As the bedrock upon which civilizations thrive, the Steel Rod stands as a silent sentinel, steadfast in its commitment to bolstering the aspirations of generations yet to come.',
      price: 19.99,
      imageUrl: 'img/productimg/product3.png'},

    {id: 4,
      name: 'Plywood',
      shortDesc: 'As with any construction, a plywood is a good way to start a building as a base. But for me, I start every morning waking up with that wood. I never liked that feeling.',
      longDesc: 'Plywood, the unsung hero of construction, embodies the essence of versatility and resilience. As the foundational layer upon which architectural dreams take shape, it provides a sturdy canvas upon which to paint the tapestry of progress. Despite its unassuming nature, plywood serves as the cornerstone of innovation, offering a blank slate upon which to etch the aspirations of visionaries. Like the first light of dawn heralding a new day, plywood symbolizes the dawn of possibility, beckoning forth a future brimming with promise and potential.',
      price: 0.99,
      imageUrl: 'img/productimg/product4.png'},

    {id: 5,
      name: 'Roofing',
      shortDesc: 'Of course you would want your home with a roof. It might seem crazy what I am about to say. Because I am happy, clap along if you feel like a room without a roof.',
      longDesc: 'Roofing, the crowning glory of every structure, stands as a testament to the aspirations of reaching new heights. As the guardian against natures whims, it shelters and protects, providing solace amidst the tempests of life. From its lofty perch, roofing bears witness to the ebb and flow of time, a silent sentinel guarding the sanctity of hearth and home. Like a steadfast beacon guiding ships through stormy seas, roofing symbolizes the unwavering resolve to weather lifes trials and tribulations, emerging stronger and more resilient with each passing storm.',
      price: 4.99,
      imageUrl: 'img/productimg/product5.png'},

    {id: 6,
      name: 'Gravel',
      shortDesc: 'One of the key components of cement. Legend says if you break gravel without a shovel long enough, you would get flint. Use the flint with steel then BOOM!',
      longDesc: 'Gravel, the bedrock of construction, embodies the raw potential and rugged beauty of the natural world. Born from the tumultuous forces of erosion and upheaval, it serves as a testament to the indomitable spirit of resilience. As the building blocks of progress, gravel paves the way for innovation, providing a sturdy foundation upon which to erect monuments to human ingenuity. With each stone meticulously placed, a symphony of progress unfolds, weaving together the disparate elements of nature and industry into a harmonious whole.',
      price: 7.99,
      imageUrl: 'img/productimg/product6.png'},

    {id: 7,
      name: 'Sand',
      shortDesc: 'You can make sand castles with these. You know what is crazy? The fact that if you make a castle with only glass, it is still made of sand, just intensely heated sand.',
      longDesc: 'Sand, the granular essence of time immemorial, whispers tales of ancient civilizations and distant shores. As the foundation upon which empires rise and fall, it bears witness to the passage of epochs with stoic resolve. From the majestic castles of yore to the towering skyscrapers of today, sand remains an ever-present companion in the annals of human endeavor. Like grains of wisdom scattered upon the winds of change, sand reminds us of the ephemeral nature of existence, urging us to cherish each fleeting moment with reverence and awe.',
      price: 6.99,
      imageUrl: 'img/productimg/product7.png'},

    {id: 8, name: 'Bricks',
      shortDesc: 'Could be made out of clay, stone, etc. But do not just use it for constructing a fireplace, use it on people. Use it to fill the emptiness in their hearts, hard as a brick it is!',
      longDesc: 'Bricks, the building blocks of civilization, stand as a testament to human ingenuity and creativity. Crafted from clay, stone, or other materials, they symbolize the boundless potential of mankind to shape their environment. As the cornerstone of architectural innovation, bricks pave the way for the construction of enduring legacies that withstand the test of time. From humble hearths to towering citadels, each brick serves as a testament to the indomitable spirit of progress, forging connections and bridging divides with unwavering resolve.',
      price: 0.09,
      imageUrl: 'img/productimg/product8.png'},

    {id: 9,
      name: 'Paint',
      shortDesc: 'Tired of boring old gray surfaces? Paint is the answer! Do not be that guy, he be boring, cringy, and ugly! That guy is such a tryhard it makes him look like a fool.',
      longDesc: 'Paint, the artists palette of possibility, embodies the transformative power of color and creativity. With a single stroke, it breathes life into the mundane, infusing spaces with vitality and vigor. As the harbinger of change, paint invites us to reimagine our surroundings, transcending the confines of convention and embracing the limitless expanse of imagination. From drab walls to vibrant murals, each brushstroke tells a story of renewal and rebirth, a testament to the enduring power of human expression.',
      price: 9.99,
      imageUrl: 'img/productimg/product9.png'},
  ]));

  const products = JSON.parse(localStorage.getItem('products'));

  const container = document.body;
  const centerContainer = document.createElement('div');
  centerContainer.classList.add('center-container');
  container.appendChild(centerContainer);

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  centerContainer.appendChild(gridContainer);

  let rowContainer;
  for (let i = 0; i < products.length; i++) {
    if (i % 5 === 0) {
      rowContainer = document.createElement('div');
      rowContainer.classList.add('row-container');
      gridContainer.appendChild(rowContainer);
    }

    const product = products[i];
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.imageUrl;
    card.appendChild(image);

    const name = document.createElement('p');
    name.classList.add('pname')
    name.textContent = product.name;

    name.addEventListener('click', () => {
      window.location.href = `product.html?id=${product.id}`;
    });
    card.appendChild(name);

    const description = document.createElement('p');
    description.textContent = product.shortDesc;
    card.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;
    card.appendChild(price);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList.add('button');
    addToCartBtn.addEventListener('click', function (e) {
      console.log(`Added ${product.name} to cart`);

        this.classList.add('zoom');

        setTimeout(() => {
          this.classList.remove('zoom');
        }, 300);
      });
    card.appendChild(addToCartBtn);

    addToCartBtn.addEventListener('click', () => {
      addToCart(product);
      updateCartModal();
    });

    rowContainer.appendChild(card);
  }

  function addToCart(product) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const {imageUrl, name, price} = product;
    cartItems.push({imageUrl, name, price});
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }


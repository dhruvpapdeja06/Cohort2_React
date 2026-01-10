import React from "react"
import ReactDOM from "react-dom/client"

// Card Data
const fashionData = [
  {
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    name: "Ethnic Wear",
    offer: "Up to 50% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    name: "Casual Shirts",
    offer: "Min 40% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    name: "Denim Jeans",
    offer: "Buy 1 Get 1 Free",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf",
    name: "Women Kurtas",
    offer: "Flat 60% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    name: "Summer Dresses",
    offer: "Under ₹999",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    name: "Party Wear",
    offer: "Extra 10% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    name: "Men T-Shirts",
    offer: "Starting ₹399",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    name: "Formal Shirts",
    offer: "Flat 45% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    name: "Women Tops",
    offer: "Min 30% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
    name: "Ethnic Kurtis",
    offer: "Up to 55% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d",
    name: "Track Pants",
    offer: "Buy 2 @ ₹999",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    name: "Winter Jackets",
    offer: "Up to 40% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Men Blazers",
    offer: "Flat 35% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31",
    name: "Women Sarees",
    offer: "Min 50% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Anarkali Suits",
    offer: "Extra ₹500 OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613",
    name: "Men Hoodies",
    offer: "Starting ₹799",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
    name: "Women Leggings",
    offer: "Flat 30% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0",
    name: "Palazzo Pants",
    offer: "Min 35% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Men Sneakers",
    offer: "Up to 45% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    name: "Women Flats",
    offer: "Starting ₹499",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    name: "Kids Wear",
    offer: "Min 40% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1520974735194-6c1c5a0f2b95",
    name: "Men Jeans",
    offer: "Flat 50% OFF",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1519744346363-dc3b28c8b7b8",
    name: "Women Nightwear",
    offer: "Buy 2 Save More",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1484516758160-69878111a911",
    name: "Men Shorts",
    offer: "Under ₹599",
    shopNow: "Shop Now"
  },
  {
    image: "https://images.unsplash.com/photo-1544717305-996b815c338c",
    name: "Festive Wear",
    offer: "Up to 65% OFF",
    shopNow: "Shop Now"
  }
];


// component card

// card1
const Card1 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38" />
                </div>
                <div id="bottom">
                    <h3>Ethnic Wear</h3>
                    <h2>Up to 50% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card2
const Card2 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" />
                </div>
                <div id="bottom">
                    <h3>Casual Shirts</h3>
                    <h2>Min 40% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card3
const Card3 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" />
                </div>
                <div id="bottom">
                    <h3>Denim Jeans</h3>
                    <h2>"Buy 1 Get 1 Free</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card4
const Card4 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1542060748-10c28b62716f" />
                </div>
                <div id="bottom">
                    <h3>Winter Jackets</h3>
                    <h2>Up to 40% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card5
const Card5 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" />
                </div>
                <div id="bottom">
                    <h3>Summer Dresses</h3>
                    <h2>Under ₹999</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card6
const Card6 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b" />
                </div>
                <div id="bottom">
                    <h3>Party Wear</h3>
                    <h2>Extra 10% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card7
const Card7 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246" />
                </div>
                <div id="bottom">
                    <h3>Men T-Shirts</h3>
                    <h2>Starting ₹399</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card8
const Card8 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38" />
                </div>
                <div id="bottom">
                    <h3>Ethnic Wear</h3>
                    <h2>Up to 50% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card9
const Card9 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae" />
                </div>
                <div id="bottom">
                    <h3>Formal Shirts</h3>
                    <h2>Flat 45% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card10
const Card10 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" />
                </div>
                <div id="bottom">
                    <h3>Women Tops</h3>
                    <h2>Min 30% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card11
const Card11= ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956" />
                </div>
                <div id="bottom">
                    <h3>Ethnic Kurtis</h3>
                    <h2>Up to 55% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card12
const Card12 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d" />
                </div>
                <div id="bottom">
                    <h3>Track Pants</h3>
                    <h2>Buy 2 @ ₹999</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card13
const Card13 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                </div>
                <div id="bottom">
                    <h3>Men Blazers</h3>
                    <h2>Flat 35% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card14
const Card14 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1495385794356-15371f348c31" />
                </div>
                <div id="bottom">
                    <h3>Women Sarees</h3>
                    <h2>Min 50% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card15
const Card15 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" />
                </div>
                <div id="bottom">
                    <h3>Anarkali Suits</h3>
                    <h2>Extra ₹500 OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card16
const Card16 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613" />
                </div>
                <div id="bottom">
                    <h3>Men Hoodies</h3>
                    <h2>Starting ₹799</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card17
const Card17 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e" />
                </div>
                <div id="bottom">
                    <h3>Women Leggings</h3>
                    <h2>Flat 30% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

// card18
const Card18 = ()=>{
    return (
        
            <div className="card">
                <div id="top">
                    <img src="https://images.unsplash.com/photo-1545291730-faff8ca1d4b0" />
                </div>
                <div id="bottom">
                    <h3>Palazzo Pants</h3>
                    <h2>Min 35% OFF</h2>
                    <p>Shop Now</p>
                </div>
            </div>
      
        
    ) 
}

const App = ()=>{
    return (
    <div>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
        <Card7/>
        <Card8/>
        <Card9/>
        <Card10/>
        <Card11/>
        <Card12/>
        <Card13/>
        <Card14/>
        <Card15/>
        <Card16/>
        <Card17/>
        <Card18/>

    </div>



// Header



// main 






//  Footer
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)
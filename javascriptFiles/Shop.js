var shop =[
    {
        title: "Baxter",
        pet: "Dog",
        category: "Pet",
        image: "./images/boxer.jpg",
        price: 400.00,
        description: "Click below to take me home!"
    },
    {
        title: "Biscuit",
        pet: "Dog",
        category: "Pet",
        image: "./images/berkay-gumustekin-ngqyo2AYYnE-unsplash.jpg",
        price: 200.00,
        description: "Click below to take me home!"
    },
    {
        title: "Naga",
        pet: "Dog",
        category: "Pet",
        image:"./images/naga.jpg",
        price: 319.99,
        description: "Click below to take me home!"
    },
    {
        title:"Mittens",
        pet:"Cat",
        category:"Pet",
        image:"./images/laura-lugaresi-E27W6TyGmZM-unsplash.jpg",
        price:180.00,
        description:"Click below to take me home!"
    },
    {
        title:"Shelly",
        pet:"Cat",
        category:"Pet",
        image:"./images/kitten1.jpg",
        price: 175.00,
        description:"Click below to take me home!",
    },
    {
        title:"Frisk",
        pet:"Cat",
        category:"Pet",
        image:"./images/kitten2.jpg",
        price:199.99,
        description:"Click below to take me home!",
    },
    {
        title:"Shu",
        pet:"Dog",
        category:"Pet",
        image:"./images/ameya-sawant-S4fl_XZepkg-unsplash.jpg",
        price: 500.00,
        description:"Click below to take me home!",
    },
    {
        title:"Brandy",
        pet:"Dog",
        category:"Pet",
        image:"./images/anastasia-ulyanova-aFqfi1ASUJc-unsplash.jpg",
        price: 399.99,
        description:"Click below to take me home!",
    },
    {
        title:"Grey",
        pet:"Dog",
        category:"etc",
        image:"./images/kitten3.jpg",
        price: 199.99,
        description:"Click below to take me home!",
    },
    {
        title:"Cat Lair",
        pet:"Cat",
        category:"etc",
        image:"./images/petfurniture4.jpg",
        price: 69.99,
        description:"Click below to take me home!",
    },
    {
        title:"Cat Tree",
        pet:"Cat",
        category:"etc",
        image:"./images/petfurniture3.jpg",
        price: 89.99,
        description:"Click below to take me home!",
    },
    {
        title:"Doggie Couch",
        pet:"Dog",
        category:"etc",
        image:"./images/petfurniture1.jpg",
        price: 99.99,
        description:"Click below to take me home!",
    },
    {
        title:"Dog bench",
        pet:"Dog",
        category:"etc",
        image:"./images/petfurniture4.jpg",
        price: 29.99,
        description:"Click below to take me home!",
    },
    {
        title:"Doggie Pops",
        pet:"Dog",
        category:"etc",
        image:"./images/treats1.png",
        price:12.99,
        description:"Click below to take me home!",
    },
    {
        title:"Gourmet Pig Ears",
        pet:"Dog",
        category:"etc",
        image:"./images/treats2.jpg",
        price: 15.99,
        description:"Click below to take me home!",
    },
    {
        title:"Blueberry Biscuits",
        pet:"Dog",
        category:"etc",
        image:"./images/treats3.jpg",
        price: 21.00,
        description:"Click below to take me home!",
    },
    {
        title:"Cheddar Biscuits",
        pet:"Dog",
        category:"etc",
        image:"./images/treats4.jpg",
        price: 14.00,
        description:"Click below to take me home!",
    },
    {
        title:"Sweet Potato Biscuits",
        pet:"Dog",
        category:"etc",
        image:"./images/treats5.jpg",
        price: 14.50,
        description:"Click below to take me home!",
    },
  ]
var postHTML = " "
for (var i=0; i < shop.length; i++){
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button type="button" class="btn btn-info"> add to cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}
document.getElementById('market').innerHTML = postHTML
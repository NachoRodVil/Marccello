const { Product, User, Order, Purchase, ProductPurchase, Review, Category } = require("../models");

const Promise = require("bluebird");

const logProduct = (cart) => console.log("Cart: ", { name: cart.name })
const logUser = (user) => console.log("User: ",
	{
		username: user.username,
		email: user.email,
		products: user.products.map(product => (
			{
				name: product.name,
				amount: product.order.amount
			}
		))

	})
const logOrder = (order) => console.log("Order: ", { productId: order.productId, userId: order.userId, amount: order.amount })


const productBulkCreate = Product.bulkCreate([
	{
		name: "Cono Arcoiris",
		description: "Riquísimo cono de helado que le va a encantar a los más chicos.",
		stock: 100,
		imgURL: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555309295/shape/mentalfloss/35kj35lk3j5_2.png",
		visible: true,
		price: 50
	},
	{
		name: "Rollos Helados tailandeces",
		description: "Delicioso postre helado proveniente de Tailandia. ¡Probalos!",
		stock: 100,
		imgURL: "https://www.innaturale.com/es/wp-content/uploads/2018/07/Rollito-helado-tailande%CC%81s-Thai-Rolled-Ice-Cream.jpg",
		visible: true,
		price: 80
	},
	{
		name: "Vaso Chiquito",
		description: "Vaso pequeño que puede tener 1 o 2 sabores.",
		stock: 100,
		imgURL: "https://i2.wp.com/recipes.csrsugar.com.au/wp-content/uploads/2019/01/Icecream-Cone-Cupcakes-1980x1080.jpg?fit=1980%2C1080&ssl=1",
		visible: true,
		price: 65
	},
	{
		name: "Helado de Cookies",
		description: "Delicioso helado de crema americana con galletitas trituradas.",
		stock: 100,
		imgURL: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fstory_card_hero%2Fpublic%2Fimage%2F2019%2F05%2Fmain%2Fcookies-and-cream-ice-cream-0419seo_011.jpg%3Fitok%3Dp9mnC74f",
		visible: true,
		price: 100
	},
	{
		name: "Banana Split",
		description: "Riquísimo postre para compartir.",
		stock: 100,
		imgURL: "https://www.cocinayvino.com/wp-content/uploads/2017/01/54713302_l.jpg",
		visible: true,
		price: 200
	},
	{
		name: "Sundae de Frutos Rojos",
		description: "Animate a este delicioso postre frutal.",
		stock: 100,
		imgURL: "https://truffle-assets.imgix.net/pxqrocxwsjcc_48kYShSrZ6ICwMUMeK8SKe_black-forest-sundaes_landscapeThumbnail_en.png",
		visible: true,
		price: 110
	},
	{
		name: "Sundae de Chocolate",
		description: "Delicioso Sundae de crema americana bañado de chocolate.",
		stock: 100,
		imgURL: "https://truffle-assets.imgix.net/1t1bxm43v4e3_6yx7yySB4QyWK2Qm4W8mgS_sundae-de-banana_landscapeThumbnail_es.jpeg",
		visible: true,
		price: 110
	},
	{
		name: "Milkshake",
		description: "Elegí tu sabor y probá un riquísimo Milkshake",
		stock: 100,
		imgURL: "https://i0.wp.com/bmgator.org/wp-content/uploads/2018/02/bigstock-Delicious-milkshakes-on-wooden-161168270.jpg?resize=768%2C512&ssl=1",
		visible: true,
		price: 90
	},
	{
		name: "Postre de Oreo",
		description: "Riquísimo postre de Oreo!",
		stock: 100,
		imgURL: "https://recetastips.com/wp-content/uploads/2019/09/Helado-de-Galleta-Oreo-2.jpg",
		visible: true,
		price: 10
	},
	{
		name: "Postre Helado de Frutilla",
		description: "Riquísimo postre de Helado de Americana, crema y frutillas.",
		stock: 100,
		imgURL: "https://helados.pro/wp-content/uploads/2019/01/Helado_de_fresa_encabezado.jpg",
		visible: true,
		price: 70
	},
	{
		name: "Brownie con helado",
		description: "Clásico postre que no podés dejar de probar",
		stock: 100,
		imgURL: "https://www.johaprato.com/files/styles/flexslider_full/public/brownie_y_helado.jpg?itok=OuwRViML",
		visible: true,
		price: 50
	},
	{
		name: "1/4 de helado",
		description: "Puede tener hasta 4 sabores.",
		stock: 100,
		imgURL: "https://http2.mlstatic.com/potes-para-helado-de-telgopor-12-kg-pack-100-unidades-D_NQ_NP_577905-MLA25091981361_102016-F.jpg",
		visible: true,
		price: 200
	},
	{
		name: "Kilo de helado",
		description: "Puede tener hasta 4 sabores.",
		stock: 100,
		imgURL: "https://www.yoquiero.com.ar/Img_Productos/Prod_481_1.jpg",
		visible: true,
		price: 300
	},
	{
		name: "2 Kilos de Helado",
		description: "Aprovechá esta súper oferta!",
		stock: 100,
		imgURL: "https://www.somosjujuy.com.ar/wp-content/uploads/2018/11/helader%C3%ADa-ok.jpg",
		visible: true,
		price: 500
	},
	{
		name: "Palito Bombon Helado",
		description: "Riquísimo helado de amaricana cubierto de chocolate",
		stock: 100,
		imgURL: "https://www.cocinayvino.com/wp-content/uploads/2018/03/65862718_ml.jpg",
		visible: true,
		price: 35
	},
	{
		name: "Helado de Mora",
		description: "Probalo y enamorate.",
		stock: 100,
		imgURL: "https://i.imgur.com/kjUflOI.jpg",
		visible: true,
		price: 80
	},
	{
		name: "Paletas Frutales al agua",
		description: "Riquísimas paletas con todo el sabor de la fruta.",
		stock: 100,
		imgURL: "https://animalgourmet.com/wp-content/uploads/2019/04/paletas_de_hielo2.jpg",
		visible: true,
		price: 25
	},
	{
		name: "Paleta de Mango y Frambuesa",
		description: "Una paleta frutal con una combinación insuperable de sabor.",
		stock: 100,
		imgURL: "https://www.floatingkitchen.net/wp-content/uploads/2015/07/Tequila-Sunrise-Popsicles-3-748x520.jpg",
		visible: true,
		price: 45
	},
	{
		name: "Paleta de Frutilla",
		description: "Disfrutá todo el sabor de la frutilla con esta paleta.",
		stock: 100,
		imgURL: "https://www.thespruceeats.com/thmb/fjrWI5i5btaVI9DvtH1cKx8nbvQ=/5010x2818/smart/filters:no_upscale()/homemade-strawberry-ice-popsicle-562544109-588b46ab3df78caebcfcc765.jpg",
		visible: true,
		price: 40
	},
	{
		name: "Cono de 3 sabores",
		description: "Disfrutá tus 3 sabores favoritos en un mismo cono.",
		stock: 100,
		imgURL: "https://3ncridad6ai1jg5mt30vexk1-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/italy-ice-cream-2500x1667.jpg",
		visible: true,
		price: 60
	},
	{
		name: "Torta Helada Tricolor",
		description: "Riquísima torta helada de 3 sabores.",
		stock: 100,
		imgURL: "https://lh3.googleusercontent.com/proxy/SbB3v21ZugT-dq8NxOyXMa9-ng4G5rVZktnvznywIP5R38av_Bu3PHTsrg7ziQKwqT7kKr0TZcbt86JlXpwXsw4EjuGlwlZlu2CMVW0HcgA49OTfDB6M",
		visible: true,
		price: 600
	},
	{
		name: "Torta Helada de Vainillas",
		description: "Riquísima torta helada con vainillas.",
		stock: 100,
		imgURL: "https://www.marubotana.tv/wp-content/uploads/2014/07/torta-helada.jpg",
		visible: true,
		price: 60
	},
	{
		name: "Almendrado",
		description: "Exquisito helado de vainilla con almendras con corazón de dulce de leche.",
		stock: 100,
		imgURL: "https://lh3.googleusercontent.com/proxy/XJ7bC4bkZAc-jLHpEKryP3nCeXB4YZ43DqfPdlUEW8e60qXlyaeO766Xjyn9QRihuqh0zqU1F-l_hX8Vm2eyuJb7zcUdvMcJej6fhobO1BVM5IIj1GyoHvY",
		visible: true,
		price: 350
	},
	{
		name: "Helado Especial de Pistacho",
		description: "Riquísimo helado especial de la casa.",
		stock: 100,
		imgURL: "https://i.imgur.com/IE4Fh68.jpg",
		visible: true,
		price: 120
	},
	{
		name: "Paleta de avellana",
		description: "Exquisita paleta de americana con avellanas crocantes.",
		stock: 100,
		imgURL: "https://i.imgur.com/amw8kPw.jpg",
		visible: true,
		price: 60
	},
	{
		name: "Paleta de frambuesa a la crema",
		description: "Riquísima paleta con todo el sabor de la fruta.",
		stock: 100,
		imgURL: "https://i.imgur.com/F1UFKTo.jpg",
		visible: true,
		price: 60
	},
	{
		name: "Helado de Chocolate Rocher",
		description: "Riquísimo helado especial de la casa.",
		stock: 100,
		imgURL: "https://i.imgur.com/0kKi0as.jpg",
		visible: true,
		price: 130
		
	},
	{
		name: "Torta Helada de Frambuesa",
		description: "Riquísima torta helada con todo el sabor de la frambuesa.",
		stock: 100,
		imgURL: "https://images-gmi-pmc.edge-generalmills.com/3bd48a86-ffd0-475a-a8bc-091ddd0fae3f.jpg",
		visible: true,
		price: 550
	},
])

const usuarios = [
	{
		email: "admin@mail.com",
		username: "Admin",
		password: "admin123",
		type: "superAdmin"
	},
	{
		email: "manu@mail.com",
		username: "Manu",
		password: "manu123",
		type: "normal"
	},
	{
		email: "cande@mail.com",
		username: "Cande",
		password: "cande123",
		type: "normal"
	}, 
	{
		email: "jose@mail.com",
		username: "Jose",
		password: "jose123",
		type: "normal"
	}, 
	{
		email: "nacho@mail.com",
		username: "Nacho",
		password: "nacho123",
		type: "normal"
	}, 
	{
		email: "rami@mail.com",
		username: "Rami",
		password: "rami123",
		type: "normal"
	}
];




const categories = [
	{
		name: "Por Peso",
		products: [12, 13, 14]
	},
	{
		name: "Postres",
		products: [2, 5, 6, 7, 11]
	},
	{
		name: "Paletas",
		products: [15, 17, 18, 19 , 25, 26]
	},
	{
		name: "Tortas Heladas",
		products: [21, 22, 23, 28]
	},

]

const userCreate = (array => array.map(user => User.create(user)))
const reviewCreate = (array => array.map(review => Review.create(review)))

let _user = null;
let _products = null;
let _reviews = null;

Promise.all([productBulkCreate, userCreate(usuarios)])
	.then(([products, user]) => {
		products.forEach(logProduct)
		//logUser(user)

		_user = user;
		_products = products;
	})
	.then(()=> {
		Promise.all(categories.map(category => {
			Category.create({name: category.name})
			.then(cat => {
				cat.addProducts(category.products)
			})
		}))
	})
/*

	const ordersMap = [
		{
			userId: user.id,
			productId: 1
		},
		{
			userId: user.id,
			productId: 2
		}
	]

	/*products.map(product =>
		({
			userId: user.id,
			productId: product.id
		})
	)

	return Order.bulkCreate(ordersMap);
})
.then(orders => orders.forEach(logOrder))
.then(_=> {
	return _user.getCart();
})
.then(logUser)
.then(_ => {
	return Purchase.create({
		userId: _user.id,
		total: 1000
	})
	.then(purchase => {
		return ProductPurchase.create({
			productId: _products[0].id,
			buyId: purchase.id
		})
		.then(productPurchase => purchase);
	})
})
.then(purchase => {
	_user.getHistory()
	.then(data => console.log(data.map(a => a.products.forEach(logProduct))))
} )

/*
Product.findAll()
.then(p => {
	if (p.length) {
		console.log(`Se crearon ${p.length} productos.`);
	}
	else console.error(new Error("Che creo q se cago el seed"))


})
.catch(err => {
	console.error(new Error("Che creo q se cago el seed"))

}) */


/****************

(con user.getCart())

USER: {
	username: ...
	email: ...
	password: ...
	products: [
		{
			name: ...
			order: {
				amount: ...
				createdAt: ...
			}
		},
		{
			name: ...
			order: {
				amount: ...
				createdAt: ...
			}
		},
		{
			name: ...
			order: {
				amount: ...
				createdAt: ...
			}
		}
	]
}

****************/
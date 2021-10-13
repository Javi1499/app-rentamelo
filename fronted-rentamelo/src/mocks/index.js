import sports from "../assets/sports.png"

export const MockMyProduct = {
    dataProduct: {
        img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626055011579", name: "Producto 1", description: "Este es el producto lorem insup lorem insup lorem insup", idProduct: 2,
        price: 13, location: "Tecoman"
    },
    isMyProduct: true,
    setChange: () => console.log("hola"),
    change: "change"
}

export const MockProductList = {
    productsData: [
        {
            id_producto: 60,
            nombre: "Tablon ",
            precio_hora: "30",
            precio_dia: "100",
            descripcion: "Rento tablon de 2mts marca chida, sin nigun d",
            tiempo_entrega: "0-30min",
            ubicacion: "Tecomán",
            uri_img_1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626045224076",
            id_estatus: "1"
        },
        {
            id_producto: 61,
            nombre: "Xbox one con juegos",
            precio_hora: "20",
            precio_dia: "150",
            descripcion: "Rento xbox one con 3 juegos\r\nFifa 21\r\nFornite",
            tiempo_entrega: "30-60min",
            ubicacion: "Manzanillo",
            uri_img_1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626052738987",
            id_estatus: "1"
        },
        {
            id_producto: 62,
            nombre: "Monitor de 60hz",
            precio_hora: "25",
            precio_dia: "150",
            descripcion: "Rento monitor de 30 pulgadas especial para jugar",
            tiempo_entrega: "0-30min",
            ubicacion: "Tecomán",
            uri_img_1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626055011579",
            id_estatus: "1"
        },
        {
            id_producto: 63,
            nombre: "Batidora de reposteria",
            precio_hora: "30",
            precio_dia: "200",
            descripcion: "Rento batidora de reposteria con diferentes velocidades",
            tiempo_entrega: "30-60min",
            ubicacion: "Colima",
            uri_img_1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626055597760",
            id_estatus: "1"
        }
    ]
}

export const mockProductDetails = {
    dataProduct: {
        title: "Producto 1",
        description: "Cámara Canon EOS Rebel T3i - Kit 2EF. (incluye: Lente EF-S 18-55mm f/ 3.5 - 5.6 IS, Lente EF-75-300mm f/ 4 - 5.6, Ocular EF, Batería LP-E8, Cable de video AVC-DC400ST, Cable de interfaz USB IFC-130U).",
        price: 40,
        location: "Tecomán",
        deliveryTime: "30-60min"
    }
}
export const mockImagesPreview = {
    images: ["https://rentamelo.s3.us-east-2.amazonaws.com/1626997143606", "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143637"],
    setMainImage: (e) => { console.log(e) }
}

export const mockProductView = {
    product: {

        idProduct: 60,
        name: "Tablon ",
        price: "30",
        description: "Rento tablon de 2mts marca chida, sin nigun d",
        deliveryTime: "0-30min",
        location: "Tecomán",
        img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626045224076",
        img2: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143637",
        img3: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143640",
        idUser: 3
    },
    dataLessor: {
        firstName: "Javier",
        lastName: "Ruiz"
    },
    mainImg: "https://rentamelo.s3.us-east-2.amazonaws.com/1626045224076"
}

export const mockCategory = {
    src: sports,
    name: "Deportes",

}
export const mockRentDetails = {
    dataProduct: {
        idProduct: 60,
        name: "Tablon ",
        price: "30",
        description: "Rento tablon de 2mts marca chida, sin nigun d",
        deliveryTime: "0-30min",
        location: "Tecomán",
        img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626045224076",
        img2: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143637",
        img3: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143640",
        idUser: 3
    },
    dataLessor: {
        firstName: "Javier",
        lastName: "Ruiz"
    },
    rentDetails: 5
}

export const mockProductDetailsCard = {
    dataProduct: {
        idProduct: 60,
        name: "Tablon ",
        price: "30",
        description: "Rento tablon de 2mts marca chida, sin nigun d",
        deliveryTime: "0-30min",
        location: "Tecomán",
        img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626045224076",
        img2: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143637",
        img3: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143640",
        idUser: 3
    },
    rentDays: 5
}

export const mockRentDetailsCard = {
    rentDetails: {
        status: "Activa",
        startDate: "12-12-2021",
        endDate: "12-12-2021"
    },
    dataLessor: { firstName: "Javier", lastName: "Ruiz" }
}
export const mockCardRent = {
    rentDetails: {
        status: "Activa",
        startDate: "12-12-2021",
        endDate: "12-12-2021"
    },
    dataLessor: { firstName: "Javier", lastName: "Ruiz" },
    dataProduct: {
        idProduct: 60,
        name: "Tablon ",
        price: "30",
        description: "Rento tablon de 2mts marca chida, sin nigun d",
        deliveryTime: "0-30min",
        location: "Tecomán",
        img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626045224076",
        img2: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143637",
        img3: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143640",
        idUser: 3
    },
    rentDays: 5

}

export const mockRentList = {
    dataRents: [
        {
            idRent: 16,
            name: "Cámara Canon Eos Rebel T3i",
            description: "Cámara Canon EOS Rebel T3i - Kit 2EF. (incluye: Lente EF-S 18-55mm f/ 3.5 - 5.6 IS, Lente EF-75-300mm f/ 4 - 5.6, Ocular EF, Batería LP-E8, Cable de video AVC-DC400ST, Cable de interfaz USB IFC-130U).",
            firstName: "Lizeth",
            lastName: "Andrade",
            startDate: null,
            endDate: null,
            status: "ESPERANDO CONFIRMACION",
            rentDays: 2,
            img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143606",
        },
        {
            idRent: 17,
            name: "Cámara Canon Eos Rebel T3i",
            description: "Cámara Canon EOS Rebel T3i - Kit 2EF. (incluye: Lente EF-S 18-55mm f/ 3.5 - 5.6 IS, Lente EF-75-300mm f/ 4 - 5.6, Ocular EF, Batería LP-E8, Cable de video AVC-DC400ST, Cable de interfaz USB IFC-130U).",
            firstName: "Lizeth",
            lastName: "Andrade",
            startDate: null,
            endDate: null,
            status: "ESPERANDO CONFIRMACION",
            rentDays: 4,
            img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143606"
        },
        {
            idRent: 18,
            name: "Sombrilla de playa",
            description: "Rento sombrilla grande de playa",
            firstName: "Lizeth",
            lastName: "Andrade",
            startDate: "2021-10-11 21:10",
            endDate: "2021-10-16 21:10",
            status: "EN PROCESO",
            rentDays: 5,
            img1: "https://rentamelo.s3.us-east-2.amazonaws.com/1626997143606"
        },

    ]
}

const items = document.getElementById('items');
const cards = document.getElementById('cards');
const carritoContenedor = document.getElementById('carrito-productos').content;
const cardProducto = document.getElementById('card-producto').content;
const footerCarrito = document.getElementById('carrito-footer').content;
const fragment = document.createDocumentFragment();
let carrito = {}; 

document.addEventListener('DOMContentLoaded', () =>{
    datos();
    if(localStorage.getItem('BlackSheep carrito de compras ')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        verCarrito();
    }

})

cards.addEventListener('click', e =>{
    addProducto(e);
})

items.addEventListener('click', e =>{
    btnAccion(e);
})

const datos = async () => {
    try{
        const res = await fetch('assets/js/Productos.json');
        const data = await res.json();
        printCards(data); 
        console.log(data)
    } catch(error){
        console.log(error);
    }
}

const printCards = data =>{
    data.forEach(producto =>{
        cardProducto.querySelector('h5').textContent = producto.title;
        cardProducto.querySelector('p').textContent = producto.precio;
        cardProducto.querySelector('img').setAttribute('src', producto.img);
        cardProducto.querySelector('.btn-primary').dataset.id = producto.id;

        const clone = cardProducto.cloneNode(true);
        fragment.appendChild(clone)

    })

    cards.appendChild(fragment)
}

const addProducto = e =>{
    if(e.target.classList.contains('btn-primary')){
        setCarrito(e.target.parentElement)
        alert()
    }
    e.stopPropagation();
}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-primary').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    };

    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = {...producto};
    verCarrito();
}

const verCarrito = () => {
    items.innerHTML=('');
    Object.values(carrito).forEach(producto=>{
    carritoContenedor.querySelector('th').textContent = producto.id;
    carritoContenedor.querySelectorAll('td')[0].textContent = producto.title;
    carritoContenedor.querySelectorAll('td')[1].textContent = producto.cantidad;
    carritoContenedor.querySelector('.btn-success').dataset.id = producto.id;
    carritoContenedor.querySelector('.btn-danger').dataset.id = producto.id;
    carritoContenedor.querySelector('span').textContent = producto.precio * producto.cantidad;
    const clone = carritoContenedor.cloneNode(true);
    fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    mostrarFooter();

    localStorage.setItem('BlackSheep Computacion Carrito', JSON.stringify(carrito));
}   

const mostrarFooter = () =>{
    footer.innerHTML='';
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">No se han seleccionado productos</th>
        `  
        return;
    } 

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);   
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0);
    footerCarrito.querySelectorAll('td')[0].textContent = nCantidad;
    footerCarrito.querySelector('span').textContent = nPrecio;
    const clone = footerCarrito.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', () =>{
        carrito = {};
        verCarrito();
    })
}

const btnAccion = e =>{
    if(e.target.classList.contains('btn-success')){   
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = {...producto};
        verCarrito();
    }

    if(e.target.classList.contains('btn-danger')){   
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        carrito[e.target.dataset.id] = {...producto};
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        verCarrito();
    }

    e.stopPropagation();
}



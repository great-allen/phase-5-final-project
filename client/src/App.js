import React, { useState, useEffect } from "react";
import './App.css';
import { Switch, Route,useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Games from "./Games";
import Users from './Users';
import Orders from './Orders'
import Loader from "./Loader"
import GamesImages from './GameImages'
import AllGames from './pages/AllGames'
import SingleGame from './pages/SingleGame'
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import { useDispatch } from "react-redux";
import { fetchCarts } from "./redux/cartReducer";
import { createCarts } from "./redux/cartReducer";
import { useSelector } from 'react-redux';
import CheckoutForm from "./pages/CheckoutForm";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";

function App() {
  // const pickAddress = useSelector((state) => state.address.addresses);
    // console.log(pickAddress);
    const [sortBy,setSortBy]=useState('')
    const allProducts = useSelector((state) => state.cart.products);
  // console.log(allProducts);
  const dispatch = useDispatch();
  const [searchProducts,setSearchProducts]=useState('')
  const [user, setUser] = useState(null);
  const [products,setProducts]=useState([])
  const [games,setGames]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [select,setSelect]=useState('')
  const [searchImages,setSearchImages]=useState('')
  const location = useLocation();
  // const [checkedAddress, setCheckedAddress] = useState(null)

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);
  const cartProducts = useSelector((state) => state.cart.products);
  useEffect(()=>{
    fetch("/products").then(r=>r.json()).then((data)=>{
      setProducts(data)
      setGames(data)
    })
  },[])

  
  
  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            localStorage.setItem('isAdmin', user.is_admin);
            setIsLoading(false);
            // setIsAdmin(user.is_admin)
          });
        } else {
          setIsLoading(false);
        }
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  const userId= user && user.id
  if (!user) return <Login onLogin={setUser} />;

  const handleAddNewGame=(newGame)=>{
    setProducts([newGame,...products])
    setGames([newGame,...games])
  }
   
  const handleEditNewGame=(editGame)=>{
    const updateGames=games.map((game)=>{
      return game.id ===editGame.id? editGame : game
    })
    const updateProducts=products.map((product)=>{
      return product.id===editGame.id? editGame : product
    })
    setProducts(updateProducts)
    setGames(updateGames)
  }
  const fetchProducts=()=>{fetch('/products').then(r=>r.json()).then((data)=>{
    setProducts(data)
    setGames(data)
  })}
  const handleDeleteGame=(game)=>{
    // const deleteGames=products.filter((product)=>{
    //   return product.id !==game.id
    // })
    // setProducts(deleteGames)
    fetchProducts()
  }
  const filterSearch=()=>{
    console.log(games);
    setProducts(games)
    const productsToDisplay = products && products.filter((product) => {
      return product.title.toLowerCase().includes(searchProducts.toLowerCase());
    });
    setSelect('')
    setProducts(productsToDisplay)
  }
  // const productsToDisplay = products && products.filter((product) => {
  //   return product.title.toLowerCase().includes(searchProducts.toLowerCase());
  // });
  
  const selectProducts=products && products.filter((product)=>{
    return product.platform.toLowerCase().includes(select.toLowerCase())
   })

   const sortedProducts=selectProducts.sort((list1,list2)=>{
    if(sortBy===""){
     return selectProducts
    }
      else if (sortBy==="A-Z"){
       return list1.title.localeCompare(list2.title)
     }
     else if(sortBy==="price (low-high)"){
       return list1.price-list2.price 
      }
       else

       return list2.price-list1.price 
   }
   )

   const updateCart =()=>{
    
    dispatch(fetchCarts())
    
   }
   
  //  const createCart=(data)=>{
  //   dispatch(createCarts(data))
  //   dispatch(fetchCarts())
  //  }
  const imagesToDisplay = products && products.filter((product) => {
    return product.title.toLowerCase().includes(searchImages.toLowerCase());
  });

  // const productsToDisplay = selectProducts.filter((product) => {
  //   return product.title.toLowerCase().includes(searchProducts.toLowerCase());
  // });

  return (
    <>
    
    {location.pathname !== '/Success' && (
    <NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} searchProducts={searchProducts} setSearchProducts={setSearchProducts} setSelect={setSelect} select={select} filterSearch={filterSearch} />
  )}
    <main>
    <Switch>
          {user.is_admin && (
            <>
              <Route exact path="/Admin">
                <Admin user={user}/>
              </Route>
              <Route exact path="/Games" >
                <Games products={products} handleAddNewGame={handleAddNewGame}handleEditNewGame={handleEditNewGame} handleDeleteGame={handleDeleteGame} />
              </Route>
              <Route exact path="/Users" component={Users} />
              <Route exact path="/Orders" component={Orders} />
              <Route exact path="/GamesImages" >
                <GamesImages products={imagesToDisplay} fetchProducts={fetchProducts} setSearchImages={setSearchImages} searchImages={searchImages} />
              </Route>
              <Route exact path="/AllGames">
                <AllGames products={sortedProducts} setSelect={setSelect} select={select} setSearchProducts={setSearchProducts} sortBy={sortBy} setSortBy={setSortBy} setProducts={setProducts} games={games}/>
              </Route> 
              <Route exact path="/Game/:id">
                <SingleGame products={products} user={user} />
              </Route> 
              <Route exact path="/" >
                <Home products={products} setSelect={setSelect} setSearchProducts={setSearchProducts}  />
              </Route>
            </>
          )}
          
          <Route exact path="/AllGames">
                <AllGames products={sortedProducts} setSelect={setSelect} select={select} setSearchProducts={setSearchProducts} sortBy={sortBy} setSortBy={setSortBy} setProducts={setProducts} games={games}/>
              </Route>  
          <Route exact path="/Game/:id">
            <SingleGame products={products} user={user} updateCart={updateCart} createCarts={createCarts} cartProducts={cartProducts}/>
          </Route> 
          <Route exact path="/ShoppingCart">
            <ShoppingCart user={user} />
          </Route> 
          <Route exact path="/checkoutForm">
            <CheckoutForm/>
          </Route>
          <Route exact path="/Checkout">
            <Checkout user={user}  />
          </Route> 
          <Route exact path="/OrderHistory">
            <OrderHistory user={user}  />
          </Route> 
          <Route exact path="/Success">
            <Success userId={userId} allProducts={allProducts} />
          </Route> 
          <Route exact path="/" >
                <Home products={products} setSelect={setSelect} setSearchProducts={setSearchProducts}  />
              </Route>
          
        </Switch>
        
</main>
    

    </>
  );
}

export default App;

import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const fetchCarts = createAsyncThunk("cart/fetchCarts", () => {
  return fetch("/shopping_cart")
    .then((response) => response.json())
    .then((data) => {
      return data.map(item => ({
        user_id: item.user_id,
        title: item.title,
        price: item.price,
        image_url: item.image_url,
        quantity: item.quantity,
        category: item.category,
        platform: item.platform,
        id: item.id,
        uuid: item.uuid
      }))
    });
});

export const createCarts =createAsyncThunk("cart/createCarts", (cartData)=>{
  return fetch('/shopping_carts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      cartData 
    ),
  }).then(r=>r.json()).then((newCartData) => {
    // Dispatch addToCart action with the new cart data
    return newCartData;
  });
})

export const updateCarts = createAsyncThunk("cart/updateCarts", ( id,quantity ) => {
  const updatedCartData = {
    quantity: quantity +1
  };
  return fetch(`/shopping_carts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCartData),
  }).then((r) => {
    if (r.ok) {
      r.json().then(console.log);
    } else {
      r.json().then((err) => alert(err.errors));
    }
  });
});


export const removeCarts = createAsyncThunk ("cart/removeCarts", (cartId)=>{
  return fetch(`/shopping_carts/${cartId}`,{
    method: "DELETE"
  }).then((r) => {
    if (r.ok) {
      r.json().then(console.log);
    } else {
      r.json().then((err) => alert(err.errors));
    }
  })
})

export const resetCarts = createAsyncThunk ("cart/resetCarts", ()=>{
  return fetch('/user_shopping_carts',{
    method:"DELETE"
  }).then((r) => {
    if (r.ok) {
      r.json().then(console.log);
    } else {
      r.json().then((err) => alert(err.errors));
    }
  })
})

const initialState = {
  products: [],
  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
  extraReducers: {
    // handle async action types
    [fetchCarts.pending](state) {
      state.status = "loading";
    },
    [fetchCarts.fulfilled](state, action) {
      state.products = action.payload;
      state.status = "idle";
    },
    [createCarts.pending](state) {
      state.status = "loading";
    },
    [createCarts.fulfilled](state, action) {
      state.products.push(action.payload);
      state.status = "idle";
    },
    [createCarts.rejected](state, action) {
      state.status = "idle";
      console.log(action.error.message);
    },
    [removeCarts.pending](state) {
      state.status = "loading";
    },
    [removeCarts.fulfilled](state, action) {
      state.status = "idle";
      // Remove the deleted cart from the products array
      state.products = state.products.filter(
        (cart) => cart.id !== action.meta.arg
      );
    },
    [removeCarts.rejected](state, action) {
      state.status = "idle";
      console.log(action.error.message);
    },
    [resetCarts.pending](state) {
      state.status = "loading";
    },
    [resetCarts.fulfilled](state, action) {
      state.status = "idle";
      // Remove the deleted cart from the products array
      state.products = []
    },
    [resetCarts.rejected](state, action) {
      state.status = "idle";
      console.log(action.error.message);
    },
    [updateCarts.pending](state) {
      state.status = "loading";
    },
    [updateCarts.fulfilled](state, action) {
      const { id, quantity } = action.meta.arg; // destructure the payload
      // const updatedProductIndex = state.products.findIndex(
      //   (product) => product.id === id
      // );
      // state.products[updatedProductIndex].quantity = quantity;
      const item= state.products.find((product)=>{
        return product.id ===id
      })
      item.quantity =quantity
      state.status = "idle";
    },
    
    [updateCarts.rejected](state, action) {
      state.status = "idle";
      console.log(action.error.message);
    },
  },
  },
);

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
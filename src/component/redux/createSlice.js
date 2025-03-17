import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartitem: [],
  total_Quantity:0,
  Total_price:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtocart: (state,action) => {
        console.log('payload:', action.payload);
 const item = state.cartitem.find((item)=> item.id===action.payload.id)

 if(item){
    item.quantity++
 }else{
    state.cartitem.push(action.payload)
 }
 state.total_Quantity = state.cartitem.reduce ((total , item )=> total + item.quantity,0)
 state.Total_price = state.cartitem.reduce((total , item)=> total + item.price * item.quantity,0)
    },
    plus: (state, action) => {
      const payload = action.payload
      const item = state.cartitem.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += 1;
        state.total_Quantity++;
        state.Total_price += item.price;  
        
        
      }
    },
    minus: (state, action) => {
      const payload = action.payload
      const item = state.cartitem.find((item) => item.id === payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total_Quantity--
        state.Total_price -= item.price;  
      }
    },
    removeitem:(state,action)=>{
      const payload = action.payload
     const item=state.cartitem.find((item)=>item.id === payload.id)
     if(item){
      state.total_Quantity -= item.quantity;
      state.Total_price -= item.price * item.quantity;
      state.cartitem = state.cartitem.filter((item)=> item.id !== payload.id)
     }
    
    
    },
    removeall:(state)=>{
    state.cartitem=[]
    },
   
  },
})

export const { addtocart ,plus,minus,removeall,removeitem} = counterSlice.actions;

export default counterSlice.reducer
// arya
import { createSlice } from "@reduxjs/toolkit";

// {
//     Image,
//     title,
//     price,
// }

// addDetail({})
// removeDetail({ id: Date.now(), title: "", price: '' })
export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    id: Date.now(),
    title: "",
    price: 1,
    image: "",
  },
  reducers: {
    addDetail: (state, action) => {
      state.id = Date.now();
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
    removeDetail: (state, action) => {
      const filterDetail = state.filter((item) => item.id != action.payload);
      return {
        state: filterDetail,
      };
    },
  },
});

export const { addDetail, removeDetail } = detailSlice.actions;
export default detailSlice.reducer;

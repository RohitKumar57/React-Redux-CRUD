import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Data'

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action)
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const {
        id,
        name,
        email,
        contactNumber,
        alternateNumber,
        registeredOn,
        status,
        bookingHistory,
      } = action.payload;

      const uu = state.find((user) => user.id === id);

      if (uu) {
        uu.name = name;
        uu.email = email;
        uu.contactNumber = contactNumber;
        uu.alternateNumber = alternateNumber;
        uu.registeredOn = registeredOn;
        uu.status = status;
        uu.bookingHistory = bookingHistory;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;

      const uu = state.find((user) => user.id === id);

      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer;
import { get, patch, post, deleteRequest } from "../utils/api";
import * as _ from "lodash";

export const deleteBooking = (data) => {
  return deleteRequest(`/booking/${data}`);
};

export const addBooking = (data) => {
  return post(`/booking`, data);
};

export const bookingList = () => {
  return get(`/booking`);
};

export const updateBooking = (data) => {
  return patch(`/booking/${data.rowId}`, _.omit(data, ["id", "rowId"]));
};

export const authApi = {
  deleteBooking,
  addBooking,
  bookingList,
  updateBooking,
};

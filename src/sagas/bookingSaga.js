import { API } from "../api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_BOOKING,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
  ADD_BOOKING_SUCCESS,
  ADD_BOOKING_FAIL,
  ADD_BOOKING,
  BOOKING,
  BOOKING_SUCCESS,
  BOOKING_FAIL,
  UPDATE_BOOKING,
  UPDATE_BOOKING_SUCCESS,
  UPDATE_BOOKING_FAIL,
} from "../actions/bookingActions";

function* deleteBooking(action) {
  try {
    const response = yield call(API.deleteBooking, action.payload);
    yield put({ type: DELETE_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: DELETE_BOOKING_FAIL, payload: { error: error } });
  }
}

function* addBooking(action) {
  try {
    const response = yield call(API.addBooking, action.payload);
    yield put({ type: ADD_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_BOOKING_FAIL, payload: { error: error } });
  }
}

function* bookingList(action) {
  try {
    const response = yield call(API.bookingList, action.payload);
    yield put({ type: BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: BOOKING_FAIL, payload: { error: error } });
  }
}

function* updateBooking(action) {
  try {
    const response = yield call(API.updateBooking, action.payload);
    yield put({ type: UPDATE_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_BOOKING_FAIL, payload: { error: error } });
  }
}

function* auth() {
  yield takeLatest(DELETE_BOOKING, deleteBooking);
  yield takeLatest(ADD_BOOKING, addBooking);
  yield takeLatest(BOOKING, bookingList);
  yield takeLatest(UPDATE_BOOKING, updateBooking);
}
export default auth;

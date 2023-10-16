import toast from "react-hot-toast";
import {
  DELETE_BOOKING,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
  ADD_BOOKING,
  ADD_BOOKING_FAIL,
  ADD_BOOKING_SUCCESS,
  BOOKING,
  BOOKING_SUCCESS,
  BOOKING_FAIL,
  UPDATE_BOOKING,
  UPDATE_BOOKING_SUCCESS,
  UPDATE_BOOKING_FAIL,
} from "../actions/bookingActions";

const initialState = {
  loginData: {},
  registerData: {},
  isLoading: false,
  isSuccess: false,
  error: "",
  bookingList: [],
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_BOOKING: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }
    case DELETE_BOOKING_SUCCESS: {
      toast.success(payload?.message);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    }

    case DELETE_BOOKING_FAIL: {
      toast.error(payload?.error?.data?.message);
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    }

    case ADD_BOOKING: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }

    case ADD_BOOKING_SUCCESS: {
      toast.success(payload?.message);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    }

    case ADD_BOOKING_FAIL: {
      toast.error(payload?.error?.data?.message);
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errorMessage: payload,
      };
    }

    case BOOKING: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }

    case BOOKING_SUCCESS: {
      return {
        ...state,
        bookingList: payload.data.results,
        isLoading: false,
      };
    }

    case BOOKING_FAIL: {
      return {
        ...state,
        isSuccess: false,
      };
    }

    case UPDATE_BOOKING: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }

    case UPDATE_BOOKING_SUCCESS: {
      toast.success(payload?.message);
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }

    case UPDATE_BOOKING_FAIL: {
      toast.error(payload?.error?.data?.message);
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    }

    default: {
      return { ...state };
    }
  }
};
export default authReducer;

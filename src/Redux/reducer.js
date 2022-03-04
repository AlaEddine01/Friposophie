const InitialState = {
  cartLength: 0,
  input: "",
  ListItems: [],
  isOpenModal: false,
  loading: true,
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        ListItems: payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "HANDLE_CHANGE":
      return {
        ...state,
        input: payload.target.value,
      };
    case "OPEN_CART_MODAL":
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        ListItems: state.ListItems.map((el) =>
          el.id === payload ? { ...el, isInCart: true, quantity: 1 } : el
        ),
        cartLength: state.cartLength + 1,
      };
    case "DELETEFROMCART":
      return {
        ...state,
        ListItems: state.ListItems.map((el) =>
          el.id === payload ? { ...el, isInCart: false } : el
        ),
        cartLength: state.cartLength - 1,
      };
    case "INCREMENT":
      return {
        ...state,
        ListItems: state.ListItems.map((element) =>
          element.id === payload
            ? {
                ...element,
                quantity: element.quantity + 1,
              }
            : element
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        ListItems: state.ListItems.map((element) =>
          element.id === payload
            ? {
                ...element,
                quantity: element.quantity - 1,
              }
            : element
        ),
      };
    default:
      return state;
  }
};

export default reducer;

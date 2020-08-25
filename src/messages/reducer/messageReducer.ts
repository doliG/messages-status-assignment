// Data definitions
export interface StatusMessage {
  id: number;
  text: string;
  visibility: Visibility;
  meta: {
    createdAt: Date;
    updatedAt?: Date;
    createdBy: User;
  };
}
export type Visibility = "public" | "private";

export interface User {
  id: number;
  name: string;
  picture: string;
}

// Reducer definitions
export interface MessageState {
  status: "fetching" | "ready" | "error";
  error?: string;
  messages: StatusMessage[];
}

type Fetch = { type: "fetch" };
type FetchSuccess = { type: "fetch success"; payload: StatusMessage[] };
type FetchError = { type: "fetch error"; payload: string };
type AddMessage = { type: "add message"; payload: StatusMessage };
type MessageAction = Fetch | FetchError | FetchSuccess | AddMessage;

// Actions creators
export const fetch = (): Fetch => ({ type: "fetch"});
export const fetchSuccess = (messages: StatusMessage[]): FetchSuccess => ({ type: "fetch success", payload: messages });
export const fetchError = (errorMessage: string): FetchError => ({ type: "fetch error", payload: errorMessage });
export const addMessage = (message: StatusMessage): AddMessage => ({ type: "add message", payload: message });


// Reducer
export const initialState: MessageState = {
  status: "ready",
  messages: [],
};

export function messageReducer(
  state: MessageState,
  action: MessageAction
): MessageState {
  switch (action.type) {
    case "fetch":
      console.log("Action: fetch");
      return { ...state, status: "fetching", error: "" };
    case "fetch success":
      console.log("Action: fetch success");
      return {
        ...state,
        status: "ready",
        messages: action.payload,
      };
    case "fetch error":
      console.log("Action: fetch error");
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    case "add message":
      console.log("Action: add message");
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    default:
      return state;
  }
}

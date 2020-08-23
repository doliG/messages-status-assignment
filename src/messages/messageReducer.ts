// Data definitions
export interface IMessage {
  id: number;
  text: string;
  visibility: "public" | "private";
  meta: {
    createdAt: Date;
    updatedAt?: Date;
    createdBy: IUser;
  };
}

export interface IUser {
  id: number;
  name: string;
  picture: string;
}

// Reducer definitions
export interface IMessageState { // Should not be exported (caused by typeof any of reducer)
  status: "fetching" | "ready" | "error";
  error?: String;
  messages: IMessage[];
}

type Fetch = { type: "fetch" };
type FetchSuccess = { type: "fetch success"; payload: IMessage[] };
type FetchError = { type: "fetch error"; payload: String };
type AddMessage = { type: "add message"; payload: IMessage };
type MessageAction = Fetch | FetchError | FetchSuccess | AddMessage;

// Reducer
export const initialState = {
  status: "ready",
  messages: [],
};

export function messageReducer(state: IMessageState, action: MessageAction): any {
  // type of return should be MessageState
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

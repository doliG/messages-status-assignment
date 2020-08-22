import { User, Message } from "./messages/messageReducer";

const currentUser: User = {
  id: 0,
  name: "You",
  picture: "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
};

const john: User = {
  id: 1,
  name: "John Nace",
  picture: "https://www.voxcatch.fr/wp-content/uploads/2018/12/john-cena-1.jpg",
};

const donny: User = {
  id: 2,
  name: "Donny Prumt",
  picture:
    "https://www.cdiscount.com/pdt2/1/9/2/1/700x700/auc2009705470192/rw/donald-trump-face-costume-mask-party-masquerade-ha.jpg",
};

export const mockMessages: Message[] = [
  {
    id: 0,
    text: "I love reducers",
    visibility: "public",
    meta: {
      createdAt: new Date(),
      createdBy: currentUser,
    },
  },
  {
    id: 1,
    text: "And my name is... wait, who am I ?",
    visibility: "public",
    meta: {
      createdAt: new Date(),
      createdBy: john,
    },
  },
  {
    id: 1,
    text: "What is COVID anyway ?",
    visibility: "public",
    meta: {
      createdAt: new Date(),
      createdBy: donny,
    },
  },
];

export const mockMessage: Message = {
  id: 0,
  text: "I am the first and new message, boom",
  visibility: "public",
  meta: {
    createdAt: new Date(),
    createdBy: currentUser,
  },
};

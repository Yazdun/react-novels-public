export const LOGIN = "/public/authentication/login";
export const JOIN = "/public/authentication/join";

export const GET_USER_INFO = "/protected/user/";

export const GET_ALL_NOVELS = "/public/novel";
export const GET_SINGLE_NOVEL = (id) => `/public/novel/find/${id}`;
export const GET_RELATED_NOVELS = (id) => `/public/novel/related/${id}`;
export const LIKE_NOVEL = (id) => `/protected/status/novel/like/${id}`;

export const CREATE_REVIEW = (id) => `/protected/review/create/${id}`;
export const GET_NOVEL_REVIEWS = (id) => `/public/review/novel/${id}`;

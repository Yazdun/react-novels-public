export const LOGIN = "/public/authentication/login";
export const JOIN = "/public/authentication/join";

export const GET_USER_INFO = "/protected/user/";

export const GET_ALL_NOVELS = "/public/novel";
export const GET_SINGLE_NOVEL = (id) => `/public/novel/find/${id}`;
export const GET_RELATED_NOVELS = (id) => `/public/novel/related/${id}`;
export const LIKE_NOVEL = (id) => `/protected/status/novel/like/${id}`;
export const STAR_AUTHOR = (id) => `/protected/status/author/star/${id}`;

export const CREATE_REVIEW = (id) => `/protected/review/create/${id}`;
export const GET_NOVEL_REVIEWS = (id) => `/public/review/novel/${id}`;

export const IS_NOTIF = "/protected/notification/isNotif";
export const GET_ALL_NOTIFS = "/protected/notification/";

export const GET_AUTHOR = (id) => `/public/author/find/${id}`;
export const GET_AUTHOR_NOVELS = (id) => `/public/author/novels/${id}`;

export const GET_CURRENT_USER = "/protected/user/";
export const GET_USER_STATS = "/protected/user/stats/";

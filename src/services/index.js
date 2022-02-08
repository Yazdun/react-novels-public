// AUTHENTICATION
export const LOGIN = "/public/authentication/login";
export const JOIN = "/public/authentication/join";
// PROTECTED USER
export const GET_USER_INFO = "/protected/user/";
export const GET_CURRENT_USER = "/protected/user/";
export const GET_USER_STATS = "/protected/user/stats/";
export const GET_USER_LIKES = "/protected/user/likes/";
export const GET_USER_STARS = "/protected/user/stars/";
export const GET_USER_REVIEWS = "/protected/user/reviews/";
export const EDIT_USER = "/protected/user/update";
// PUBLIC USER
export const GET_USER_DATA = (id) => `/public/user/find/${id}`;
// PUBLIC NOVEL
export const GET_ALL_NOVELS = "/public/novel";
export const GET_SINGLE_NOVEL = (id) => `/public/novel/find/${id}`;
export const GET_RELATED_NOVELS = (id) => `/public/novel/related/${id}`;
// PORTECTED STATUS
export const LIKE_NOVEL = (id) => `/protected/status/novel/like/${id}`;
export const STAR_AUTHOR = (id) => `/protected/status/author/star/${id}`;
// PROTECTED REVIEWS
export const CREATE_REVIEW = (id) => `/protected/review/create/${id}`;
export const DELETE_REVIEW = (id) => `/protected/review/delete/${id}`;
export const UPDATE_REVIEW = (id) => `/protected/review/update/${id}`;
// PUBLIC REVIEWS
export const GET_NOVEL_REVIEWS = (id) => `/public/review/novel/${id}`;
// NOTIFICATION
export const IS_NOTIF = "/protected/notification/isNotif";
export const GET_ALL_NOTIFS = "/protected/notification/";
// PUBLIC AUTHOR
export const GET_AUTHOR = (id) => `/public/author/find/${id}`;
export const GET_AUTHOR_NOVELS = (id) => `/public/author/novels/${id}`;

import { getRandomInteger, getRandomArrayElement, createRandomIdGenerator } from './util.js';

const POST_COUNT = 25;

const DESCRIPTION = [
  'Отдыхать хорошо',
  'Жить хорошо',
  'Ученье-свет,не ученье-тьма',
  'Отличное место',
  'Хочу туда',
  'Это было что-то!',
];

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
// Количество комментариев к каждой фотографии — случайное число от 0 до 30.
// Все комментарии генерируются случайным образом.Пример описания объекта с комментарием.
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

// Имена
const NAMES = [
  'Александр',
  'Иван',
  'Артем',
  'Михаил',
  'Олег',
  'Шурик',
  'Степан',
  'Слава',
];

const createComment = () => ({
  idComment: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

// Объект состоит из 5 ключей:
const createPhoto = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
});

const similarPosts = () => Array.from({ length: POST_COUNT }, createPhoto);

export { similarPosts };



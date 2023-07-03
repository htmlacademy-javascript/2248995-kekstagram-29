import { createPosts } from './data';

const postTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const postList = document.querySelector('.pictures');

const postListFragment = document.createDocumentFragment;

const similarPost = createPosts();
similarPost.forEach((url, description, likes, comments) => {
  const postItem = postTemplate.cloneNode(true);
  postItem.querySelector('.picture__img').src = url;
  postItem.querySelector('.picture__img').alt = description;
  postItem.querySelector('.picture__coments').textContent = comments.length;
  postItem.querySelector('.picture__likes').textContent = likes;
  postList.append(postItem);
});

postList.appendChild(postListFragment);

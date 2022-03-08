const Like = document.querySelector(".fa-thumbs-up");
const Dislike = document.querySelector(".fa-thumbs-down");
const Comment = document.querySelector(".input_comment");
const Comment_btns = document.querySelector(".comment_btns");

const addContent = document.querySelector(".upload");
const addContent_icon = document.querySelector(".create_content");
const apps = document.querySelector(".create");
const apps_icon = document.querySelector(".apps");
const notification = document.querySelector(".notification");
const notify = document.querySelector(".notify");

Comment.addEventListener("click", writeComment);

addContent.addEventListener("mouseover", add);
addContent.addEventListener("mouseout", remove);

apps.addEventListener("mouseover", showapps);
apps.addEventListener("mouseout", remove_apps);

notification.addEventListener("mouseover", add_notify);
notification.addEventListener("mouseout", remove_notify);

function writeComment() {
  Comment_btns.classList.toggle("side");
}

function add() {
  addContent_icon.style.display = "block";
}
function remove() {
  addContent_icon.style.display = "none";
}

function showapps() {
  apps_icon.style.display = "block";
}
function remove_apps() {
  apps_icon.style.display = "none";
}

function add_notify() {
  notify.style.display = "block";
}
function remove_notify() {
  notify.style.display = "none";
}

const divs = document.querySelectorAll(".people_reaction");
Like.addEventListener("click", likeContent);
Dislike.addEventListener("click", dislikeContent);
var likedComment = false;
var dislikedComment = false;
divs.forEach((item) => {
  const commentLike = item.querySelector(".fa-thumbs-up.like");
  const commentDislike = item.querySelector(".fa-thumbs-down.dislike");
  commentLike.addEventListener("click", () => likeComment(item));
  commentDislike.addEventListener("click", () => dislikeComment(item));
});

var liked_byUser = false;
var disliked_byUser = false;

function likeContent() {
  if (liked_byUser) {
    Like.classList.remove("liked");
    liked_byUser = false;
  } else {
    if (disliked_byUser) {
      Dislike.classList.remove("disliked");
      disliked_byUser = false;
    }
    Like.classList.add("liked");
    liked_byUser = true;
  }
}
function dislikeContent() {
  if (disliked_byUser) {
    Dislike.classList.remove("disliked");
    disliked_byUser = false;
  } else {
    if (liked_byUser) {
      Like.classList.remove("liked");
      liked_byUser = false;
    }
    Dislike.classList.add("disliked");
    disliked_byUser = true;
  }
}

const reaction = document.querySelectorAll(".fa-thumbs-up.like");
function likeComment(item) {
  const commentLike = item.querySelector(".fa-thumbs-up.like");
  const commentDislike = item.querySelector(".fa-thumbs-down.dislike");

  if (likedComment) {
    commentLike.classList.remove("comment");
    likedComment = false;
  } else {
    if (dislikedComment) {
      commentDislike.classList.remove("comment");
      dislikedComment = false;
    }
    commentLike.classList.add("comment");
    likedComment = true;
  }
}
function dislikeComment(item) {
  const commentDislike = item.querySelector(".fa-thumbs-down.dislike");
  const commentLike = item.querySelector(".fa-thumbs-up.like");
  if (dislikedComment) {
    commentDislike.classList.remove("comment");
    dislikedComment = false;
  } else {
    if (likedComment) {
      commentLike.classList.remove("comment");
      likedComment = false;
    }
    commentDislike.classList.add("comment");
    dislikedComment = true;
  }
}

const newFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post_id"]').value.trim();
  const title = document.querySelector('#comment-desc').value.trim();

  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({ post_id, user_id, title }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to create post');
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

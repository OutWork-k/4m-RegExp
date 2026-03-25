const cardsContainer = document.querySelector("#cards");

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }

    const data = await response.json();

    renderCards(data);

  } catch (error) {
    console.error(error);
    cardsContainer.innerHTML = "<p>Ошибка при загрузке данных</p>";
  }
};

const renderCards = (posts) => {
  cardsContainer.innerHTML = "";

  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="https://via.placeholder.com/300x150" alt="image">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    cardsContainer.appendChild(card);
  });
};

fetchPosts();
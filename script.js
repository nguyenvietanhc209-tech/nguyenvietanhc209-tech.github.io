const username = "nguyenvietanhc209-tech";

async function loadRepos() {
    const container = document.getElementById("repo-container");

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated`
        );

        const repos = await response.json();

        container.innerHTML = "";

        repos.slice(0, 6).forEach(repo => {
            const card = document.createElement("div");

            card.className = "repo-card";

            card.innerHTML = `
                <h3>${repo.name}</h3>

                <p>
                    ${repo.description || "Không có mô tả"}
                </p>

                <p>
                    ⭐ ${repo.stargazers_count}
                </p>

                <a href="${repo.html_url}" target="_blank">
                    Xem Repository →
                </a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML =
            "<p>Không thể tải repository từ GitHub.</p>";
    }
}

loadRepos();

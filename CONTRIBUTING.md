# Contributing to PlasmaPy's website

## Building the website

1. Clone the repository.
2. Install nikola (using `pip` for example).
3. Go to `src` branch.
4. Update data from [`PlasmaPy repository`](https://github.com/PlasmaPy/PlasmaPy) using `pull_from_github.py`.
5. Build the website:
    - Inside `web/` directory run `nikola build`
    - Preview the changes with `nikola serve --browser`
    - Deploy to github pages with `nikola github_deploy`

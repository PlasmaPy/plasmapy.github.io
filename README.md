# PlasmaPy Website

[![Build Status](https://travis-ci.org/PlasmaPy/plasmapy.github.io.svg?branch=master)](https://travis-ci.org/PlasmaPy/plasmapy.github.io)

This repository contains the code for the website for
the PlasmaPy project.  The primary URL will hopefully
soon be:
[`https://www.plasmapy.org/`](https://www.plasmapy.org/)

## Building the website

1. Clone the repository.
2. Install nikola (using `pip` for example).
3. Go to `src` branch.
4. Update data from [`PlasmaPy repository`](https://github.com/PlasmaPy/PlasmaPy) using `pull_from_github.py`.
5. Build the website:
    - Inside `web/` directory run `nikola build`
    - Preview the changes with `nikola serve --browser`
    - Deploy to github pages with `nikola github_deploy`

## License

See [LICENSE.md](./LICENSE.md) for this repository's license.

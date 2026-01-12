# Contributing to PlasmaPy's website

## Prerequisites

[PlasmaPy's website](https://www.plasmapy.org) is built using the
[Nikola](https://getnikola.com/) static website generator. In order to build
the website locally on your computer, you will need to [install
Nikola](https://getnikola.com/getting-started.html#install). This may
be done for your local Python installation using `pip`.

```bash
pip install nikola
```

## Resources

- [git](https://git-scm.com/)
- [Nikola documentation](https://getnikola.com/documentation.html)
- [Markdown guide](https://www.markdownguide.org/)

## Getting started

The following steps will set up your local computer in order to submit a
contribution of code or content to PlasmaPy's website.

1. [Create a fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) of the [PlasmaPy/plasmapy.github.io repository](https://github.com/PlasmaPy/plasmapy.github.io) on GitHub.

1. [Clone your fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#step-2-create-a-local-clone-of-your-fork) using [git](https://git-scm.com/), and enter the directory.

   ```bash
   git clone https://github.com/username/plasmapy.github.io.git
   cd plasmapy.github.io
   ```

where *username* is your GitHub username.

3. [Add a remote](https://help.github.com/en/github/using-git/adding-a-remote)
   to connect to the upstream repository.

   ```bash
   git remote add upstream https://github.com/PlasmaPy/plasmapy.github.io.git
   ```

### A note on branches

Nikola's source files are located on the `main` git branch, and the built HTML files are located on the `deploy` branch. The GitHub repository defaults to the source branch as default when cloning the repository, so you shouldn't need to worry about this - and you definitely do not need to change files on `deploy`.

> [!NOTE]
> In January 2026, the deployed branch was renamed from `main` to `deploy` and the source branch was renamed from `src` to `main` to align with common conventions.

## Submitting a code contribution

1. Fetch the most recent updates to the repository.

   ```bash
   git fetch --all
   ```

1. Create and check out a branch based off of the
   [`main`](https://github.com/PlasmaPy/plasmapy.github.io/tree/main)
   branch of the upstream repository, and connect it to a new branch
   in your fork on GitHub.

   ```bash
   git checkout -b new-branch-name upstream/main
   git push --set-upstream origin new-branch-name
   ```

1. Make and commit changes in the `pages/` directory. Most of the pages
   are in `pages/` while blog posts are in `web/posts/`.

   ```bash
   git add changed_file.md
   git commit -m "Update changed_file.md"
   ```

   Pages and posts are written in [Markdown](https://www.markdownguide.org/).

1. Build and preview the website using

   ```bash
   nikola auto --browser

   ```

1. [Create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
   to the `main` branch.

1. The website will be rebuilt automatically after the pull request is merged.
   After five to ten minutes, check that the website is functioning nominally.

## Getting help

The quickest way to contact PlasmaPy developers is through the
[Matrix](https://riot.im/app/#/room/#plasmapy:openastronomy.org)/[Gitter](https://gitter.im/PlasmaPy/Lobby)
channel.

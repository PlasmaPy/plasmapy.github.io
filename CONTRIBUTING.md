# Contributing to PlasmaPy's website

## Prerequisites

[PlasmaPy's website](https://www.plasmapy.org) is built using the 
[Nikola](https://getnikola.com/) static website generator.  In order to build 
the website locally on your computer, you will need to [install 
Nikola](https://getnikola.com/getting-started.html#install).  This may 
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

2. [Clone your fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#step-2-create-a-local-clone-of-your-fork) using [git](https://git-scm.com/), and enter the directory.

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

Nikola's source files are located on the `src` git branch, and the built HTML files are located on the `master` branch. The GitHub repository defaults to the source branch as default when cloning the repository, so you shouldn't need to worry about this - and you definitely shouldn't need to change files on `master`.
## Submitting a code contribution

1. Fetch the most recent updates to the repository. 

    ```bash
    git fetch --all
    ```
   
2. Create and check out a branch based off of the 
   [`src`](https://github.com/PlasmaPy/plasmapy.github.io/tree/src)
   branch of the upstream repository, and connect it to a new branch
   in your fork on GitHub.

   ```bash
   git checkout -b new-branch-name upstream/src
   git push --set-upstream origin new-branch-name
   ```  

3. Make and commit changes in the `web/` directory.  Most of the pages
   are in `web/pages/` while blog posts are in `web/posts/`.

   ```bash
   git add changed_file.md
   git commit -m "Updated changed_file.md"
   ```
   
4. Inside the `web/` directory, build and preview the website using

   ```bash
   nikola auto --browser
   
6. [Create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) 
   to the `src` branch on the main repository.
   
7. The website will be rebuilt automatically after the pull request is merged. 
   After five to ten minutes, check that the website is functioning nominally.
   
## Getting help

The quickest way to contact PlasmaPy developers is through the 
[Matrix](https://riot.im/app/#/room/#plasmapy:openastronomy.org)/[Gitter](https://gitter.im/PlasmaPy/Lobby)
channel.  

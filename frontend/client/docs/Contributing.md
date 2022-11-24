<!-- omit in toc -->

# How to contribute to Streets Rates Web App

## IMPORTANT!!! : MAKE YOUR PR's TO `dev` BRANCH, NOT `main`

Don't be hesitant to offer because every team member's input is recognized and encouraged. For more information on the various ways to contribute and how this project manages them, see the [Contents](#table-of-contents). Before contributing, do make sure to read the pertinent section. It will greatly simplify the experience for the Team Leads and PR Leads as well as for everyone else. Can't wait to work with you to create a beautiful streets rates application.

## Table of Contents

- [I Want To Contribute](#contributions-guide)
- [First Time Contributing?](#first-time-contributing?)

## Contributions Guide

The process is structured as follows in order to contribute to this project:

- Please take a look at the issues tab and check for open issues or if you find any issues do not hesitate to open an issue Thanks
- When necessary, you write tests after making the necessary changes to ensure that the change is successful.
- You start a pull request, which your team lead or PR lead reviews and merges if it passes muster.

#### Take note for first time contributors

Everyone started out as a novice at some time, and it goes without saying that you must always be learning if you want to become a master. If this is your first time contributing, please read the instructions carefully and I guarantee you won't make a mistake.

So here is a run down of how you would go about contributing:

- #### Fork your own copy of the Repository

  Forking [this](https://github.com/workshopapps/realxchangerate.web.git) repository should be your initial action. This implies that you receive a personal copy of the repository. You can then securely make modifications to your own copy, submit your changes later, and request that the PR leaders integrate (merge) your changes with those made to the main/central repository.

- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) the zc_main on your profile, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the URL for the Streets rate app repository on your own device (the one you forked).
  - On your computer, open the folder you wish to work in.
  - Launch your preferred text editor.
  - Activate the terminal.
  - run `git clone [Link to your copy of the zc main repository]`.
    > The link should look like this : `https://github.com/<your username>/realxchangerate.web.git`

- #### Configure the upstream

  Now that you have the local copy of Zuri main. There are a lot of developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

- copy the following link: https://github.com/workshopapps/realxchangerate.web.git
- Run the command `git remote add upstream https://github.com/workshopapps/realxchangerate.web.git` in the project folder of your local machine.

- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, establish a branch with the name of the feature you wish to implement feat prefixed.
  - Run `git checkout -b feat/about-page hero component` as an example.
  - Change as you see fit.
  - Use `git add .` or another command that suits your needs to add the modifications.
  - Include succinct commit messages that include a closure action and your issue number.

    For instance, `git commit -m "fix about-page hero component to the home page close #21"` This means that after your pull request is merged by the PR leaders (More on that below). The issue #21 is now closed automatically.
    Run "git push origin" > (the name of the repository you established). Run "git push origin feat/signup" for the aforementioned example. This updates your online copy with your modifications, following which you file a pull request.

- #### Opening Pull requests

  Now that your online version has been updated. You will require a method of alerting the original repository's PR Leads that your contribution is prepared. To do this, you open a pull request, which is just a request for the original repository's modifications to be combined with yours. Because, after all, what good is making improvements if they don't get merged?

  Immediately following the final action (committing your modifications using push):

  Visit your github account now. And then click the link for your personal streets rates repository.

- You will see a pull request opening option.
- Name your pull request `FRO-456` when you create it. In my PR, a feature is added, and `FRO` is the problem ID.
- Describe your modifications in detail, if necessary with the use of illustrations and tests. Include screenshots.
- Select "Open Pull Request" and wait.
- Where appropriate, provide comments, and then wait for the PR Leads

### Well there you have it you've just contributed to streets rate app Your PR would be reviewed shortly

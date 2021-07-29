# CI/CD

[:arrow_left: Readme](../README.md)

There are few steps of a CI/CD process:

## Commit

On commit there is a Husky rule to lint all files.

## Merge request

Github Actions are performing a set of actions to check the requested code

## On main branches (master, development)

- Dependabot checks for any outdated packages
- Codeql check for any security issues
- Build and Test checks the build and tests status

## On master (release) branch

Each new commit is build and deployed by a Netlify

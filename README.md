# Enforce the same linter, type checking and VScode settings on multiple projects

This repository contains shared settings for linters, static type checking tools and VSCode used by [NextGenContribution's](https://github.com/NextGenContributions) projects.

We use `nitpick` tool to sync the settings from this shared repo to other projects.

## What is included in the shared configs

Python linters and type checkers configuration for:

- Ruff
- Mypy
- Flake8 with Wemake-Python-Styleguide (WPS)
- Pylint
- Pyre
- Pyright and Basedpyright
- Trunk

If you wish something to be added, please open an issue in the [issue tracker](https://github.com/NextGenContributions/.nitpick/).

### Our linter rule policy

We have done great effort to make sure the liners and type checkers work great:

- Use very strict settings (we like it strict as long as they are relevant)
- Disabled some rules that produce false alarms.
- Disabled rules that are redundant and handled better by another linter. For example, when `Ruff` has the rule, we use it then only from `Ruff` as it is fast and can do linting real-time in the IDE (in VScode for example) and the user does not need to save the file to see the results.
- Disabled some conflicting rules. For example, we use Ruff as the authority because it is so good and popular, so if some other linter have conflicting rule, we disable it from that other linter.

If you notice something not so great about our rule configurations, please open an issue in the [issue tracker](https://github.com/NextGenContributions/.nitpick/).

## Installation and usage

### Add nitpick configuration

For each project, you can use the following configuration (`.nitpick.toml`) to use the shared settings. They're all optional and can be included/excluded as needed.

So add (`.nitpick.toml`) to your project root directory:

```toml
[tool.nitpick]
style = [
    "github://NextGenContributions/.nitpick@main/nitpick_styles/django-flake8.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/django-mypy.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/django-ruff.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/django-pyproject.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-codacy.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-deepsource.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-mypy.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-flake8.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-pre-commit-hooks.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-pylintrc.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-pyproject.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-ruff.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-taplo.toml",
    "github://NextGenContributions/.nitpick@main/nitpick_styles/generic-trunk.toml",
]
# We don't really care about caching as it should be rather quick to fetch anyway, this ensures fresh configs
cache = "never"
```

Typically, a Django project should include all the generic styles as well as the django specific ones. A generic project should include only the generic styles.

### Install nitpick

Here in the instructions we use [uv](https://docs.astral.sh/uv/) as it is our choice. But you could use `pip` or `poetry` do the similar.

To install using `uv`:

```shell
uv add git+https://github.com/NextGenContributions/nitpick#develop-ng --rev develop-ng --group dev
```

#### Important note

We used above our public fork of the original `nitpick` repo, as the original  `nitpick` is not very well maintained and have many open issues and bugs.

In our own fork we have fixed some bugs and make it work the way we expect it to work. Despite our efforts, there are still plenty of issues with it. It's recommended to go through the [list of issues](https://github.com/NextGenContributions/nitpick/issues) and workaround them as needed while modifying the configs in your project to avoid surprises.

### Sync configs from nitpick

Once you have the

```shell
nitpick fix
```

### Install any new packages

Finally, if you got new packages added automatically to your `pyproject.toml` when you ran `nitpick fix`, you can install them with `uv`:

```shell
uv sync
```

### Keeping the rules in sync

Whenever you need to sync the latest settings from our repo, you can run:

```shell
nitpick fix
```

Verify the changes and fix by hand if something strange happened to your configs.

If you encounter something that does not work as expected when you ran `nitpick fix`, you can open a ticket in the [issue tracker](https://github.com/NextGenContributions/nitpick/issues).

## Pre-commit hooks

You can include `generic-pre-commit-hooks.toml` to apply pre-commit hooks to your repo. This would help running `nitpick` check and fix before each commit. However, since `pre-commit` would only install the latest non-moving rev, to get the latest styling config from this repo. Run the following command after `pre-commit install`:

```bash
pre-commit autoupdate --bleeding-edge --repo "https://github.com/NextGenContributions/nitpick"
```

# .nitpick

Shared settings for linters, static type checking tools and VSCode used in NextGenContribution's projects.

## Notes

We have done great effort to make sure the liners and type checkers work great:

- Use very strict settings (we like it strict as long as they are relevant)
- Disabled some rules that produce false alarms.
- Disabled rules that are redundant and handled better by another linter. For example, when `Ruff` has the rule, we use it as `Ruff` is fast and can do linting real-time in the IDE (in VScode for example) and the user does not need to save the file to see the results.
- Disabled some conflicting rules. For example, we use Ruff as the authority, if some other linter have conflicting rule, we disable it from that linter. 

## Installation and usage

### Add nitpick configuration

For each project, you can use the following configuration (`.nitpick.toml`) to use the shared settings. They're all optional and can be included/excluded as needed.

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
uv add git+https://github.com/NextGenContributions/nitpick#develop-ng --branch develop-ng --group dev
```

#### Important note

We used above our public fork of the original `nitpick` repo, where we have fixed some bugs and make it work the way we expect it to work. 

The original  `nitpick` is not very well maintained and despite our efforts, there are still plenty of issues with it. It's recommended to go through the list of issues here https://github.com/NextGenContributions/nitpick/issues and workaround them as needed while modifying the configs in your project to avoid surprises.

### Sync configs from nitpick

```
nitpick --fix
```

### Install any new packages

Finally, if you got new packages installed to your `pyproject.toml`, you can install them with `uv`:
```
uv sync
```

## Pre-commit hooks

You can include `generic-pre-commit-hooks.toml` to apply pre-commit hooks to your repo. This would help running `nitpick` check and fix before each commit. However, since `pre-commit` would only install the latest non-moving rev, to get the latest styling config from this repo. Run the following command after `pre-commit install`:

```bash
pre-commit autoupdate --bleeding-edge --repo "https://github.com/NextGenContributions/nitpick"
```

# .nitpick
Shared python linters' and static type checking tools' settings used by NextGenContribution's projects

## Usage
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


## Pre-commit hooks

You can include `generic-pre-commit-hooks.toml` to apply pre-commit hooks to your repo. This would help running `nitpick` check and fix before each commit. However, since `pre-commit` would only install the latest non-moving rev, to get the latest styling config from this repo. Run the following command after `pre-commit install`:

```bash
pre-commit autoupdate --bleeding-edge --repo "https://github.com/NextGenContributions/nitpick"
```

## Important notes

Since `nitpick` is not very well maintained and despite our efforts, there are still plenty of issues with it. It's recommended to go through the list of issues here https://github.com/NextGenContributions/nitpick/issues and workaround them as needed while modifying the configs in your project to avoid surprises.

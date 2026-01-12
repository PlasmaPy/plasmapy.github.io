import nox

nox.options.default_venv_backend = "uv|virtualenv"


@nox.session
def build(session) -> None:
    """Build the site with Nikola."""
    session.install("-r", "requirements.txt")
    session.run("nikola", "build")


@nox.session
def check(session) -> None:
    """Perform basic checks on the generated site."""
    session.install("-r", "requirements.txt")
    session.run("nikola", "build")
    session.run(
        "nikola",
        "check",
        "--check-files",
        "--find-sources",
    )


@nox.session
def check_thoroughly(session) -> None:
    """
    Perform extensive checks on the generated site, including remote links.

    This check includes some expected failures. For example, the
    --check-links option fails due to `url('None')` showing up in the
    generated output for affiliates/index.html.
    """
    session.install("-r", "requirements.txt")
    session.run("nikola", "build")
    session.run(
        "nikola",
        "check",
        "--check-files",
        "--find-sources",
        "--check-links",
        "--remote",
    )


@nox.session
def clean(session) -> None:
    """Remove output files."""
    session.install("-r", "requirements.txt")
    session.run("nikola", "clean")

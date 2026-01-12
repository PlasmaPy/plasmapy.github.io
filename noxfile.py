import nox

nox.options.default_venv_backend = "uv|virtualenv"


@nox.session
def build(session) -> None:
    """Build the site with Nikola."""
    session.install("-r", "requirements.txt")
    session.run("nikola", "build")


@nox.session
def check(session) -> None:
    """Check links and files in the generated site."""
    session.install("-r", "requirements.txt")
    session.run("nikola", "build")
    session.run(
        "nikola",
        "check",
#        "--check-links",
        "--check-files",
        "--find-sources",
    )


@nox.session
def clean(session) -> None:
    """Remove output files."""
    session.install("-r", "requirements.txt")
    session.run("nikola", "clean")

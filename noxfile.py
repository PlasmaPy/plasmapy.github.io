import nox

nox.options.default_venv_backend = "uv|virtualenv"


@nox.session
def build(session) -> None:
    session.install("-r", "requirements.txt")
    session.run("nikola", "build")


@nox.session
def check(session) -> None:
    session.install("-r", "requirements.txt")
    session.run(
        "nikola",
        "check",
        "--check-links",
        #        "--check-files",
        "--find-sources",
    )

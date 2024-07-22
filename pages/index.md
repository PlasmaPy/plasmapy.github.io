title: The PlasmaPy Project
hidetitle: True

<!-- Feature Cards -->
<div class="feature-row">
    <!-- Feature 1 -->
    <div class="feature-column">
        <a class="feature-link" href="meetings/office_hours">
        <div class="feature-card"
              style="background-image: linear-gradient(rgba(255, 255, 255, 0.5),
                                       rgba(255, 255, 255, 0.5)),
                                       none;
              background-color: var(--plasmapy-light-red)">
            <div>
                <h2>PlasmaPy</h2>
                <h2>"Office" Hours</h2>
                <h3>Thursdays at 3:00 pm ET</h3>
            </div>
        </div>
        </a>
    </div>
    <!-- Feature 2 -->
    <div class="feature-column">
        <a class="feature-link" href="meetings/weekly">
        <div class="feature-card">
            <div>
                <h1>Weekly Community Meeting</h1>
                Tuesday 2:00 pm ET
            </div>
        </div>
        </a>
    </div>
    <!-- Feature 3 -->
    <div class="feature-column">
        <a class="feature-link" href="meetings/summer-school-2024">
        <div class="feature-card"
              style="background-image: linear-gradient(rgba(255, 255, 255, 0.0),
                                       rgba(255, 255, 255, 0.0)),
                                       none;
                     background-color: var(--plasmapy-darkblue)">
            <div>
                <h1 style="color: #d8d8d8">PlasmaPy Summer School 2024</h1>
                <p style="color: #d8d8d8">
                    July 29 – August 1, 2024 at Bryn Mawr College
                </p>
            </div>
        </div>
        </a>
    </div>
</div>

<br>

<!-- YouTube Video-->
<div class="aspect-ratio-80pc">
    <iframe src="https://www.youtube-nocookie.com/embed/E8RwQF5wcXM"
            style="border: 1px solid black"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
</div>

<br/>

[`conda`]: https://docs.conda.io/en/latest
[`pip`]: https://pip.pypa.io/en/stable
[code contribution workflow]: https://docs.plasmapy.org/en/latest/contributing/workflow.html
[coding guidelines]: https://docs.plasmapy.org/en/latest/contributing/coding_guide.html
[**contributor guide**]: https://docs.plasmapy.org/en/latest/contributing/index.html
[Element chat room]: https://app.element.io/#/room/#plasmapy:openastronomy.org
[feature requests]: https://github.com/PlasmaPy/PlasmaPy/issues/new?assignees=&labels=feature+request&projects=&template=feature_request.yml
[gallery of example notebooks]: https://docs.plasmapy.org/en/stable/examples.html
[getting ready to contribute]: https://docs.plasmapy.org/en/latest/contributing/getting_ready.html
[GitHub Discussions]: https://github.com/PlasmaPy/PlasmaPy/discussions
[installation instructions]: https://docs.plasmapy.org/en/latest/install.html
[many ways to contribute]: https://docs.plasmapy.org/en/latest/contributing/many_ways.html
[PlasmaPy's documentation]: https://docs.plasmapy.org/en/stable
[Python]: https://www.python.org
[submitting bug reports]: https://github.com/PlasmaPy/PlasmaPy/issues/new?assignees=&labels=Bug&projects=&template=bug_report.yml
[writing documentation]: https://docs.plasmapy.org/en/latest/contributing/doc_guide.html
[writing tests]: https://docs.plasmapy.org/en/latest/contributing/testing_guide.html


The goal of the PlasmaPy Project is to foster the creation of an open
source [Python] ecosystem for plasma research and education. The
PlasmaPy package contains core functionality for this software
ecosystem, while affiliated packages will contain more specialized
functionality.

## Install PlasmaPy

PlasmaPy may be installed from the command line using [`pip`]:

```shell
pip install plasmapy
```

**Note:** If you run into difficulty using `pip`, you may also try using
`pip3` or `python -m pip` or `python3 -m pip` as the command.

If you have a working installation of [`conda`], then you may install
PlasmaPy with:

```shell
conda install -c conda-forge plasmapy
```

[PlasmaPy's documentation] contains more detailed [installation
instructions]. If you are unfamiliar with Python, please check out the
[Python] website.

## Learn PlasmaPy

[PlasmaPy's documentation] describes how to use PlasmaPy and includes a
[gallery of example notebooks].

## Get Help

The quickest way to reach PlasmaPy users and developers is in PlasmaPy's
[Element chat room]. The [GitHub Discussions] page is an ideal place for
longer discussions on more detailed topics.

## Contribute and Report Bugs

There are [many ways to contribute] to an open source project, including
making [feature requests], [submitting bug reports], and organizing
events.

PlasmaPy's [**contributor guide**] covers [getting ready to contribute],
the [code contribution workflow], [coding guidelines], [writing
documentation], and [writing tests].

## Acknowledgments

Ongoing development of PlasmaPy is supported by the U.S. National
Science Foundation, with many contributions from the broader plasma
physics and open source communities. Past development of PlasmaPy has
been supported by the U.S. Department of Energy, the Smithsonian
Institution, NASA, and Google Summer of Code.

<!--
.. title: PlasmaPy v0.6.0 release!
.. slug: plasmapy-v060-release
.. date: 2021-03-14 18:08:56 UTC+02:00
.. tags: plasmapy, release
.. category: release
.. description: Release of PlasmaPy version 0.6.0
.. type: text
.. author: Dominik Stańczak
-->

# PlasmaPy 0.6.0

We're really happy to announce that we've just released [PlasmaPy version
0.6.0](https://docs.plasmapy.org/en/stable/whatsnew/0.6.0.html)! 

We'd like to thank the wonderful people who have contributed to this release:

* Anthony Vo
* Dhawal Modi *
* Dominik Stańczak
* Drozdov David *
* Erik Everson
* Kevin Montes *
* Nick Murphy
* Peter Heuer
* Ramiz Qudsi
* Tiger Du

Where a * indicates their first contribution to PlasmaPy.

Note also that **this release drops Python 3.6 support**; we now
require Python 3.7, following NumPy's [NEP
29](https://numpy.org/neps/nep-0029-deprecation_policy.html).

# The cool new features

Note: these are my (Dominik's) personal highlights. There's more, but these make the
prettiest plots right now.

## Two-fluid dispersion relations

<center>
[![Dispersion relations for two fluid systems](https://docs.plasmapy.org/en/stable/_images/notebooks_dispersion_two_fluid_dispersion_18_1.png)](https://docs.plasmapy.org/en/stable/notebooks/dispersion/two_fluid_dispersion.html)
</center>

In [PR #932](https://github.com/plasmapy/plasmapy/pull/932) Ramiz Qudsi
implemented P. M. Bellan's 2012 full two-fluid dispersion relation for any
electron-ion system. Take a look at [the notebook introducing
that](https://docs.plasmapy.org/en/stable/notebooks/dispersion/two_fluid_dispersion.html).

## Proton radiography

<center>
[![Proton radiograph](https://docs.plasmapy.org/en/stable/_images/notebooks_diagnostics_proton_radiography_particle_tracing_14_0.png)](https://docs.plasmapy.org/en/stable/notebooks/diagnostics/proton_radiography_particle_tracing.html)
</center>

Peter Heuer designed and implemented a framework for synthetic proton
radiography. This is a multi-PR tour de force that simulates particles moving
through EM fields and hitting a detector plane, generating histograms such as
the above. I'd point you to the notebook on that, but [there's three right
now](https://docs.plasmapy.org/en/stable/examples.html#analyses-diagnostics).

## Analysis & Diagnostic framework; Langmuir probes

<center>
[![Langmuir probe sweep](https://docs.plasmapy.org/en/stable/_images/notebooks_analysis_swept_langmuir_find_floating_potential_21_0.png)](https://docs.plasmapy.org/en/stable/notebooks/analysis/swept_langmuir/find_floating_potential.html)
</center>

Erik Everson is spearheading work on our [analysis & diagnostic
framework](https://docs.plasmapy.org/en/stable/ad/index.html).  As the
first example, we've got a new and improved set of [tools for swept Langmuir
analysis](https://docs.plasmapy.org/en/stable/ad/index.html).

# What's next?

For this year, we're planning to have a roughly 3-month cadence for releases. Thus,
the next release is anticipated around mid June.

It should contain a refactored particle tracker, support for neoclassical
transport coefficient calculations for axisymmetric devices along with our
first forays into tools for fusion.

Also, for the first time in the history of PlasmaPy, we've got [a roadmap for
the year](https://hackmd.io/@plasmapy/ry0mmnj6v/edit).

One final note: we're discussing transitioning to some form of [Calendar
Versioning](https://calver.org/). If you have thoughts on that, we'd be happy
to hear them!  Come join the discussion on [our Matrix
chatroom](https://app.element.io/#/room/#plasmapy:openastronomy.org).

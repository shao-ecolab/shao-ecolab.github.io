---
title: Software
description: Models and open-source code developed and used by the Shao Lab.
keywords:
  - Software
  - Models
  - Open Source
  - ecosys
  - McGill Wetland Model
---

# Software & Models

The lab's work is built on process-based ecosystem models. We develop new process representations, contribute them upstream, and release the analysis code behind our papers.

## Models We Develop

### McGill Wetland Model (MWM)

A process-based model of peatland carbon and nutrient cycling. Our contributions added peat cohort tracking, microbial controls on decomposition, and an explicit ericoid mycorrhizal fungal pool coupled to shrub nutrient demand.

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 6 6

```{image} images/mwm-structure.webp
:alt: MWM structure: net primary production feeding litter into stacked peat cohorts with diffusion, advection and runoff, expanded to show the soil organic carbon, dissolved organic carbon, microbial biomass and enzyme pools
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Peat cohort tracking and microbial decomposition. From [Shao et al. 2022, *STOTEN*](https://doi.org/10.1016/j.scitotenv.2021.151223)
```

:::
:::{grid-item}
:columns: 12 12 6 6

```{image} images/mwm-bog-diagram.webp
:alt: Cross-section of an ombrotrophic bog showing carbon, nitrogen and phosphorus pools and fluxes among Sphagnum moss, ericaceous shrubs, ericoid mycorrhizal fungi, saprotrophs and the acrotelm and catotelm peat layers
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Simulated C, N and P pools and fluxes at Mer Bleue. From [Shao et al. 2023, *New Phytologist*](https://doi.org/10.1111/nph.18555)
```

:::

::::

*Applied in:* peatland carbon and nutrient cycling — see [Research](research)

---

### Myco-CORPSE

An extension of the CORPSE soil carbon model that represents mycorrhizal functional diversity and the carbon cost of nitrogen acquisition in temperate forests, with explicit ectomycorrhizal and arbuscular mycorrhizal pools.

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 6 6

```{image} images/myco-corpse-structure.webp
:alt: Myco-CORPSE structure: plant, saprotroph, protected and unprotected soil organic matter pools and inorganic nitrogen, with newly added ectomycorrhizal and arbuscular mycorrhizal fungal pools exchanging carbon and nitrogen with the plant
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Model structure, with the mycorrhizal pools added to CORPSE. From [Shao et al. 2023, *SBB*](https://doi.org/10.1016/j.soilbio.2023.109073)
```

:::
:::{grid-item}
:columns: 12 12 6 6

```{image} images/myco-corpse-diagram.webp
:alt: Conceptual diagram linking nitrogen deposition, temperature and CO2 to soil nitrogen supply, plant nitrogen demand and the carbon cost of mycorrhizal fungi
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Drivers of mycorrhizal carbon cost. From [Shao et al. 2025, *JGR: Biogeosciences*](https://doi.org/10.1029/2025JG009198)
```

:::

::::

*Applied in:* mycorrhizal carbon economies in forests — see [Research](research)

---

### ecosys

A comprehensive process-based ecosystem model. We extended it with mineral dissolution kinetics so that enhanced rock weathering is simulated alongside, rather than separately from, plant and microbial activity.

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 6 6

```{image} images/ecosys-model-schematic.webp
:alt: Schematic of enhanced rock weathering in the ecosys model: geochemical weathering, secondary precipitation, the soil nutrient cycle, production of non-carbonate acids and plant eco-hydrological feedbacks
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Coupled weathering, nutrient and plant processes as implemented in ecosys
```

:::
:::{grid-item}
:columns: 12 12 6 6

```{image} images/ecosys-erw-schematic.webp
:alt: Schematic of the plant-microbe CO2 pump - photosynthesis fuels microbial respiration, whose CO2 drives silicate weathering, while the products are exported, precipitated or adsorbed alongside soil organic carbon accumulation
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

The plant–microbe CO₂ pump linking biological activity to weathering
```

:::

::::

*Applied in:* enhanced rock weathering and soil carbon removal — see [Research](research)

---

## Technical Skills

**Languages:** Fortran, Python, MATLAB, R, C, Stella

**Computing:** Linux environments, high-performance computing, GPU-accelerated workflows

**Training:** NERSC N-Ways to GPU Programming Bootcamp (2025); NCAR/UCAR Community Terrestrial Systems Model (CTSM) Tutorial (2022)

:::{note}
Code repositories for individual papers are being migrated to the [lab GitHub organization](https://github.com/shao-ecolab). Check back, or email for access in the meantime.
:::

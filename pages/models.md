---
title: Models
description: Process-based ecosystem models developed and used by the Shao EcoLab.
keywords:
  - Software
  - Models
  - Open Source
  - ecosys
  - McGill Wetland Model
---

# Models

The lab's work is built on process-based ecosystem models. We develop new process representations, test them against field and laboratory data, and release the analysis code behind our papers.

## McGill Wetland Model (MWM)

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

```{image} images/mwm-erm-structure.webp
:alt: Two-panel MWM structure diagram: nutrient flows among moss, shrubs, ericoid mycorrhizal fungi, saprotrophs and soil organic and inorganic pools, and the carbon, nitrogen and phosphorus exchange between shrub and ericoid mycorrhizal reserves
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Nutrient cycling and the shrub–ericoid mycorrhizal exchange. From [Shao et al. 2023, *New Phytologist*](https://doi.org/10.1111/nph.18555)
```

:::

::::

*Model website:* [mwmpeat.weebly.com](https://mwmpeat.weebly.com)

*Applied in:* peatland carbon and nutrient cycling — see [Research](research)

---

## Myco-CORPSE

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

## ecosys

A comprehensive process-based ecosystem model. We extended it with mineral dissolution kinetics so that enhanced rock weathering is simulated alongside, rather than separately from, plant and microbial activity.

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 6 6

```{image} images/ecosys-architecture.webp
:alt: Integrated process architecture of ecosys — climate and disturbance drivers, the ecosystem energy balance, atmospheric composition, plant photosynthesis and resource-driven allocation among leaves, wood, roots, mycorrhizae and reproduction, a layered soil profile with macropore and micropore flow, five substrate-microbe complexes, microbial functional groups from aerobic heterotrophs to methanogens and mycorrhizal fungi, separate carbon, nitrogen, phosphorus, water and energy cycles, mineral transformations and reactive transport, the couplings among those cycles, surface runoff and erosion, lateral export to downstream ecosystems, and a panel of ecosystem outputs from gross primary production to stream chemistry
:width: 100%
:class: model-fig
```

```{div}
:class: fig-caption

Integrated process architecture: coupled C, N, P, water, energy and mineral transformations across plant, soil and atmosphere
```

:::
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

::::

*Source code:* [github.com/jinyun1tang/ECOSYS](https://github.com/jinyun1tang/ECOSYS)

*Applied in:* enhanced rock weathering and soil carbon removal — see [Research](research)

---

:::{note}
Code repositories for individual papers are being migrated to the [lab GitHub organization](https://github.com/shao-ecolab). Check back, or email for access in the meantime.
:::

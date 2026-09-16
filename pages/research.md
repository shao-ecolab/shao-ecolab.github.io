---
title: Research
description: Research areas, themes and grants of the Shao Lab.
keywords:
  - Research
  - Ecosystem Modeling
  - Mycorrhizal Fungi
  - Peatlands
  - Enhanced Rock Weathering
---

# Research

## Microbes as active players in ecosystem models

Our research asks how the activity of soil microorganisms — fungi in particular — sets the rate of carbon and nutrient cycling at the ecosystem scale, and what changes when models represent that activity explicitly rather than burying it in bulk decay constants. We combine process-based ecosystem models with field and laboratory data across peatlands, temperate forests and agricultural soils, working at the interface of microbial ecology, soil biogeochemistry and numerical modeling.

---

## Themes & Tools

::::{grid} 1 1 3 3

:::{card} Process-based ecosystem modeling
*model development, numerical experiments, field and laboratory validation*
:::

:::{card} Microbial traits in models
*trait data synthesis, data–model integration, scaling from isolate to ecosystem*
:::

:::{card} Machine learning & digital twins
*knowledge-guided surrogates, long-term emulation, GPU workflows*
:::

::::

---

## Research Areas

### Mycorrhizal carbon economies in forests

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 5 5

```{image} images/research-forests.webp
:alt: Conceptual diagram linking nitrogen deposition, temperature and CO2 to soil nitrogen supply, plant nitrogen demand and the carbon cost of mycorrhizal fungi
:width: 100%
:class: research-fig
```

:::

:::{grid-item}
:columns: 12 12 7 7

Plants trade photosynthate for nutrients acquired by mycorrhizal fungi, but the terms of that trade differ sharply between fungal types and shift under global change. We build mycorrhiza-explicit soil models to ask what carbon cost a forest pays for its fungal partners, when that investment stops paying off, and how the answer depends on fungal traits, climate and litter chemistry. This work shows that ectomycorrhizal effects on decomposition — the Gadgil effect among them — are contingent rather than universal, and that representing functional diversity changes predicted soil nitrogen cycling.

*Relevant publications:* [Shao et al. *JGR: Biogeosciences* (2025)](https://doi.org/10.1029/2025JG009198) · [Shao et al. *Soil Biology and Biochemistry* (2023)](https://doi.org/10.1016/j.soilbio.2023.109073) · [Shao & Sulman, *New Phytologist* (2024)](https://doi.org/10.1111/nph.19746)

*Model:* [Myco-CORPSE](software)

:::
::::

---

### Peatland carbon and nutrient cycling

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 5 5

```{image} images/research-peatlands.webp
:alt: Cross-section of an ombrotrophic bog showing carbon, nitrogen and phosphorus pools and fluxes among Sphagnum moss, ericaceous shrubs, ericoid mycorrhizal fungi, saprotrophs and the acrotelm and catotelm peat layers
:width: 100%
:class: research-fig
```

:::

:::{grid-item}
:columns: 12 12 7 7

Northern peatlands hold a large share of global soil carbon, and their fate under warming and nitrogen deposition depends on microbial and mycorrhizal processes that peatland models have largely left implicit. We extended the McGill Wetland Model with peat cohort tracking, microbial controls and an explicit ericoid mycorrhizal pool, and used it to ask how nutrient cycling mediated by plant–microbe interactions shapes the response of ombrotrophic bogs to fertilization and environmental change.

*Relevant publications:* [Shao et al. *New Phytologist* (2023)](https://doi.org/10.1111/nph.18555) · [Shao et al. *Science of the Total Environment* (2022)](https://doi.org/10.1016/j.scitotenv.2021.151223) · SPRUCE-MIP multi-model intercomparison (in review)

*Model:* [McGill Wetland Model](software)

:::
::::

---

### Enhanced rock weathering and soil carbon removal

::::{grid} 1 1 2 2

:::{grid-item}
:columns: 12 12 5 5

```{image} images/research-erw.webp
:alt: Schematic of the plant-microbe CO2 pump: photosynthesis fuels microbial respiration, whose CO2 drives silicate weathering, while weathering products are exported, precipitated, or adsorbed alongside soil organic carbon accumulation
:width: 100%
:class: research-fig
```

:::

:::{grid-item}
:columns: 12 12 7 7

Enhanced rock weathering spreads crushed silicate rock on farmland to draw down CO₂, and its potential is usually estimated with geochemistry-centred models that treat soil biology as a passive backdrop. We couple plant, microbial and geochemical processes in a single process-based model to ask how much of the predicted carbon removal is actually realized in a living, biologically active soil — where plant-derived carbon fuels the respiration that drives weathering, where weathering products are retained rather than exported, and how soil organic carbon responds. The work bears directly on measurement, reporting and verification for soil-based carbon dioxide removal.

*Relevant publications:* Shao et al., *Biological processes govern carbon removal during enhanced rock weathering* (in preparation) · Esquivel et al., *Beyond weathering: combining organic and inorganic soil-based carbon drawdown* (in preparation)

*Model:* [ecosys](software)

:::
::::

---

## Grants

### Funded

:::{dropdown} As Co-PI
:open:

**Shao, S.** (Co-PI). "Transforming subsurface prediction with an autonomous, multi-agent AI workflow for multi-scale coupled bio-hydrogeochemical modeling." Department of Energy, Genesis Mission. $585,000. 2026--2027 (Phase I).

:::

:::{dropdown} As Contributor

"From early Earth to Mars: Advancing an integrated 'Landscape Terraformation science' of how life transforms planets with a multi-scale collaboratory digital twinning of Biosphere 2." University of Arizona, Big Idea Challenge. $250,000. 2025--2027.

:::

---

See also: [Publications](publications) · [Talks & Presentations](talks) · [Software & Models](software)

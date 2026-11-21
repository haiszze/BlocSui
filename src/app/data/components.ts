/** One pass-through key and what it changes per platform. */
export interface PtKey {
  key: string;
  title: string;
  summary?: string;
  mobile?: string;
  desktop?: string;
}

export interface ComponentDoc {
  slug: 'select' | 'multiselect';
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  /** File name under public/prime-pt, shown in the code viewer. */
  ptFile: string;
  keys: PtKey[];
}

export const COMPONENT_DOCS: ComponentDoc[] = [
  {
    slug: 'select',
    title: 'Select',
    tagline: 'Dropdown on desktop. Bottom sheet on mobile.',
    description:
      'A PrimeNG Select that swaps its append target per platform, becomes a full-width bottom sheet on phones, and gains a sticky Cancel row.',
    tags: ['Dynamic overlay', 'Bottom sheet', 'Label wrapping'],
    ptFile: 'select.pt.ts',
    keys: [
      {
        key: 'root',
        title: 'Overlay target and Cancel injection',
        summary: 'Overrides the append target signal and injects a sticky Cancel footer on mobile.',
        mobile:
          'Appends the overlay to the document body to escape parent overflow and z-index, then adds a sticky Cancel row at the bottom of the sheet.',
        desktop: 'Appends the overlay inline next to the trigger, inside its normal stacking context.',
      },
      {
        key: 'pcOverlay.root',
        title: 'Backdrop and positioning',
        mobile: 'A full-screen, semi-transparent backdrop covers the viewport.',
        desktop: 'No backdrop. The overlay matches the full width of its container.',
      },
      {
        key: 'pcOverlay.content',
        title: 'Bottom sheet or dropdown shape',
        mobile:
          'Anchors the panel to the bottom, centres it, caps height at 80vh, lays it out as a column and drops the bottom radius.',
        desktop: "Keeps PrimeNG's positioning with full height and hidden overflow for clean scrolling.",
      },
      {
        key: 'listContainer',
        title: 'Scrollable list area',
        mobile: 'Grows to fill the remaining height inside the sheet.',
        desktop: 'Removes horizontal padding for edge-to-edge option alignment.',
      },
      {
        key: 'optionLabel',
        title: 'Option label wrapping',
        summary:
          "Applied on every platform. Replaces PrimeNG's truncation so long labels wrap, break at word boundaries and hyphenate.",
      },
    ],
  },
  {
    slug: 'multiselect',
    title: 'MultiSelect',
    tagline: 'Checklist on desktop. Full sheet on mobile.',
    description:
      'A PrimeNG MultiSelect with the same adaptive overlay, a pinned Cancel row that clears the selection, and option text that wraps instead of clipping.',
    tags: ['Dynamic overlay', 'Bottom sheet', 'Select all'],
    ptFile: 'multiselect.pt.ts',
    keys: [
      {
        key: 'root',
        title: 'Overlay target and Cancel injection',
        summary: 'Overrides the append target signal and injects a sticky Cancel footer on mobile.',
        mobile:
          'Appends the overlay to the document body, then adds a sticky Cancel row. Cancel hides the panel and clears the current value.',
        desktop: 'Appends the overlay inline next to the trigger, inside its normal stacking context.',
      },
      {
        key: 'overlay',
        title: 'Backdrop, positioning and sheet shape',
        summary: 'Combines backdrop, position and panel shape into one key when the overlay lives on the body.',
        mobile:
          'Full-screen backdrop, panel anchored to the bottom at 60vw (full width on small screens), capped at 80vh, bottom radius removed.',
        desktop: 'No backdrop. Constrained to the container width with standard overflow.',
      },
      {
        key: 'header',
        title: 'Header padding',
        summary:
          'Applied on every platform. Tightens horizontal padding so the filter input and select-all checkbox line up with the list.',
      },
      {
        key: 'listContainer',
        title: 'Scrollable list area',
        mobile: 'Fills the remaining height so the list scrolls while the Cancel row stays pinned.',
        desktop: 'Removes horizontal padding on the container and inner list for edge-to-edge options.',
      },
      {
        key: 'option',
        title: 'Option label wrapping',
        summary:
          "Applied on every platform. Targets the inner content node to override PrimeNG's truncation so long labels wrap across lines.",
      },
    ],
  },
];

export function findDoc(slug: string | undefined): ComponentDoc {
  return COMPONENT_DOCS.find((d) => d.slug === slug) ?? COMPONENT_DOCS[0];
}

/** Long labels used by the live previews, so the wrapping fix is visible. */
export const SAMPLE_OPTIONS = [
  { label: 'Quarterly operations review for the northern distribution region', value: 'ops' },
  { label: 'Customer onboarding checklist with identity verification steps', value: 'onboarding' },
  { label: 'Incident postmortem template, including timeline and follow-ups', value: 'postmortem' },
  { label: 'Design system audit covering tokens, components and accessibility', value: 'audit' },
  { label: 'Hiring plan for platform engineering, second half of the year', value: 'hiring' },
  { label: 'Vendor security questionnaire and data processing agreement', value: 'vendor' },
  { label: 'Release notes', value: 'release' },
  { label: 'Roadmap', value: 'roadmap' },
];

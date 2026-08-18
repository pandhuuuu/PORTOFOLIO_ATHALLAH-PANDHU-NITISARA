---
name: High-Energy Academic
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#006688'
  on-secondary: '#ffffff'
  secondary-container: '#00c1fd'
  on-secondary-container: '#004b65'
  tertiary: '#3737c5'
  on-tertiary: '#ffffff'
  tertiary-container: '#5153de'
  on-tertiary-container: '#e3e2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#c2e8ff'
  secondary-fixed-dim: '#75d1ff'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d67'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  vibrant-blue: '#0052FF'
  electric-cyan: '#00C2FF'
  deep-indigo: '#4338CA'
  surface-base: '#F8FAFC'
  surface-card: '#FFFFFF'
  status-success: '#10B981'
  status-warning: '#F59E0B'
  status-error: '#EF4444'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system represents a fusion of **Corporate Modernism** and **High-Contrast Bold** aesthetics. It is designed for environments where academic precision must meet modern energy—ideal for technical portfolios, research platforms, or high-end SaaS applications that require both authority and dynamism.

The personality is sharp, disciplined, and unapologetically professional. By moving away from muted tones toward a more vibrant, high-contrast palette, the system evokes a "high-performance" emotional response. It maintains a clean, structured foundation with heavy emphasis on white space, but punctuates the experience with intense color and crisp typography to ensure information isn't just readable, but impactful.

## Colors

The color strategy is "Striking Precision." We use a deeper, more saturated primary blue to command attention, paired with high-energy secondary and tertiary accents.

- **Primary (Electric Cobalt):** A vibrant, high-chroma blue used for critical actions and brand identity. It provides the "energy" in the professional aesthetic.
- **Secondary (Cyan):** Used for technical highlights and data visualization, offering a modern, tech-forward contrast to the primary blue.
- **Neutral (Slate/Navy):** The neutrals are shifted toward a darker, cooler slate (`#0F172A`) to provide maximum contrast against the white surfaces.
- **Surface Strategy:** We utilize a "Pure White" on "Cool Gray" stacking logic. Backgrounds use a very light tint, while cards and interactive surfaces are pure white to "pop" off the screen.

## Typography

The system uses **Inter** for all narrative content, leveraging its "Variable" capabilities to create tight, impactful headings with negative letter-spacing. For technical data and labels, **JetBrains Mono** provides a monospaced contrast that signals engineering precision.

- **Headlines:** Use high font weights (700-800) to maintain the "Bold" requirement. 
- **Labels:** All-caps labels should be used for section headers and eyebrow text to maximize hierarchical clarity.
- **Technical Readability:** Code snippets and technical metadata must always use the `label-code` style to ensure they are visually distinct from prose.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to emulate a structured academic journal or a premium dashboard. 

- **Grid System:** A 12-column grid with 24px gutters. Content should be centered with a max-width of 1280px to prevent line lengths from becoming unreadable on ultra-wide monitors.
- **Rhythm:** An 8px base unit is used for all internal component spacing (8, 16, 24, 32...). Larger gaps (64, 80, 120) should be used between major sections to emphasize the minimalist, "airy" feel.
- **Mobile Reflow:** On mobile, the grid collapses to a single column with 20px side margins. Vertical rhythm is tightened to 48px between sections.

## Elevation & Depth

To maintain "Academic Precision," depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than heavy skeuomorphism.

- **Stacking:** Surface containers (`#FFFFFF`) sit atop the background (`#F8FAFC`).
- **High-Contrast Outlines:** Instead of soft borders, use a 1px solid border in a slightly darker neutral (`#E2E8F0`) to define edges clearly. 
- **Elevation:** Shadows are reserved for floating elements (modals, dropdowns) and "Active" states. Use an ultra-diffused, low-opacity shadow with a slight primary tint: `0px 10px 25px -5px rgba(0, 82, 255, 0.1)`.
- **Interactive Depth:** On hover, cards should not just lift, but the border-color should shift to the `primary_color` to provide high-energy feedback.

## Shapes

The shape language is **Soft (Level 1)**. 

The 0.25rem (4px) corner radius provides a precision-engineered look. It is enough to feel modern and "finished," but sharp enough to maintain a serious, institutional tone.

- **Standard Elements:** Buttons, Inputs, and Cards use the base 0.25rem.
- **Pill Elements:** Use `rounded-full` exclusively for status badges and technical chips (e.g., "In Progress", "SQL") to make them look like distinct, tactile objects within the rigid grid.

## Components

- **Buttons:** Primary buttons use the vibrant Primary Blue with white text. They should feel "heavy" and impactful. Ghost buttons use a 2px border for a "Bold" feel compared to the standard 1px.
- **Technical Chips:** Use high-contrast pairings. Instead of pale backgrounds, use a medium-tint background (15% opacity of the accent color) with a bold, 800-weight `label-code` text.
- **Input Fields:** Use a 2px bottom border or a full 1px border that thickens and changes color to Primary Blue on focus. Labels use the `label-caps` style for an "engineered" form look.
- **Status Labels:** Use the `named_colors` for success, warning, and error. These should be high-chroma to ensure they are the first thing a user notices in a dense data view.
- **Cards:** Cards are pure white with a 1px `#E2E8F0` border. On hover, the border transitions to a 2px `primary_color` border, creating a high-energy "snap" effect.
- **Data Tables:** Use the `neutral_color` for headers with `label-caps` typography. Rows should have subtle zebra striping using the `surface-base` color.
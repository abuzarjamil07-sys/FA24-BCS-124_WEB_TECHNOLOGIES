# Midterm - Upgrade Your E-commerce Listing and Product Pages

**Name:** ABUZAR JAMIL
**Roll No:** FA24-BCS-124

| Value | Formula | Result |
|---|---|---|
| N | last two digits of roll number | 24 |
| BP | 600 + N | 624px |
| H | (N x 7) mod 360 | 168 (accent: hsl(168, 70%, 45%)) |
| K | (N mod 3) + 3 | 3 categories |

Sticky offset = (N mod 40) + 70 = 94px. Premium limit = N x 100 = Rs. 2,400.

## Files changed
- `index.html` (Task 1 and Task 3)
- `product.html` (Task 2)
- `style.css` (Tasks 1, 2 and 3)
- `script.js` (new file, Task 3)
- Deleted two stray HTML files from `images/`

## Task 1 - CSS-only category filter
I added K + 1 = 4 hidden radio buttons (All, Earrings, Chains & Bracelets, Rings & Sets) and gave every product card a category class. The CSS uses `:checked` with the `~` sibling selector to hide cards that do not match with `display: none`, so the grid leaves no gaps. The selected filter label is coloured with the accent hue 168. No JavaScript is used.

## Task 2 - Product page with CSS Grid and sticky box
I rebuilt the layout of `product.html` with CSS Grid and named `grid-template-areas`. Below 624px it is one column (image, details, description). From 624px up, the image and details sit side by side and the description spans the full width underneath. The details box uses `position: sticky; top: 94px` and `align-items: start` so it can stay in view while scrolling. I lengthened the description so the sticky effect is visible.

## Task 3 - JavaScript search, sort and Premium label
`script.js` works on the existing cards. Search filters by product name (case-insensitive) and works together with the Task 1 filter by checking each card's final computed display value. If no card is visible, a "No products found" message replaces the grid. The sort button reads each price from the card text and reorders the existing cards with `appendChild`, alternating low-to-high and high-to-low. Products above Rs. 2,400 get a "Premium" label added when the page loads.

## AI tools used
Claude (Anthropic)
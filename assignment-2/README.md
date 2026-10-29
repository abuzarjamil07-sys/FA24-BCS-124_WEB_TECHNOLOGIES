# Assignment 2 - Static, Responsive E-commerce Pages

## Reference Site
- **Name:** Russet
- **URL:** https://shoprusset.com/

![Homepage](russet-home.png)

## What I built
- `index.html` - homepage with navbar, hero, 8-product responsive grid, footer
- `product.html` - product detail page with image, price, description, quantity selector, footer
- `style.css` - custom colours, fonts and small tweaks on top of Bootstrap

## Tech
Bootstrap 5.3 (via CDN) for the navbar and grid (`container`, `row`, `col-*`), which is built on Flexbox. No JavaScript written by me; Bootstrap's own JS is only used for the mobile hamburger menu.

## Responsive behaviour
| Width | Product grid |
|-------|--------------|
| ~375px (phone) | 2 columns, navbar collapses to hamburger |
| ~768px (tablet) | 3 columns |
| 992px+ (desktop) | 4 columns, full navbar |
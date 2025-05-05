# Codebase Structure

This document outlines the structure of the Chakra Hotel project codebase.

## Root Directory (`/`)

*   `next-env.d.ts`: TypeScript definitions for Next.js environment variables.
*   `next.config.mjs`: Next.js configuration file.
*   `package-lock.json`: Records the exact versions of installed npm packages and their dependencies, ensuring reproducible builds.
*   `package.json`: Contains project metadata, scripts (like `dev`, `build`, `start`, `lint`), and lists project dependencies.
*   `postcss.config.js`: Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins (often used with Tailwind CSS).
*   `tailwind.config.ts`: Configuration file for Tailwind CSS, allowing customization of themes, colors, fonts, etc.
*   `tsconfig.json`: Configuration file for the TypeScript compiler (tsc), specifying root files and compiler options.
*   `components.json`: Configuration file used by shadcn/ui CLI to manage component installation and paths.

## App Directory (`app/`)

Contains the core application routing and layout structure according to the Next.js App Router.

*   `globals.css`: Global CSS styles applied throughout the application. Includes Tailwind base styles and potentially custom global styles.
*   `layout.tsx`: The root layout component. Wraps all pages and defines the basic HTML structure (`<html>`, `<body>`), often including shared UI like Navbar and Footer.
*   `page.tsx`: The React component rendered for the application's root route (`/`). This is typically the homepage.

## Components Directory (`components/`)

Contains reusable React components used throughout the application.

*   `about.tsx`: Component displaying information about the hotel.
*   `amenities.tsx`: Component listing the amenities offered by the hotel.
*   `booking-form.tsx`: Component providing a form for users to book rooms.
*   `footer.tsx`: The standard footer component displayed at the bottom of pages.
*   `gallery.tsx`: Component displaying a collection of images, likely of the hotel and rooms.
*   `hero.tsx`: The main introductory section component, usually displayed prominently on the homepage.
*   `location.tsx`: Component showing the hotel's location, possibly integrating a map.
*   `navbar.tsx`: The main navigation bar component, usually displayed at the top of pages.
*   `room-detail-modal.tsx`: A modal dialog component showing detailed information about a specific room.
*   `rooms.tsx`: Component displaying a list or grid of available hotel rooms.
*   `service-detail-modal.tsx`: A modal dialog component showing detailed information about a specific hotel service.
*   `services.tsx`: Component displaying a list of services offered by the hotel.
*   `testimonials.tsx`: Component showcasing customer reviews or testimonials.
*   `theme-provider.tsx`: Component responsible for managing and providing the application's theme (e.g., light/dark mode) using React Context.

### UI Primitives (`components/ui/`)

Contains generic, reusable UI components, often sourced from a library like shadcn/ui. These are the building blocks for more complex components.

*   `accordion.tsx`: Collapsible content sections.
*   `alert-dialog.tsx`: Modal dialogs for critical alerts requiring user confirmation.
*   `alert.tsx`: Component for displaying important messages or alerts.
*   `aspect-ratio.tsx`: Container that maintains a specific aspect ratio.
*   `avatar.tsx`: Component for displaying user avatars or profile pictures.
*   `badge.tsx`: Small status indicators or labels.
*   `breadcrumb.tsx`: Navigation element showing the user's path through the site.
*   `button.tsx`: Standard button component.
*   `calendar.tsx`: Component for displaying dates and allowing date selection.
*   `card.tsx`: Content container with a distinct background and border.
*   `carousel.tsx`: Component for displaying items in a rotating or scrollable manner.
*   `chart.tsx`: Component for rendering charts and graphs.
*   `checkbox.tsx`: Standard checkbox input component.
*   `collapsible.tsx`: Component to hide/show content sections.
*   `command.tsx`: Component for creating command palettes (like VS Code's Ctrl+Shift+P).
*   `context-menu.tsx`: Menu that appears on right-click.
*   `dialog.tsx`: Generic modal dialog component.
*   `drawer.tsx`: Side panel that slides in/out.
*   `dropdown-menu.tsx`: Menu that drops down from a trigger element.
*   `form.tsx`: Components and utilities for building forms (integrates with react-hook-form).
*   `hover-card.tsx`: Card that appears when hovering over a trigger element.
*   `input-otp.tsx`: Input field specifically designed for one-time passwords.
*   `input.tsx`: Standard text input field.
*   `label.tsx`: Label component associated with form inputs.
*   `menubar.tsx`: Horizontal menu bar typically found at the top of applications.
*   `navigation-menu.tsx`: Accessible navigation menu component.
*   `pagination.tsx`: Component for navigating between pages of content.
*   `popover.tsx`: Content container that floats above the UI, triggered by an element.
*   `progress.tsx`: Component to display the progress of an operation.
*   `radio-group.tsx`: Group of radio buttons for selecting one option.
*   `resizable.tsx`: Component for creating resizable layout panels.
*   `scroll-area.tsx`: Styled scrollable container.
*   `select.tsx`: Dropdown select input component.
*   `separator.tsx`: Visual separator line.
*   `sheet.tsx`: Similar to Drawer, a side panel often used for forms or details.
*   `skeleton.tsx`: Placeholder component used during loading states.
*   `slider.tsx`: Component for selecting a value from a range.
*   `sonner.tsx`: Library for displaying toast notifications.
*   `switch.tsx`: Toggle switch component.
*   `table.tsx`: Components for creating data tables.
*   `tabs.tsx`: Component for organizing content into switchable tabs.
*   `textarea.tsx`: Multi-line text input field.
*   `toast.tsx`: Components related to displaying toast notifications.
*   `toggle-group.tsx`: Group of toggle buttons.
*   `toggle.tsx`: Single toggle button.
*   `tooltip.tsx`: Small informational popup appearing on hover.

## Lib Directory (`lib/`)

Contains utility functions and shared logic.

*   `utils.ts`: General utility functions. Often includes `cn` from `clsx` and `tailwind-merge` for conditionally combining CSS class names.

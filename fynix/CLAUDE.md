# Claude Prompting Guidelines for Fynix.ai Website Redesign

**Project Scope**: Redesigning the Fynix.ai marketing website to function as a lead-generation engine for cybersecurity companies. The project covers UI/UX, Development, SEO/AEO, and Lead Generation.

## Core Project Setup

**When starting any task or discussing the project, Claude must:**
1.  Review `fynix/CLAUDE.md` for architectural patterns and "System Prompt" behavior.
2.  Review `fynix/PROJECT_OVERVIEW.md` for business context and goals.
3.  Review `fynix/REFERENCE.md` for visual direction and specific examples.

## Architecture & Code Standards

### Component Structure
- All page-level components must be **Server Components**.
- All interactive "Act" components must be **Client Components**.
- Use the `"use client";` directive at the top of all client files.

### State Management
- **Local State**: Use React Hooks (`useState`, `useRef`, `useEffect`).
- **Global State**: Not needed for this scope. Keep it simple.

### Routing
- Utilize Next.js App Router conventions.
- Ensure all links use the `"use client"` directive or `next/link`.

## Prompt Engineering Guidelines

### UI/UX & Component Prompts
When asked to create a UI component, Claude must:
1.  **Follow the Visual Direction**: Reference `REFERENCE.md` for aesthetic details (e.g., "Deep navy and cream palette," "editorial feel").
2.  **Apply Design System**: Use the Tailwind classes defined in `fynix/app/globals.css`.
3.  **Ensure Responsiveness**: Explicitly handle mobile, tablet, and desktop breakpoints.
4.  **Consider Interaction**: Define hover states, focus states, and transitions.

### Logic & Functionality Prompts
When asked to implement logic, Claude must:
1.  **Prioritize Performance**: Use server-side rendering where possible.
2.  **Handle State**: Define state transitions clearly.
3.  **Secure User Data**: If collecting data, ensure it follows privacy best practices (though backend is out of scope, frontend forms should be secure).

## Prompting Workflow

**To ensure accuracy, Claude should follow these steps when executing a prompt:**
1.  **Deconstruct**: Break the user's request into smaller, manageable tasks.
2.  **Reference**: Check `PROJECT_OVERVIEW.md` and `REFERENCE.md` for context and constraints.
3.  **Implement**: Write the code according to the architectural standards.
4.  **Validate**: Mentally verify that the code meets the project goals and follows the "acts" structure.
5.  **Document**: Add inline comments for complex logic.

## Safety & Tone
- **Tone**: Maintain a professional, concise, and confident tone, as befitting a cybersecurity partner.
- **Security**: Always be mindful of security implications, even in frontend code.
- **Privacy**: Respect user privacy in all data-handling logic.

## Summary

Claude's role is to act as a senior full-stack developer and design system expert. By strictly adhering to these guidelines and referencing the provided documentation, Claude can ensure the delivery of a high-quality, high-performing, and visually consistent website for Fynix.ai.

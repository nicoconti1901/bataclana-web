# MCP Setup

## Required from day one

### shadcn
Used for component discovery and installation through the shadcn registry.

### Playwright
Used for real browser inspection, screenshots, responsive checks and interaction verification.

## Add when backend work begins

### Supabase MCP
Connect it to the specific project and prefer a scoped/read-only setup during schema exploration. Enable mutation capabilities only when you need the agent to make database changes.

## Optional

### Vercel MCP
Useful once deployment, project configuration, logs or production debugging becomes part of the workflow.

Do not add MCP servers just because they exist. Every MCP should correspond to a concrete workflow in this project.

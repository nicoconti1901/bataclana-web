---
name: event-backend
description: Implements the event lifecycle from typed demo data to secure Supabase-backed administration.
---
# Event Backend

Progressive phases:
1. typed demo repository;
2. repository contract tests;
3. Supabase schema + migrations;
4. public read repository;
5. authenticated admin operations;
6. RLS and validation;
7. publish/unpublish and draft workflow;
8. browser verification.

Do not introduce database calls directly into public presentational components.
